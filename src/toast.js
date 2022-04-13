import extend from "./util.js";
import Base from "./base.js";

function Toast(elt,type,message) {
  Toast.superclass.constructor.call(this, elt);
  this.type = type;
  this.message = message;
  this.render();
}
extend(Toast, Base);

Toast.prototype.show = function (){
  clearTimeout(window.timeOut);
  Toast.superclass.show.call(this);
  window.timeOut = setTimeout(() => {
    this.hide();
  }, 5000);
}

Toast.prototype.render = function () {
  this.elt.querySelector(".toast_content").innerHTML =
    `<i></i>
    <div class="toast_msg">
    <h2>${this.type}</h2>
    <p>${this.message}</p>
    </div>`;
  const icon = this.elt.querySelector('i');

  switch (this.type) {
    case "error":
      icon.classList = "icon fas fa-exclamation-triangle";
      this.elt.style.backgroundColor = "red";
      break;
    case "warning":
      this.elt.style.backgroundColor = "gold";
      icon.classList = "icon fa-solid fa-exclamation";
      break;
    case "success":
      this.elt.style.backgroundColor = "green";
      icon.classList = "icon fa-solid fa-check";
      break;
    case "info":
      this.elt.style.backgroundColor = "aquamarine";
      icon.classList = "icon fa-solid fa-info";
      break;
  }
};
export default Toast;
