let input = document.getElementById("search");

let list = document.querySelectorAll(".list");

//function search on the list.
function search (){
  for(let i = 0; i < list.length; i += 1){
   //check if the element contains the value of the input
   if(list[i].innerText.toLowerCase().includes(input.value.toLowerCase())){
     list[i].style.display = "flex";
   }else{
     list[i].style.display = "none";
   }
  }
}

//to the change run search.
input.addEventListener('input', search);