document.addEventListener("DOMContentLoaded",
function(event) {
document.querySelector("button").addEventListener("click",


function() {
  
$ajaxUtils.sendGetRequest("data/name.txt",
function (request){
  console.log("p");
  namw = request.responseText;
  console.log(namw);
  document.querySelector("#content").textContent =namw;

});


}
)});