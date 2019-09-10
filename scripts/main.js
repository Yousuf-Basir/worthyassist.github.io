window.onload = () => {
  let newWorker;
  let refreshing;

    'use strict';
    // navigator.serviceWorker.ready.then(() => {
    

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').then(reg => {
        reg.addEventListener('updatefound', ()=>{
        newWorker = reg.installing;
        document.getElementById("refresh").addEventListener('click', function(){
          newWorker.postMessage({action: 'skipWaiting'});
        });
        newWorker.addEventListener('stateChange', ()=>{
          switch(newWorker.state){
            case 'installed':
              //New service worker available, show update nitification
              if(navigator.serviceWorker.controller){
                console.log("new available");
                let notification = document.getElementById(refresh);
                //notification.style.display = "block";
              }
              break;
          }
        })
        })
      });

      navigator.serviceWorker.addEventListener('controllerchange',function(){
        console.log("refressing");
        if(refreshing) return;
        window.location.reload();
        refreshing = true;
      });
    }

    

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
  
