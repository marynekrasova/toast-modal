import Base from "./base.js";

class Toast extends Base {
  constructor(elt, type, message) {
    super(elt);
    this.type = type;
    this.message = message;
    this.#render();
  }

  show() {
    clearTimeout(window.timeOut);
    super.show();
    window.timeOut = setTimeout(() => {
      this.hide();
    }, 5000);
  }

  #render() {
    this.elt.querySelector(".toast_main").innerHTML =
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

  }
}
export default Toast;
