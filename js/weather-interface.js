$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=7fffeb9ca8cfefdfb16544bb046e5047`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(data) {
        $('.show-humidity').text(`The humidity in ${city} is ${data.main.humidity}%`);
        $('.show-temp').text(`The temperature in F is ${data.main.temp}.`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
