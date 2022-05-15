const interval = setInterval(myClock, 1000)
const hoursHand = document.querySelector('[Hand-Date-hours]')
const minutesHand = document.querySelector('[Hand-Date-minutes]')
const secondsHand = document.querySelector('[Hand-Date-seconds]')


const myClock =  () => {
    const currentDateRotation = new Date()
    const currentSeconds = currentDateRotation.getSeconds() /60
    const currentMinutes =(currentMinutes + currentDateRotation.getMinutes() /60)
    const currentHours = (currentHours + currentDateRotation.getHours() /60)
    setRotationClock(hoursHand, currentHours)
    setRotationClock(minutesHand, currentMinutes)
    setRotationClock(secondsHand, currentSeconds)
}

const setRotationClock = (elm, rotationRatioDate) => {
    elm.style.setProperty('--rotation', rotationRatioDate *365)
}

myClock = () => {
    clearInterval(interval)
}