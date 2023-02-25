
// var overlay = document.getElementById("my-load");

// window.addEventListener('load', function(){
//   overlay.style.display = 'none';
// })

$(window).on("load",function(){
    $(".my-load").fadeOut(1080);
  });

function hoveHeader(){
    document.getElementById("Dropheader")
    document.getElementById("ExMore").style.display="none"
    document.getElementById("Exless").style.display="block"
    document.getElementById("header").style.position="fixed"
    document.getElementById("form").style.padding="20px 0px"
}
function hoveoutHeader(){
    document.getElementById("Dropheader")
    document.getElementById("form").style.display="none"
    document.getElementById("header").style.position="absolute"
    document.getElementById("ExMore").style.display="block"
    document.getElementById("Exless").style.display="none"
}
function dropHeader(){
    document.getElementById("ExMore").style.display="none"
    document.getElementById("Exless").style.display="block"
    document.getElementById("header").style.position="fixed"
    document.getElementById("form").style.display="flex"
    document.getElementById("form").style.padding="20px 0px"
}

function MydropHeader(){
    document.getElementById("ExMorechil").style.display="none"
    document.getElementById("Exlesschil").style.display="block"
    document.getElementById("header").style.position="fixed"
    document.getElementById("form").style.display="block"
    document.getElementById("form").style.padding="20px 0px"
    document.getElementById("Mycome").style.display="none"
    document.getElementById("Mycomechil").style.display="none"
}
function MyoutHeader(){
    document.getElementById("form").style.display="none"
    document.getElementById("header").style.position="absolute"
    document.getElementById("ExMorechil").style.display="block"
    document.getElementById("Exlesschil").style.display="none"
    document.getElementById("Mycome").style.display="block"
    document.getElementById("Mycomechil").style.display="block"
}


let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick =() =>{
    let boxes =[...document.querySelectorAll('.container .box-container .box')];
    for(var i = currentItem;i < currentItem + 3; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem +=3;

    if (currentItem >= boxes.length){
        loadMoreBtn.innerHTML="It's over";
    }
}

let loadAdobe = document.querySelector('#load-more-adobe');
let currentAdobe = 3;

loadAdobe.onclick =() =>{
    let boxesAdobe =[...document.querySelectorAll('.container-adobe .boxman-adobe .box-abode')];
    for(var i = currentAdobe;i < currentAdobe + 3; i++){
        boxesAdobe[i].style.display = 'inline-block';
    }
    currentAdobe +=3;

    if (currentAdobe >= boxesAdobe.length){
        loadAdobe.innerHTML="It's over";
    }
}

let loadMs = document.querySelector('#microsoftloadmore');
let currentMs = 3;

loadMs.onclick =() =>{
    let boxesMs =[...document.querySelectorAll('.microsoft-contener .microsoft-boxs .microsoft-box')];
    for(var i = currentMs;i < currentMs + 3; i++){
        boxesMs[i].style.display = 'inline-block';
    }
    currentMs +=3;

    if (currentMs >= boxesMs.length){
        loadMs.innerHTML="It's over";
    }
}

let Mygetstart = document.getElementById("Getstart-top");
Mygetstart.onmouseover=()=>{
        Mygetstart.innerHTML="OK! តោះយើងទៅឥឡូវនេះ"
    }
Mygetstart.onmouseout=()=>{
        Mygetstart.innerHTML="តោះចាប់ផ្ដើមជាមួយនិងខ្ញុំ"
    }
let imageone = document.getElementById("changone");
let imagetow = document.getElementById("changtow");
let imagetree = document.getElementById("changtree");
let changimage = document.getElementById("changimage");
    imageone.onmouseover=()=>{
        changimage.style.backgroundImage = ("url('boost pruduct.jpg')");
    }
    imagetow.onmouseover=()=>{
        changimage.style.backgroundImage = ("url('booost-website.jpg')");
    }
    imagetree.onmouseover=()=>{
        changimage.style.backgroundImage = ("url('product-design.jpg')");
    }

    imageone.onmouseout=()=>{
        changimage.style.backgroundImage = ("url('promotion-photo-befor.jpg')");
    }
    imagetow.onmouseout=()=>{
        changimage.style.backgroundImage = ("url('promotion-photo-befor.jpg')");
    }
    imagetree.onmouseout=()=>{
        changimage.style.backgroundImage = ("url('promotion-photo-befor.jpg')");
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
   