console.log('script.js sourced');

//json source
var jsonUrl = 'http://devjana.net/pi/pi_students.json';

$(document).ready(function() {
  console.log('document ready');
  //ajax call
  $.ajax({
    url: jsonUrl,
    dataType: 'JSON',
    success: function(data){
      console.log('success!', data.students);
      displayStudents(data.students);
    }
  });

  //display students
  var displayStudents = function(students){
    console.log('in displayStudents', students);
    $('.outputDiv').empty();
    for (var i = 0; i < students.length; i++) {
    $('.outputDiv').append('<p><strong>' + students[i].first_name + ' ' + students[i].last_name + '</strong>' +
      '<br>' + '<em>' + students[i].info + '</em></p>');
    }
    
  };

});
