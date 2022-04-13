const myContainer = {};
myContainer.extend = (function (){
function extend (Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  Child.superclass = Parent.prototype;
}

  return extend;
})();
