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
            $('.outputDiv').empty();
            $('.outputDiv').append('<h4><strong>' + students[i].first_name + ' ' + students[i].last_name + '</strong>' +
                '<br>' + '<em>' + students[i].info +  '</em>' + '</h4>' + '<br><p>' + (i + 1) + '/17</p>');
        }
    });
    var displayStudent = function(index) {
        i = index;
        $('.outputDiv').append('<h4><strong>' + students[i].first_name + ' ' + students[i].last_name + '</strong>' +
            '<br>' + '<em>' + students[i].info + '</em>' + '</h4>' + '<br><p>' + (i + 1) + '/17</p>');
    };
    //next student
    $('#nextStudent').on('click', function(students) {
        $('.outputDiv').empty();
        if (i >= 16) {
            i = 0;
            displayStudent(i);
        } else {
            i++;
            displayStudent(i);
        }
        console.log('Clicked Next, index:', i);
    });

    //previous student
    $('#prevStudent').on('click', function() {
        //empty div
        $('.outputDiv').empty();
        //append previous student's info
        if (i <= 0) {
            i = 16;
            displayStudent(i);
        } else {
            i--;
            displayStudent(i);
        }
        console.log('Clicked Prev, index:', i);
    });
});
