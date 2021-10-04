// event handling
document.addEventListener(
  "DOMContentLoaded",

  function (event) {
    document.querySelector("button").addEventListener(
      "click",

      function () {
        //call server to get name
        $ajaxUtils.sendGetRequest("data/name.json", function (res) {
          message = res.firstName + " " + res.lastName;
          if(res.likesMomos){
              message +=" likesMomos";
          }

          document.querySelector("#content").innerHTML =
            "<h2>" + message + "</h2>";
        });
      }
    );
  }
);
