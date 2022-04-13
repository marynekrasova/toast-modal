function Base(elt) {
this.elt = elt;
const closeElt = this.elt.querySelector('.close');
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
export default Base;
