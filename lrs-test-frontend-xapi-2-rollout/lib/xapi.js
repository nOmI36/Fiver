exports.mockAPI = function(req,res,next)
{
	res.set('Content-Type', 'text/plain');
	res.set('x-experience-api-consistent-through', (new Date(Date.now() +100)).toISOString());
	res.set('x-experience-api-version', "1.0.3");
	res.send({
      "verb": {
        "id": "http://adlnet.gov/expapi/verbs/attended",
        "display": {
          "en-GB": "attended",
          "en-US": "attended"
        }
      },
      "version": "1.0.0",
      "timestamp": (new Date(Date.now() +100)).toISOString(),
      "object": {
        "id": "http://www.example.com/meetings/occurances/34534",
        "objectType": "Activity"
      },
      "actor": {
        "mbox": "mailto:xapi@adlnet.gov",
        "name": "xAPI mbox",
        "objectType": "Agent"
      },
      "stored": (new Date(Date.now() +100)).toISOString(),
      "authority": {
        "mbox": "mailto:lou.wolford.ctr@adlnet.gov",
        "name": "lou",
        "objectType": "Agent"
      },
      "id": "0be2bf9f-cb7f-4d06-9987-22a9ac406edd"
    });	
}
