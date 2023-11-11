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


