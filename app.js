const form = document.querySelector('.form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const span = document.querySelectorAll('.error-icon');
const errorMsg = document.querySelectorAll('.error-msg');
const errorIcon = document.querySelectorAll('.error-icon');


form.addEventListener('submit', e => {
    e.preventDefault();

   validateInputs();
   
});



const validateInputs = () => {

    const emailRegex =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

    //access to the values:
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    
    //validation condition:
    if (firstNameValue === '' || firstNameValue === 'First Name') {
    
        firstName.style.borderColor = "hsl(0, 100%, 74%)";
        errorIcon[0].style.display = 'inline-block';
        errorMsg[0].style.display = 'flex';
    } else {

        firstName.style.borderColor = "hsl(154, 59%, 51%)";
        errorIcon[0].style.display = 'none';
        errorMsg[0].style.display = 'none';

    }

    if (lastNameValue === '' || lastNameValue === 'Last Name'){
        
        lastName.style.borderColor = "hsl(0, 100%, 74%)";
        errorIcon[1].style.display = 'flex';
        errorMsg[1].style.display = 'flex';
    } else {
        lastName.style.borderColor = "hsl(154, 59%, 51%)";
        errorIcon[1].style.display = 'none';
        errorMsg[1].style.display = 'none';
    }

    if (!emailRegex.test(emailValue)) {
       
        email.style.borderColor = "hsl(0, 100%, 74%)";
        errorIcon[2].style.display = 'flex';
        errorMsg[2].style.display = 'flex';

    } else {
        
        email.style.borderColor = "hsl(154, 59%, 51%)";
        errorIcon[2].style.display = 'none';
        errorMsg[2].style.display = 'none';
    }

    if (passwordValue === '') {
        
        password.style.borderColor = "hsl(0, 100%, 74%)";
        errorIcon[3].style.display = 'flex';
        errorMsg[3].style.display = 'flex';

    } else {
        
        password.style.borderColor = "hsl(154, 59%, 51%)";
        errorIcon[3].style.display = 'none';
        errorMsg[3].style.display = 'none';

    }
};

