myContainer.Base = (function (){
  function Base(elt) {
    this.elt = elt;
    const closeElt = document.createElement('div');
    closeElt.classList.add('close');
    closeElt.innerText = 'X';
    if (this.elt.classList.contains('toast')){
      this.elt.appendChild(closeElt);
    } else {
      const modalElt = this.elt.querySelector('.modal_content');
      modalElt.appendChild(closeElt);
    }
    closeElt.addEventListener('click', () => {
      this.hide();
    })
  }

  Base.prototype = {
    constructor: Base,
    show: function (){
      this.elt.classList.add("open");
    },
    hide: function (){
      this.elt.classList.remove("open");
    }
  }

  return Base;
})();


