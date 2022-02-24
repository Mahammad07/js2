 function search() {
     var sidebarr=document.getElementById('first')
     var i=document.getElementById('second')
     if(sidebarr.style.opacity ==='1'){
        sidebarr.style.opacity='0';
        }
     i.style.opacity='1'
     sidebarr.style.height='100px'
     sidebarr.style.opacity='1'
 }

 function Close(){
     var x=document.getElementById('second')
     var sidebarr=document.getElementById('first')
    
     sidebarr.style.opacity='0'
     x.style.height='0px'
     x.style.opacity='0'

 }