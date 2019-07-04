function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = () => {
    if (running) throw new Error('Stopwatch has already started.');

    running = true;

    startTime = new Date();

    console.log('sw start');
  };

  this.stop = () => {
    if (!running) throw new Error('Stopwatch is not started.');

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;

    console.log('sw stop');
  };

  this.reset = () => {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;

    console.log('sw reset');
  };

  this.duration = () => {
    console.log(duration);
    return duration;
  };
}
const sw = new StopWatch();

const controls = document.querySelector('.controls');
const stateMsg = document.querySelector('#state-msg');
controls.addEventListener('click', el => targetId(el.target.id));

const targetId = id => {
  switch (id) {
    case 'start':
      sw.start();
      stateMsg.textContent = 'Stopwatch has been started';
      break;

    case 'stop':
      sw.stop();
      stateMsg.textContent = `Paused ${sw.duration()} sec`;
      break;

    case 'result':
      sw.duration();
      stateMsg.textContent = `Counted ${sw.duration()} sec`;
      break;

    case 'reset':
      sw.reset();
      stateMsg.textContent = 'Stopwatch was reset';
      break;

    default:
      break;
  }
};
