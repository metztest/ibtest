// (21/10/11) learnt to fetch ?option?att=val?att=val tail off url ...

var parameters_defs=("url="+document.URL).split("?")
var parameters = {}
for (i=0; i<parameters_defs.length; i++) {
	var def=parameters_defs[i]
	if (def.indexOf("=")>0) {
		def=def.split("=")
		parameters[def[0]]=def[1]
		}
	else parameters[def] = true
	}
// alert(parameters.url + '    n : ' + parameters.n)
/*
Slick one-liner to extract one attribute (here called "attName")...

(/\?attName=([^?]*)/(document.URL)||[])[1]

or with a default value

(/\?attName=([^?]*)/(document.URL)||[null,defaultValue])[1]

*/