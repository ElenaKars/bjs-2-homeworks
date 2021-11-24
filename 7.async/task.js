class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.timerId = null;
    }
  
    addClock(time, callback, id) {
      if(id === undefined) {
        throw new Error('error text');
      }
  
      if(this.alarmCollection.some((el) => el.id === id)) {
        console.error('Уже есть такой будильник');
        return;
      }
  
      this.alarmCollection.push({
        id, 
        time, 
        callback
      })
    }
  
    removeClock(id) {
      const newAlarmCollection = this.alarmCollection
        .filter((el) => el.id !== id);
  
      const isDel = !(newAlarmCollection.length === this.alarmCollection.length);
  
      this.alarmCollection = newAlarmCollection;
      
      return isDel;
    }
  
    getCurrentFormattedTime() {
      const now = new Date();
      
      let hours = now.getHours();
      if(hours < 10) {
        hours = '0' + hours
      }
      
      let minutes = now.getMinutes();
      if(minutes < 10) {
        minutes = '0' + minutes
      }
  
      return `${hours}:${minutes}`
    }
  
    start() {
      const checkClock = (alarm) => {
        if(this.getCurrentFormattedTime() === alarm.time) {
          alarm.callback()
        }
      }
  
      if(!this.timerId) {
        this.timerId = setInterval(()=>{
          this.alarmCollection.forEach(checkClock)
        })
      }
    }
    stop () {
     if(this.timerId !== null) {
          clearInterval(this.timerId);
          this.timerId = null;
    }
  }
  printAlarms(){
      this.alarmCollection.forEach((alarm) => {
          console.log(alarm.id, alarm.time)
      });
  }
  clearAlarms(){
      this.stop();
      this.alarmCollection = []
  }
}  
