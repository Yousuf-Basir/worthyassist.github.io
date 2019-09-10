window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }



  }
  var checkbox = document.querySelector("ion-checkbox");
  var calButton =  document.getElementById("calculate");
  var countInput =  document.getElementById("pageCount");
  var costResult =  document.getElementById("costResult");
  var clearCache = document.getElementById("cacheCleaner");

  clearCache.addEventListener("click", function(){
    console.log("cleaning");
    caches.delete("yapp-pwa");
    console.log("cleaned");
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
  
