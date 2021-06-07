export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);

    this.days = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hours = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.minutes = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.seconds = document.querySelector(`${selector} .value[data-value="secs"]`);

   this.init();
  }

  init() {
    setInterval(() => this._countDown(), 1000)
  }

  _updateTime(totalSeconds) {
    this.days.textContent = Math.floor(totalSeconds / 3600 / 24);
    this.hours.textContent = this._formatTime(Math.floor((totalSeconds / 3600) % 24));
    this.minutes.textContent = this._formatTime(Math.floor((totalSeconds / 60) % 60));
    this.seconds.textContent = this._formatTime(Math.floor(totalSeconds % 60));
  }

  _countDown() {
    const currentDate = new Date();
    const totalSeconds = (this.targetDate - currentDate) / 1000;
    this._updateTime(totalSeconds)
  }
  _formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}



