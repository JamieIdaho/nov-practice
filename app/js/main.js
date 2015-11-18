;(function (){

  'use strict';

var textInput = document.getElementById('my_text');

document.querySelector('form.my_form').addEventListener('submit', function (e) {

    e.preventDefault();
    console.log(textInput.value);
    this.reset();
});


}());

