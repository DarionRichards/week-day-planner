const onLoad = function() {
    constructHeaderDate();
    // constructTimeBlock();
    // set time-block colours
    // set local storage
    // read from local storage (if previous data saved)
    // fill time-block with each key: value
};

const getCurrentDate = () => {

    const timerTick = () => {
        let date = moment().format('MMMM Do YYYY, h:mm:ss a');
        return date
    }
    window.setInterval(timerTick, 1000);

    return timerTick();
};

const constructHeaderDate = () => {
    const headerDate = document.getElementById('currentDay');
    headerDate.innerText = getCurrentDate();
}

const constructTimeBlock = () => {

    // set time block colour (past, present, future)
};

const setClassName = () => {
    // get current time 
};

window.onload = function() {
    onLoad();
};