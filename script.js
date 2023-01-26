let div=document.querySelector(".item2")
let input=document.querySelector(".input")
let btn=document.querySelector(".btn")
let allDelete=document.querySelector(".allDelete")
let list=document.querySelector(".list")

btn.addEventListener("click",function(){
    if(input.value.length !== 0){
  const li= document.createElement("li")
  li.setAttribute("class","li")
  li.innerHTML=input.value
   let btn1=document.createElement("button")
   btn1.setAttribute("class","btn1")
  btn1.innerHTML="Delete"
  li.appendChild(btn1)
  list.appendChild(li)
  input.value=""
  btn1.addEventListener("click",function(){
    li.remove()
  })
  allDelete.addEventListener('click',function(){
    list.innerHTML=""
  })
    
    
    }

  })

 
  input.addEventListener("keyup", function(event) {
 
  if (event.key === "Enter") {
      btn.click();
  }
});
