window.onload = () => {
  var updater = document.getElementById("updater");
    'use strict';

    console.log("update6");
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js').then(function(registration){
                console.log('Registration succeeded.');
                updater.addEventListener('click', function(){
                  registration.update();
                });
               });
      console.log(navigator.oscpu);
      
    }



  }
  var checkbox = document.querySelector("ion-checkbox");
  var calButton =  document.getElementById("calculate");
  var countInput =  document.getElementById("pageCount");
  var costResult =  document.getElementById("costResult");
  var clearCache = document.getElementById("cacheCleaner");

  
  clearCache.addEventListener("click", function(){
    caches.delete("yapp-pwa").then(function(){
      alert("cached cleaned");
    }).catch(function(){
      console.log("error");
    })
    localStorage.clear();
    location.reload();
  });

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
  
