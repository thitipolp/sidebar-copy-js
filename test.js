var x = document.querySelectorAll(".td-ss-main-sidebar .entry-title a");
var myarray = []
for (var i=0; i<x.length; i++){
var nametext = x[i].textContent;
var cleantext = nametext.replace("...", '').trim();
var cleanlink = x[i].href;
myarray.push([cleantext,cleanlink]);
};
function make_table() {
    var table = '<ul>';
   for (var i=0; i<myarray.length; i++) {
            table += '<li><a href="'+myarray.cleantext+'">' + myarray[i][0] +'</li>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()
