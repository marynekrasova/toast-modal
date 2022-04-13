function Modal(elt, config, onSubmit) {
  Modal.superclass.constructor.call(this, elt);
  this.config = config;
  this.onSubmit = onSubmit;
}
extend(Modal, Base);

Modal.prototype.render = function (){
  const modalConf = this.elt.querySelector('#main');

  modalConf.innerHTML =
    `<h2>${this.config.header}</h2>
    <div class="text_modal"></div>
    <button class="cancel">Cancel</button>
    <button class="submit"></button>`;

  const content = this.elt.querySelector('.text_modal');
  const cancelBtn = this.elt.querySelector('.cancel');
  const submitBtn = this.elt.querySelector('.submit');

  content.innerText = this.config.text;

if (this.config.fields !== undefined) {
  for (const field of this.config.fields) {
    const elem = document.createElement('input');
    elem.classList.add("field");
    elem.setAttribute("placeholder", field.lable);
    elem.setAttribute("id", field.lable);
    elem.setAttribute("type", field.type);
    content.appendChild(elem);
  }
  submitBtn.innerHTML = 'Submit';
  submitBtn.addEventListener('click',  () => {
    const field1 = document.getElementById("Name").value;
    const field2 = document.getElementById("Password").value;
    this.onSubmit.call(this, field1, field2);
    this.hide();
  });
} else {
  submitBtn.innerHTML = 'Ok';
  submitBtn.addEventListener('click',  () => {
    this.hide();
  });
}


  cancelBtn.addEventListener('click',  () =>{
    this.hide();
  });

  modalConf.appendChild(content);
}



