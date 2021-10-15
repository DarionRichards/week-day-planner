window.onload = function() {
    onLoad();
};

const onLoad = function() {
    renderCurrentDate();
    // read from local storage
    // constructTimeBlock();
    // set time-block colours
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

const renderCurrentDate = () => {
    const headerDate = document.getElementById('currentDay');
    headerDate.innerText = getCurrentDate();
}

$(".saveBtn").on("click", function() {

    let valueOfHour = $(this).siblings(".description").val();
    let hourClicked = $(this).parent().attr("id");

    console.log('Key:', hourClicked);
    console.log('Value:', valueOfHour);

    localStorage.setItem(hourClicked, valueOfHour);


})

// const setClassName = () => {
//     // get current time
//     // set class depending on current time
//     // past, present, future 
// };