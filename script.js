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
    var textarea = $("#textarea")
    var input = textarea.value;

    $("#saveBtn").on("click", function () {

        localStorage.setItem("textarea", input);
        localStorage.getItem("textarea", input);
        input.append(textarea)
    })

    // This retrieves text input to calendar



    // These variables hold my times values
    var currentHour = moment().format('hh');
    var lateNight = moment().format('11:59:59 pm');
    var newDay = moment().format('hh:mm:ss a');
    var calendarHour = [09, 10, 11, 12, 01, 02, 03, 04, 05]
    // console.log(currentHour)
    // console.log(lateNight)
    // console.log(newDay)

    
    // This function changes the highlighted entries based on TOD.

    function currentTime() {

        for (var i = 0; i < calendarHour.length; i++) {
        if (currentHour === calendarHour) {
            $("#09").removeClass("future").addClass("present");
        }

        if (currentHour === calendarHour) {
            $("#10").removeClass("future").addClass("present");
        }

        if (currentHour === calendarHour) {
            $("#11").removeClass("future").addClass("present");
        }

        if (currentHour === calendarHour) {
            $("#12").removeClass("future").addClass("present");
        }

        if (currentHour === calendarHour) {
            $("#01").removeClass("future").addClass("present");
        }

        if (currentHour === calendarHour) {
            $("#02").removeClass("future").addClass("present");
        }

        if (currentHour === calendarHour) {
            $("#03").removeClass("future").addClass("present");
        }

        if (currentHour === calendarHour) {
            $("#04").removeClass("future").addClass("present");
        }

        if (currentHour === calendarHour) {
            $("#05").removeClass("future").addClass("present");
        }

        if (lateNight === newDay) {
            $(".future").addClass("future");
        }
    }
    };
    
    currentTime ();





    //     }
    // })
    
    // var hour = $(this).data("time")
    // time = [9, 10, 11, 12, 1, 2, 3, 4, 5]

    // function getExpiredTime(time) {
    //     for (i = 0; i < time.length; i++) {
    //         if (time[i] === hour) {
    //             $(this).attr("style", "background: red")
    //         }
    //     }
    // }
    
  
    // getExpiredTime();
    // getExpireTime();
    // getFutureTime();

});