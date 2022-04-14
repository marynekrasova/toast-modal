import Base from "./base.js";

class Modal extends Base{
  constructor(elt, config, onSubmit){
    super(elt);
    this.config = config;
    this.onSubmit = onSubmit;
    this._render();
  }

  _render(){
    const modalConf = this.elt.querySelector('.main');

    modalConf.innerHTML =
      `<h2>${this.config.header || "Header"}</h2>
    <div class="text_modal"></div>
    <button class="cancel">Cancel</button>
    <button class="submit"></button>`;

    const content = this.elt.querySelector('.text_modal');
    const cancelBtn = this.elt.querySelector('.cancel');
    const submitBtn = this.elt.querySelector('.submit');

    content.innerText = this.config.text;

    if (this.config.fields) {
      for (const field of this.config.fields) {
        const elem = document.createElement('input');
        elem.classList.add("field");
        elem.setAttribute("placeholder", field.lable);
        elem.setAttribute("name", field.lable);
        elem.setAttribute("type", field.type);
        content.appendChild(elem);
      }
      submitBtn.innerHTML = 'Submit';
      submitBtn.addEventListener('click',  () => {
        const data = [];
        const fieldElts = this.elt.querySelectorAll(".field");
        fieldElts.forEach((elt) => data.push({[elt.name]:elt.value}));
        this.onSubmit.call(this, data);
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

}

export default Modal;

