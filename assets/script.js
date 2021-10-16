//grab current time from Moment and format for the top of webpage display
var time = moment().format('dddd, MMMM Do YYYY');
$('#currentDay').text(time);

//grabbing current time from moment formatted for 2 digit hour 
var currentTime = moment().format('HH');

//function to update background color using conditional comparing currentTime from moment
const updateBackgroundColor = function(currentTime) {
    if(currentTime < '09') {
        $('.col-10').addClass('future')
    } else if (currentTime === '09') {
        $('.timeNine').addClass('present')
        $('.timeTen,.timeEleven,.timeTwelve,.timeOne,.timeTwo,.timeThree,.timeFour,.timeFive').addClass('future')
    } else if(currentTime === '10') {
        $('.timeNine').addClass('past')
        $('.timeTen').addClass('present')
        $('.timeEleven,.timeTwelve,.timeOne,.timeTwo,.timeThree,.timeFour,.timeFive').addClass('future')
    } else if(currentTime === '11') {
        $('.timeNine,.timeTen').addClass('past')
        $('.timeEleven').addClass('present')
        $('.timeTwelve,.timeOne,.timeTwo,.timeThree,.timeFour,.timeFive').addClass('future')
    } else if(currentTime === '12') {
        $('.timeNine,.timeTen,.timeEleven').addClass('past')
        $('.timeTwelve').addClass('present')
        $('.timeOne,.timeTwo,.timeThree,.timeFour,.timeFive').addClass('future')
    } else if(currentTime === '13') {
        $('.timeNine,.timeTen,.timeEleven,.timeTwelve').addClass('past')
        $('.timeOne').addClass('present')
        $('.timeTwo,.timeThree,.timeFour,.timeFive').addClass('future')
    } else if(currentTime === '14') {
        $('.timeNine,.timeTen,.timeEleven,.timeTwelve,.timeOne').addClass('past')
        $('.timeTwo').addClass('present')
        $('.timeThree,.timeFour,.timeFive').addClass('future')
    } else if(currentTime === '15') {
        $('.timeNine,.timeTen,.timeEleven,.timeTwelve,.timeOne,.timeTwo').addClass('past')
        $('.timeThree').addClass('present')
        $('.timeFour,.timeFive').addClass('future')
    } else if(currentTime === '16') {
        $('.timeNine,.timeTen,.timeEleven,.timeTwelve,.timeOne,.timeTwo,.timeThree').addClass('past')
        $('.timeFour').addClass('present')
        $('.timeFive').addClass('future')
    } else if(currentTime === '17') {
        $('.timeNine,.timeTen,.timeEleven,.timeTwelve,.timeOne,.timeTwo,.timeThree,.timeFour').addClass('past')
        $('.timeFive').addClass('present')
    } else {
        $('.col-10').addClass('past')
    }
}

updateBackgroundColor(currentTime);

//on click listener to save text area value to local storage when save button is clicked
$('.saveBtn').on('click', function() {
    alert("I saved your data!")
    localStorage.setItem($(this).attr('name'),$('#' + $(this).attr('name')).val());

})

//on page load checks local storage for population of data to text areas on page
jQuery(document).ready(function() {
    $('.col-10').each(function() {
    $(this).val(localStorage.getItem($(this).attr('name')))
    // console.log($(this).val())
   })
})