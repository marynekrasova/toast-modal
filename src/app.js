"use strict";
import Toast from "./toast.js";
import Modal from "./modal.js";

window.addEventListener("DOMContentLoaded", ()=>{
  const modalBtn = document.getElementById('modalF');
  const errorBtn = document.getElementById('error');
  const warningBtn = document.getElementById('warning');
  const successBtn = document.getElementById('success');
  const infoBtn = document.getElementById('info');
  const toast = document.querySelector('.toast');
  const modal = document.querySelector('.modal');

  errorBtn.addEventListener('click', () => {
    const toastMsg = new Toast(toast, 'error', 'Message');
    toastMsg.show();
  })
  warningBtn.addEventListener('click', () => {
    const toastMsg = new Toast(toast, 'warning', 'Message');
    toastMsg.show();
  })
  successBtn.addEventListener('click', () => {
    const toastMsg = new Toast(toast, 'success', 'Message');
    toastMsg.show();
  })
  infoBtn.addEventListener('click', () => {
    const toastMsg = new Toast(toast, 'info', 'Message');
    toastMsg.show();
  })

const onSubmit = (name,pass) => {console.log(name, pass)};

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

const modalWind = new Modal(modal, config, onSubmit);

modalBtn.addEventListener('click', () => {
  modalWind.render();
  modalWind.show();
})
});
