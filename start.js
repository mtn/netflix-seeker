// src: https://stackoverflow.com/questions/44760732/chrome-extension-run-extensions-script-after-all-other-page-scripts-have-loade

const DELAY = 10000; // Delay to give the player time to load, 10 secs

if(document.readyState !== 'complete') {
    window.addEventListener('load',afterWindowLoaded);
} else {
    afterWindowLoaded();
}


function afterWindowLoaded(){
  setTimeout(function() {
    let s = document.createElement("script");
    s.src = chrome.extension.getURL("content.js");
    s.onload = function() {
      this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
  }, DELAY);
}
