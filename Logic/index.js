var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
    let currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos){
        document.getElementById("nav").style.top = "0";
    }else{
        document.getElementById("nav").style.top = "-550px";
    }
    prevScrollpos = currentScrollPos;
}