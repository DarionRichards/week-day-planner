$(document).ready(onLoad);

// function that runs when DOM is fully loaded
const onLoad = function() {
    renderCurrentDate();
    readFromLS();
    setTBColour();
};

const getCurrentDate = () => {

    // get the current date and time
    const timerTick = () => {
        let date = moment().format('MMMM Do YYYY, h:mm a');
        return date
    }

    // repeat timerTick function every second
    window.setInterval(timerTick, 1000);

    return timerTick();
};

// print date to HTML
const renderCurrentDate = () => {
    const headerDate = document.getElementById('currentDay');
    headerDate.innerText = getCurrentDate();
}

// get the values of each key, if present
const readFromLS = () => {

    const hour9 = localStorage.getItem('9');
    $("#9 .description").val(hour9);

    const hour10 = localStorage.getItem('10');
    $("#10 .description").val(hour10);

    const hour11 = localStorage.getItem('11');
    $("#11 .description").val(hour11);

    const hour12 = localStorage.getItem('12');
    $("#12 .description").val(hour12);

    const hour13 = localStorage.getItem('13');
    $("#13 .description").val(hour13);

    const hour14 = localStorage.getItem('14');
    $("#14 .description").val(hour14);

    const hour15 = localStorage.getItem('15');
    $("#15 .description").val(hour15);

    const hour16 = localStorage.getItem('16');
    $("#16 .description").val(hour16);

    const hour17 = localStorage.getItem('17');
    $("#17 .description").val(hour17);
};

$(".saveBtn").on("click", function() {

    let valueOfHour = $(this).siblings(".description").val();
    let hourClicked = $(this).parent().attr("id");

    localStorage.setItem(hourClicked, valueOfHour);
})


const setTBColour = () => {

    // variable to store current time of the hrs only
    const currentTime = moment().hours()

    // set colour for each time block
    $(".time-block").each(function() {

        // get each time block ID
        const hour = parseInt($(this).attr("id"))

        // print to each second child within a time block container
        const textArea = $(this).children()[1]

        // depending on current time, set the correct colour
        if (hour < currentTime) {

            textArea.classList.add('past');
        } else if (hour === currentTime) {
            textArea.classList.add('present');
        } else {
            textArea.classList.add('future');
        }
    });
};