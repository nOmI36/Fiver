'use strict';

function sendAjax(evt)
{
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'sign');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function(){
		if(xhr.status === 200){
			parseJWS(xhr.responseText);
		}
	};

	xhr.send( $('textarea#message').val() );

	return false;
}

function parseJWS(data)
{
	var [header, payload, signature] = data.split('.');
	[header,payload] = [header,payload].map(x => atob(x));

	$('#raw').html('<div>'+data+'</div>');
	$('#header').html('<div>'+header+'</div>');
	$('#payload').html('<div>'+payload+'</div>');
	$('#signature').html('<div>'+signature+'</div>');
}

var tempFile = null;

Dropzone.options.jwtUpload = {
	paramName: 'jwt',
	uploadMultiple: false,
	init: function()
	{
		this.on('success', function(file, result)
		{
			if(result.isValid){
				$('#status').removeClass('statusInvalid').addClass('statusValid');
				$('#status h2').text('Status: Signed and verified');
				$('#status p').text('');
			}
			else {
				$('#status').removeClass('statusValid').addClass('statusInvalid');
				$('#status h2').text('Status: Signature invalid');
				$('#status p').text(result.error);
			}
		});

		this.on('error', function(file, errMsg, xhr)
		{
			$('#status').removeClass('statusValid').addClass('statusInvalid');
			$('#status h2').text('Status: Error');
			$('#status p').text(errMsg);
		});

		this.on('addedfile', function(file){
			if(tempFile) this.removeFile(tempFile);
			tempFile = file;
		});
	},
	accept: function(file, done)
	{
		var reader = new FileReader();
		reader.readAsText(file);
		reader.onload = function()
		{
			try {
				var payload = reader.result.split('.',2).map(x => atob(x))[1];
				payload = JSON.stringify(JSON.parse(payload), null, '    ');
				$('#payload').text(payload);
				done();
			}
			catch(e){
				$('#payload').text('File uploaded is not a JSON Web Signature!');
				done(e);
			}
		}
	}
};

