'use strict'

const btnSend = document.querySelector('.sendBtn');
btnSend.addEventListener('click', () => {
    resetValue();
    Swal.fire({
        title: 'Your message has been sent!',
        icon: 'info',
        confirmButtonText: 'OK'
      });

      const se1 = document.querySelector('#home');
      const se2 = document.querySelector('#aboutMe');


      console.log(`1height: ${se1.offsetHeight} ; 2height: ${se2.offsetHeight}`)
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


