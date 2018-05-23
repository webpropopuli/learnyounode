var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
data1="";
data2="";
data3="";
callbackcounter=0;

var PrintAll = function (){
  console.log(data1);
  console.log(data2);
  console.log(data3);
};


http.get(url1, function(response){
  response.setEncoding("utf8");
  response.on("data", function(data) {
    data1+=data;
});
  response.on("end", function(){
    callbackcounter+=1;
    if (callbackcounter==3){
      PrintAll();
}});
});

http.get(url2, function(response){
  response.setEncoding("utf8");
  response.on("data", function(data) {
    data2+=data;
});
  response.on("end", function(){
    callbackcounter+=1;
    if (callbackcounter==3){
      PrintAll();
}});
});

http.get(url3, function(response){
  response.setEncoding("utf8");
  response.on("data", function(data) {
    data3+=data;
});
  response.on("end", function(){
    callbackcounter+=1;
    if (callbackcounter==3){
      PrintAll();
};
});
});
