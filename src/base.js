 class Base {
   constructor(elt){
     this.elt = elt;
     const closeButton = createCloseButton();
     this.elt.firstElementChild.appendChild(closeButton);
     closeButton.addEventListener('click', () => {
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

  function createCloseButton (){
    const closeElt = document.createElement('div');
    closeElt.classList.add('close');
    closeElt.innerText = 'X';
    return closeElt;
  }
 export default Base;
