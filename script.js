$(document).ready(function () {

    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    let updateTime = function () {
        let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
        $("#currentDay").text(currentTime)
    }

    updateTime();

    // To continuously call the functions, we will use setInterval
    setInterval(updateTime, 1000);
});