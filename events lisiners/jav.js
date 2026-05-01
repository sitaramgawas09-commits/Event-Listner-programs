

// mybutton.addEventListener("mouseover",(event)=>{
//     event.target.style.backgroundColor="red"
//     event.target.textContent="Hello 😀"
// })


// mybutton.addEventListener("mouseout",(event)=>{
//     event.target.style.backgroundColor=" rgb(106, 214, 106)"
// })


// mybutton.addEventListener("click",(event)=>{
//     event.target.style.backgroundColor=" rgb(106, 214, 106)"
//       event.target.textContent="OUCH😀"
// })



// document.addEventListener("keydown",(event)=>{
//    mybutton.style.backgroundColor="red";
//        mybutton.textContent="W";
//        mybutton.style.cssText=`
//    height: 100%;
//    width: 10%;
//       border-radius: 22px;
//        transition: 1s ease-in-out;
//        `
// })



// document.addEventListener("keyup",(event)=>{
//    mybutton.style.backgroundColor=" rgb(106, 214, 106)"
//  mybutton.style.cssText=`
   

//        `
// })




//Game Using EventListiner
const mybutton = document.getElementById("mybox")
let  ArrowAmount=5;
let x=0;
let y=0;

document.addEventListener("keydown",(event)=>{
          console.log(event.key)
     if(event.key.startsWith("Arrow")){
     if(event.key==="ArrowUp"){
       y-=ArrowAmount;
     }
     else if(event.key==="ArrowDown"){
        y+=ArrowAmount;

     }
     else if(event.key==="ArrowLeft"){
        x-=ArrowAmount;

     }
     else if(event.key==="ArrowRight"){
             x+=ArrowAmount

     }
    mybutton.style.top=`${y}px`;
     mybutton.style.left=`${x}px`;
    mybutton.style.backgroundColor = "red";
    mybutton.textContent = "Moving";
    mybutton.style.borderRadius= "50px"
  
     }

})

// document.addEventListener("keyup",(event)=>{
//     mybutton.textContent = "Click Me";
// mybutton.style.backgroundColor = "rgb(106, 214, 106)";
// mybutton.style.transition = "none";
// })


document.addEventListener("keyup",(event)=>{
          console.log(event.key)
   
     if(event.key==="w"){
mybutton.style.backgroundColor = "rgb(255, 221, 0)";
     }
     else if(event.key==="s"){
      mybutton.style.backgroundColor = "rgb(0, 102, 255)";
     
     }
     else if(event.key==="a"){
       
mybutton.style.backgroundColor = "rgb(221, 0, 255)";
     }
     else if(event.key==="d"){
         
mybutton.style.backgroundColor = "rgb(0, 208, 255)";
     }
  

})

