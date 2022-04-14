 class Base {
   constructor(elt){
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
   show() {
     this.elt.classList.add("open");
   }
   hide(){
     this.elt.classList.remove("open");
   }
  }
 export default Base;
