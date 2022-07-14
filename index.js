// class definition for the timer should be extracted to another file, so that index.js could be easier read
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Time started");
  },
  onTick() {
    console.log("Timer just ticked down");
  },
  onComplete() {
    console.log("Timer is completed");
  },
});
