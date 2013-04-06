function cs(param){console.log((param == undefined)?"Here":param);}
function wait(time, statement){setTimeout(function(){statement()},time);}

var greg = greg || {};

var router = new greg.router();