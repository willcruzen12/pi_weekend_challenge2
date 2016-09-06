console.log('script.js sourced');

//json source
var jsonUrl = 'http://devjana.net/pi/pi_students.json';
//global variables
var students = [];
var i = 0;
$(document).ready(function() {
    console.log('document ready');
    //ajax call
    $.ajax({
        url: jsonUrl,
        dataType: 'JSON',
        success: function(data) {
            console.log('success!', data.students);
            students = data.students;
            displayIndex(students);
            $('.outputDiv').empty();
            $('.outputDiv').append('<h4><strong>' + students[i].first_name + ' ' + students[i].last_name + '</strong>' +
                '<br>' + '<em>' + students[i].info +  '</em>' + '</h4>' + '<br><p>' + (i + 1) + '/' + students.length + '</p>');
        }//end success
    });//end ajax
    var displayStudent = function(index) {
        i = index;
        $('.outputDiv').empty();
        //fade in
        $('.outputDiv').fadeIn();
        //append student info
        $('.outputDiv').append('<h4><strong>' + students[i].first_name + ' ' + students[i].last_name + '</strong>' +
            '<br>' + '<em>' + students[i].info + '</em>' + '</h4>' + '<br><p>' + (i + 1) + '/' + students.length + '</p>');
    };//end displayStudent

    //next student
    $('#nextStudent').on('click', function(students) {
      $('.outputDiv').fadeOut("fast", function(){
        //empty div
        $('.outputDiv').empty();
        if (i >= 17) {
            i = 0;
            displayStudent(i);

        } else {
            i++;
            displayStudent(i);
        }});//end fadeOut
        console.log('Clicked Next, index:', i);
    });//end next student

    //previous student
    $('#prevStudent').on('click', function(students) {
      $('.outputDiv').fadeOut("fast", function(){
        //empty div
        $('.outputDiv').empty();
        //append previous student's info
        if (i <= 0) {
            i = 17;
            displayStudent(i);
        } else {
            i--;
            displayStudent(i);
        }});//end fadeOut
        console.log('Clicked Prev, index:', i);
    });//end previous student

    var displayIndex = function() {

      for (var i = 0; i < students.length; i++) {
        $('.studentIndex').append('[<a class="student" data-id=' + i + '>' + students[i].first_name + '</a>] ');
      }//end for loop
      console.log('in displayIndex');
    };//end displayIndex

    //when index is clicked...
    $('body').on('click', '.student', function(){
      i = $(this).attr('data-id');
        console.log('clicked', i)
      $('.outputDiv').fadeOut("fast", function(){
        displayStudent(i);
      });
    })



});//end document ready
