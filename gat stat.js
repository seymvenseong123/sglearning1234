var loadmore = document.getElementById("showForm-ps");
var formpw = document.getElementById("popup");
var closepw = document.getElementById("ClosspopUp");
var classPopup = document.getElementById("class-popup");
var openError = document.getElementById("OpneError");
var checkError = document.getElementById("checkError");
var closeError = document.getElementById("ClossError");

loadmore.onclick=()=>{
    formpw.style.display=("block");
    formpw.classList.remove("popup-close");
}
closepw.onclick=()=>{
    formpw.classList.add("popup-close");
}
openError.onclick=()=>{
    classPopup.style.display=("none");
    checkError.style.display=("block");
}
closeError.onclick=()=>{
    classPopup.style.display=("block");
    checkError.style.display=("none");
}


function liked(){
    var changeValue = document.getElementById("changeValue");
    var element = document.getElementById("likeMan");
    element.classList.toggle("liked");
    changeValue.innerHTML=" ";
    changeValue.classList.toggle("mycontentlike");
}

var closewps = document.getElementById("closewps");

function Mylongin(){
    var a = document.getElementById("EnterPs").value;
    var loadvideo = document.getElementsByClassName("content-right-video");
    if(a === "123"){
        formpw.classList.add("popup-close");
        for( var x =0; x<loadvideo.length; x++){
            loadvideo[x].style.display=("block");
        }
        loadmore.style.display=("none");
        return false;
    }
    else if(a===""){
        document.getElementById("messagesps").innerHTML="Please Enter correct Password";
        return false;
    }
    else{
        document.getElementById("messagesps").innerHTML="Wrong Password";
        return false;
    }
}


window.addEventListener('load', videoScroll);
    window.addEventListener('scroll', videoScroll);
    
    function videoScroll() {
    
      if ( document.querySelectorAll('video[autoplay]').length > 0) {
        var windowHeight = window.innerHeight,
            videoEl = document.querySelectorAll('video[autoplay]');
    
        for (var i = 0; i < videoEl.length; i++) {
    
          var thisVideoEl = videoEl[i],
              videoHeight = thisVideoEl.clientHeight,
              videoClientRect = thisVideoEl.getBoundingClientRect().top;
    
          if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
            thisVideoEl.play();
          } else {
            thisVideoEl.pause();
          }
    
        }
      }
    
    }