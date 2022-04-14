"use strict";
window.addEventListener("DOMContentLoaded", ()=>{
  const modalBtn = document.getElementById('modalF');
  const errorBtn = document.getElementById('error');
  const warningBtn = document.getElementById('warning');
  const successBtn = document.getElementById('success');
  const infoBtn = document.getElementById('info');
  const toast = document.querySelector('.toast');
  const modal = document.querySelector('.modal');

  errorBtn.addEventListener('click', () => {
    const toastMsg = new myContainer.Toast(toast, 'error', 'Message');
    toastMsg.show();
  })
  warningBtn.addEventListener('click', () => {
    const toastMsg = new myContainer.Toast(toast, 'warning', 'Message');
    toastMsg.show();
  })
  successBtn.addEventListener('click', () => {
    const toastMsg = new myContainer.Toast(toast, 'success', 'Message');
    toastMsg.show();
  })
  infoBtn.addEventListener('click', () => {
    const toastMsg = new myContainer.Toast(toast, 'info', 'Message');
    toastMsg.show();
  })

const onSubmit = (data) => {console.log(data)};

const config = {
  "header": "HEADER",
  "text": "Enter login and password.",
  "fields": [
    {
      "type": "string",
      "required": "true",
      "lable": "Name"
    }, {
      "type": "password",
      "required": "true",
      "lable": "Password"
    }
  ]
}

const modalWind = new myContainer.Modal(modal, config, onSubmit);

modalBtn.addEventListener('click', () => {
  modalWind.show();
})
});
