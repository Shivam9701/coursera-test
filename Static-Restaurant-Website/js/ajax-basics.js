(
    function (global) {




        //Set UTILITY NAMESPACE
        ajaxUtils={};

        //RETURNS an HTTP REQUEST OBJECT

        function getRequestObject(){

          //  window.XMLHttpRequest = target; just for practice i wrote this

          if (window.XMLHttpRequest){//WE ARE CHECKING IF THERE IS XML
                                     //HTTP REQUEST IN WINDOW OBJECT

            return new XMLHttpRequest();//IF YES RETURN SOME NEW XML HTTP REQUEST
          }

          else{
              global.alert("No XMLHttpRequest received");
              return null;
          }


        };


        //MAKES AJAX GET REQUEST TO SERVER
        ajaxUtils.sendGetRequest = function(requestURL, responseHandler
            ,isJSONResponse){
         
           
           
           
            request = getRequestObject();


            request.onreadystatechange = 
            function(){

                handleResponse(request, responseHandler);

            };

            request.open("GET",requestURL,true);
            request.send(null);


        };

        function handleResponse(request, responseHandler,isJSONResponse){




            if(isJSONResponse == undefined){
                isJSONResponse =true;
            }

            if(isJSONResponse){

                responseHandler(JSON.parse(request.responseText));

            }

            else{
            
                responseHandler(request.responseText);


            }

        };

        global.$ajaxUtils =ajaxUtils;
    
    
    } 
)(window);