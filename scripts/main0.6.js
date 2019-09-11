window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw0.2.js');
    }
    
    var dynamicFunction = function(){
      var page = document.getElementById("dynamicContent");
      var currentVersion = window.localStorage.getItem("versionCount");
      page.innerHTML = "Hello I am dynamic v" + currentVersion;
    }
    window.localStorage.setItem("compFunction", dynamicFunction.toString());
    
    if(window.localStorage.getItem("versionCount") === null){
      document.getElementById("vp").innerHTML = "V0";
    }else{
      document.getElementById("vp").innerHTML = "V" + window.localStorage.getItem("versionCount");
    }

    var vadd = document.getElementById("vAdd");
    vadd.addEventListener("click", function(){
      if(window.localStorage.getItem("versionCount") === null){
        window.localStorage.setItem("versionCount", 1);
      }else{
        var currentVersion = window.localStorage.getItem("versionCount");
        currentVersion++;
        window.localStorage.setItem("versionCount", currentVersion);
        document.getElementById("vp").innerHTML = "V" + window.localStorage.getItem("versionCount");
      }
    })
    
  }
  var checkbox = document.querySelector("ion-checkbox");
  var calButton =  document.getElementById("calculate");
  var countInput =  document.getElementById("pageCount");
  var costResult =  document.getElementById("costResult");

  checkbox.addEventListener( 'click', function() {
      if(!this.checked) {
          // Checkbox is checked..
          console.log("checked");
      } else {
          // Checkbox is not checked..
          console.log("removed");
      }
  });
  calButton.addEventListener('click', function(){
    if(!checkbox.checked){
      var cost = (countInput.value/2)*1.5 + 70 + " TK";
      costResult.innerHTML = cost;
    }
    else{
      var cost = (countInput.value/2)*1.5 + 120 + " TK";
      costResult.innerHTML = cost;
    }
    
  });


  
