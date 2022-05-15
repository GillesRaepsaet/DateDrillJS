setInterval(setClock, 1000);
const hours = document.querySelector('[Date-hours]')
const minutes = document.querySelector('[Date-minutes]')
const seconds = document.querySelector('[Date-seconds]')


const setClock =  () => {
    const currentDateRotation = new Date()
    const currentSeconds = currentDateRotation.getSeconds()/60
    const currentMinutes =(currentMinutes + currentDateRotation.getMinutes()/60)
    const currentHours = (currentHours + currentDateRotation.getHours()/60)
    setRotationClock(hours, currentHours)
    setRotationClock(minutes, currentMinutes)
    setRotationClock(seconds, currentSeconds)
}

const setRotationClock = (elm, rotationRatioDate) => {
    elm.style.setProperty('--rotation', rotationRatioDate*360)
}

setClock()