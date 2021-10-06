document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("button").addEventListener(
    "click",

    function () {
      $ajaxUtils.sendGetRequest("data/name.json", function (res) {
        
        namw = res.firstName + " " + res.lastName;
        console.log(namw);
        document.querySelector("#content").textContent = namw;
      },true);
    }
  );
});
