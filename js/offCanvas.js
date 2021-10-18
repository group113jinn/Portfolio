function openCanvas(){
   document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
   document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
    if(document.querySelector('.offcanvas-btn-open')) {
        document.querySelector('i').style.visibility = "hidden"
    }else{
        document.querySelector('i').style.visibility = "initial"
    }

}
