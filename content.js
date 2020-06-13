// Seeking src: https://gist.github.com/dimapaloskin/e268e5356df160599244418d256e3f4e

const videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
const playerID = videoPlayer.getAllPlayerSessionIds()[0];
const player = videoPlayer.getVideoPlayerBySessionId(playerID);

console.log("netflix obj", netflix);
let timeRemaining = document.getElementsByClassName("time-remaining__time")[0];

timeRemaining.onclick = function() {
  player.pause();

  let currentTime = Math.round(player.getCurrentTime() / 1000);
  let currentMin = Math.floor(currentTime / 60).toString();
  let currentSecond = (currentTime % 60).toString();
  let defaultTime = `${currentMin.padStart(2, "0")}:${currentSecond.padStart(2, "0")}`;
  let seekTime = window.prompt("Seek to time (format: MM:SS):", defaultTime);

  if (seekTime !== null) {
    let seekList = seekTime.split(":");
    if (seekList.length !== 2) {
      return;
    }

    let seekMinute = parseInt(seekList[0]);
    let seekSecond = parseInt(seekList[1]);

    seekTime = (seekMinute * 60 + seekSecond) * 1000;
    player.seek(seekTime);
  }
};
