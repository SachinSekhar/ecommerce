function submitPostForm(url, data1, callback)
{
	$.ajax({
		url: url,
        contentType:"application/json",
        dataType: 'json',
        type: 'POST',
        data: JSON.stringify(data1),
        success: callback
    });
}
function parseJQueryForm(jQueryForm)
{
	var obj={};
	jQueryForm=jQueryForm.serializeArray();

	for( index in jQueryForm)
	{
		var field=jQueryForm[index];
		obj[field['name']]=field['value'];
	}
	return obj;
}
// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {

//     // Check if the XMLHttpRequest object has a "withCredentials" property.
//     // "withCredentials" only exists on XMLHTTPRequest2 objects.
//     xhr.open(method, url, true);

//   } else if (typeof XDomainRequest != "undefined") {

//     // Otherwise, check if XDomainRequest.
//     // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);

//   } else {

//     // Otherwise, CORS is not supported by the browser.
//     xhr = null;

//   }
//   return xhr;
// }

// var xhr = createCORSRequest('GET', url);
// if (!xhr) {
//   throw new Error('CORS not supported');
// }