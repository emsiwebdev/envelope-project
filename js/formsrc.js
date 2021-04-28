//envelope form, validate
const fnameInput = document.querySelector("#fname");
const messageArea = document.querySelector("#mess");
const emailInput = document.querySelector("#email");
const form = document.querySelector("form");

fnameInput.addEventListener('input', () => {
  fnameInput.setCustomValidity("");
  fnameInput.checkValidity();
});

messageArea.addEventListener('input', () => {
  messageArea.setCustomValidity("");
  messageArea.checkValidity();
});

emailInput.addEventListener('input', () => {
  emailInput.setCustomValidity("");
  emailInput.checkValidity();
});

fnameInput.addEventListener('invalid', () => {
  if (fnameInput.value === "") {
    fnameInput.setCustomValidity('Enter your first name :)');
  } else {
    fnameInput.setCustomValidity('The first name must contain the first capital letter. No numbers or other characters.');
  }
});

messageArea.addEventListener('invalid', () => {
  if (messageArea.value === "") {
    messageArea.setCustomValidity('Enter any message.');
  } else {
    messageArea.setCustomValidity('Text can only be 500 characters long.');
  }
});

emailInput.addEventListener('invalid', () => {
  if (emailInput.value === "") {
    emailInput.setCustomValidity('E-mail address is necessary for return contact.');
  } else {
   emailInput.setCustomValidity('E-mail address must contain lowercase letters, @ sign, full domain name etc.');
  }
});

//counter characters in textarea via JQuery
$('textarea').keyup(function() { //start
    
  let characterCount = $(this).val().length,
      current = $('#current'),
      maximum = $('#maximum'),
      theCount = $('#counter');
    
  current.text(characterCount);

  if (characterCount >= 1 && characterCount < 200) {
    current.css('color', 'rgb(0, 255, 0)');
    current.css('font-weight','bold');
  }
  if (characterCount > 200 && characterCount < 400) {
    current.css('color', 'rgb(255, 191, 0)');
    current.css('font-weight','bold');
  }
  
  if (characterCount > 400 && characterCount <=500) {
    current.css('color', 'rgb(255, 0, 0)');
    current.css('font-weight','bold');
  } 
  
}); //end

$(function(){ //delay form script
  $('form').submit(function (event) {
    var form = this;
    event.preventDefault();
    setTimeout(function () {
        form.submit();
    }, 3000); 
      $('#myModal').modal();
  });
});

