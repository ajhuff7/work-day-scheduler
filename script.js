$(document).ready(function () {

    // set date and time on scheduler
    $("#currentDay").text(moment().format('MMMM Do YYYY, hh:mm:ss a'));

    // make function to run hh:mm:ss on clock
    let updateTime = function () {
        let currentTime = moment().format('MMMM Do YYYY, hh:mm:ss a')
        $("#currentDay").text(currentTime)
    }
    // call the function to run...
    updateTime();

    // This will keep the clock running...
    setInterval(updateTime, 1000);
    

    
    // This saves input to local storage

    $(".saveBtn").on("click", function () {
        var textareaId = $(this).data("target");
        var textarea = $("#" + textareaId);

        localStorage.setItem(textareaId, textarea.val());
        
    })

    // This retrieves text input to calendar

    // function render(){
    //     var textareaId = $(this).data("target");
    //     var textarea = $("#" + textareaId);
        
    //     localStorage.getItem(textareaId);
    //     textarea.append(textarea.val());
    // }
    
    // render();


    // These variables hold my times values
    var currentHour = moment().format('hh');
    // var lateNight = moment().format('11:59:59 pm');
    // var newDay = moment().format('hh:mm:ss a');
    var calendarHour = ["09", "10", "11", "12", "01", "02", "03", "04", "05"]
    // console.log(currentHour)
    // console.log(lateNight)
    // console.log(newDay)

    
    // This function changes the highlighted entries based on TOD.

    function currentTime() {
    console.log(currentHour, calendarHour.indexOf(currentHour),calendarHour.indexOf("09"))

        if (currentHour === "09") {
            $("#09").removeClass("future").addClass("present");
        } 
        
        else if (calendarHour.indexOf("09") < calendarHour.indexOf(currentHour)) {
            $("#09").removeClass("present").addClass("past");
        }

        else {
            $("#09").addClass("future");

        }

        if (currentHour === "10") {
            $("#10").removeClass("future").addClass("present");
        } 
        
        else if (calendarHour.indexOf("10") < calendarHour.indexOf(currentHour)) {
            $("#10").removeClass("present").addClass("past");
        }

        else  {
            $("#10").addClass("future");

        }
        
        if (currentHour === "11") {
            $("#11").removeClass("future").addClass("present");
        } 
        
        else if (calendarHour.indexOf("11") < calendarHour.indexOf(currentHour)) {
            $("#11").removeClass("present").addClass("past");
        }

        else {
            $("#11").addClass("future");

        }

        if (currentHour === "12") {
            $("#12").removeClass("future").addClass("present");
        } 
        
        else if (calendarHour.indexOf("12") < calendarHour.indexOf(currentHour)) {
            $("#12").removeClass("present").addClass("past");
        }

        else {
            $("#12").addClass("future");

        }

        if (currentHour === "01") {
            $("#01").removeClass("future").addClass("present");
        } 
        
        else if (calendarHour.indexOf("01") < calendarHour.indexOf(currentHour)) {
            $("#01").removeClass("present").addClass("past");
        }

        else {
            $("#01").addClass("future");

        }

        if (currentHour === "02") {
            $("#02").removeClass("future").addClass("present");
        } 
        
        else if (calendarHour.indexOf("02") < calendarHour.indexOf(currentHour)) {
            $("#02").removeClass("present").addClass("past");
        }

        else {
            $("#02").addClass("future");

        }

        if (currentHour === "03") {
            $("#03").removeClass("future").addClass("present");
        } 
        
        else if (calendarHour.indexOf("03") < calendarHour.indexOf(currentHour)) {
            $("#03").removeClass("present").addClass("past");
        }

        else {
            $("#03").addClass("future");

        }

        if (currentHour === "04") {
            $("#04").removeClass("future").addClass("present");
        } 
        
        else if (calendarHour.indexOf("04") < calendarHour.indexOf(currentHour)) {
            $("#04").removeClass("present").addClass("past");
        }

        else {
            $("#04").addClass("future");

        }

        if (currentHour === "05") {
            $("#05").removeClass("future").addClass("present");
        } 
        
        else if (calendarHour.indexOf("05") < calendarHour.indexOf(currentHour)) {
            $("#05").removeClass("present").addClass("past");
        }

        else {
            $("#05").addClass("future");

        }

    
    };
    
    currentTime ();

  
    // getExpiredTime();
    // getExpireTime();
    // getFutureTime();

});