document.addEventListener("DOMContentLoaded",
function(event) {
    function speak() {
        console.log(event);
      this.textContent = "Said it";
      const name_ = document.getElementById("name").value;
      console.log(name_);
      message = "<h2>Hello " + name_ + "!</h2>";
      document.getElementById("content").innerHTML = message;
      if (name_ == "student") {
        document.querySelector("#title").textContent += " im loving it";
      }
    }


    document.querySelector("button").addEventListener("click", speak);
   // document.querySelector("button").onclick = speak;

    document.querySelector("body").addEventListener("mousemove",
    function(event) {
        if(event.shiftKey === true){
        console.log("X = " + event.clientX);
        console.log("Y = " + event.clientY);
        }
    });
});

