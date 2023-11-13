'use strict'

const btnSend = document.querySelector('.sendBtn');
btnSend.addEventListener('click', () => {
    resetValue();
    Swal.fire({
        title: 'Your message has been sent!',
        icon: 'info',
        confirmButtonText: 'OK'
      });

});

resetValue();

function resetValue(){
    const nameText = document.querySelector('.nameText');
    const emailText = document.querySelector('.eMailText');
    const multilineInput = document.querySelector('.multilineInput');
    nameText.value = '';
    emailText.value = '';
    multilineInput.value = '';
}

//For mobile phone action
const menu1 = document.querySelector('.menu');
menu.addEventListener('click', () => {
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.style.display = 'block';
    menu1.style.display = 'flex';
});
