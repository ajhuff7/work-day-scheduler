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
    
    
    // var renderText = renderText (function(textarea) {
    
    // $(this).text("textarea")
    // localStorage.setItem('textarea', text);

    // $("#saveBtn").on("click", function( ) {
    // localStorage.setItem('textarea', text);
    // })

    // renderText();
// })


    var currentHour = moment().format('hh');
    var lateNight = moment().format('11:59:59 pm');
    var newDay = moment().format('hh:mm:ss a');
    var id = $("#textarea");
    var calendarHour = [07, 09, 10, 11, 12, 01, 02, 03, 04, 05]
    // console.log(currentHour)
    // console.log(lateNight)
    console.log(newDay)

    function currentTime() {
        for (var i = 0; i < calendarHour.length; i++) {
        if (currentHour === calendarHour) {
            $(this).removeClass("future").addClass("present");
        }

        if (lateNight === newDay) {
            $(id).addClass("future");
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