const fs = require("fs");
const path = require("path");
const validate = require("jsonschema").validate;

try{
    let schemaFolderPath = path.join(__dirname, "./schema");
    let files = fs.readdirSync(schemaFolderPath);

    for(let i in files)
    {
        let name = files[i];
        name = path.basename(name, ".json");
        // console.log(name);

        let schemaPath = path.join(__dirname, "./schema/" + files[i]);
        let schemaContents = fs.readFileSync(schemaPath);
    
        exports[name] = JSON.parse(schemaContents);
    }

}catch(e)
{
	console.log(e);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

exports.validate = function validateTypeWrapper(type)
{
    return function(req, res, next)
    {
        var dataRequest = req.body;
        console.log(dataRequest);
        var output = validate(dataRequest, type);

        if (output.errors.length == 0)
        {
            next();
        }
        else
        {
            var message = "";
            for (var i = 0; i < output.errors.length; i++)
                message += capitalizeFirstLetter(output.errors[i].property) + " " + output.errors[i].message + ". ";
            
            res.status(500).send("500 - input validation failed. " + message);
            console.log("500 - input validation failed. " + message);
        }
    }
}