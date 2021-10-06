//  document.querySelector("button").addEventListener
//  ("click", function speak(){
//      const name_ = document.querySelector("input").value;
//      console.log(name_);

//     console.log("ok");
//     document.querySelector("#content").textContent = "Say hi to " +name_;

//  });

(function (global) {
  ajaxUtils = {};
  function getNewRequest() {
    if (global.XMLHttpRequest) {
      return new XMLHttpRequest();
    } else {
      console.log("not value");
      return null;
    }
  }

  ajaxUtils.sendGetRequest = function (url, responseHandler,isJsonResponse) {
    request = getNewRequest();
    request.onreadystatechange = function () {
      handleResponse(request, responseHandler,isJsonResponse);
    };
    request.open("GET", url, true);
    request.send(null);
  };

  function handleResponse(request, responseHandler,isJsonResponse) {
    if (request.readyState == 4 && request.status == 200) {


        if(isJsonResponse) {
            responseHandler(JSON.parse(request.responseText));
        }
        else{
      responseHandler(request);
    }
}
  }

  window.$ajaxUtils = ajaxUtils;
})(window);
