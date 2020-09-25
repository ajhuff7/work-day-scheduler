$(document).ready(function () {

    // set date and time on scheduler
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    // make function to run hh:mm:ss on clock
    let updateTime = function () {
        let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
        $("#currentDay").text(currentTime)
    }
    // call the function to run...
    updateTime();

    // This will keep the clock running...
    setInterval(updateTime, 1000);



    
});