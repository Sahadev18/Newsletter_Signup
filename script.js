const main = document.querySelector('main');
const footer = document.querySelector('footer');
const submit = document.getElementById('submit');
const dismiss = document.getElementById('dismiss');
const emailInput = document.querySelector('input');


submit.addEventListener('click',function(){
    const email = emailInput.value;
    if(isValidEmail(email)){
        main.classList.add('hidden');
        footer.classList.remove('hidden');
        const displayEmail = document.querySelector('span');
        displayEmail.textContent = email;
    }
    else{
        document.getElementById('error').classList.remove('hidden');
        emailInput.style.borderColor = 'rgb(248 113 113)';
        emailInput.style.color = 'rgb(248 113 113)';
        emailInput.style.backgroundColor = 'rgb(254 226 226)';
    }
});

dismiss.addEventListener('click', function(){
    main.classList.remove('hidden');
    footer.classList.add('hidden');
    emailInput.value = "";
    document.getElementById('error').classList.add('hidden');
    emailInput.style.borderColor = 'rgb(203 213 225)';
    emailInput.style.color = 'rgb(203 213 225)';
    emailInput.style.backgroundColor = 'white';
});

emailInput.addEventListener('input', function () {
    const errorMessage = document.getElementById('error');
    const email1 = emailInput.value;
    if (isValidEmail(email1)) {
        errorMessage.classList.add('hidden');
    } else {
        errorMessage.classList.remove('hidden');
    }
});

emailInput.addEventListener('click',function(){
    emailInput.style.borderColor = 'rgb(203 213 225)';
    emailInput.style.color = 'rgb(17 24 39)';
    emailInput.style.backgroundColor = 'white';
});

function isValidEmail(email) {
    // Regular expression pattern for validating email addresses
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}




const responsiveImage = document.getElementById('illustration');

window.addEventListener('resize', function() {
    if (window.innerWidth < 587) {
        responsiveImage.src = './assets/images/illustration-sign-up-mobile.svg';
    } else {
        responsiveImage.src = './assets/images/illustration-sign-up-desktop.svg';
    } 
});