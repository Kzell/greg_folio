function cs(param){console.log((param == undefined)?"Here":param);}
function wait(time, statement){setTimeout(function(){statement()},time);}

var greg = greg || {};

var myModel = new greg.projectModel();

var test = new greg.mainView();