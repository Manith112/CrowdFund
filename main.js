document.addEventListener('DOMContentLoaded', function () {

const bookmark = document.getElementById("bookmark")
const bookmarkSelected = document.getElementById("bookmark-select")
const textBookmark = document.querySelector(".second-button")
const textBookmarkSelected = document.querySelector(".second-button-select")
const closeBtn = document.getElementById("close");
const modalPage = document.querySelector(".new");
const modalOpen = document.getElementById("modal-open");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const show1 = document.getElementById("show-1");
const show2 = document.getElementById("show-2");
const show3 = document.getElementById("show-3");
const bambooReward = document.getElementById("bamboo-reward")
const blackReward = document.getElementById("black-reward")
const gotIt = document.querySelector(".got")
const bambooContinue = document.getElementById("bamboo-continue")
const complete = document.querySelector(".completed")
const blackContinue = document.getElementById("black-continue")
const incorrectPrice2 = document.getElementById("false-2");
const incorrectPrice3 = document.getElementById("false-3");
const greenBorder1 = document.getElementById("border-1")
const greenBorder2 = document.getElementById("border-2")
const greenBorder3 = document.getElementById("border-3")
const burgerMobile = document.getElementById("burger");
const listMobile = document.querySelector(".list")
const closeMobile = document.getElementById("close-menu")
// click book mark 
bookmark.addEventListener("click", function(){
    
   textBookmark.style.display = "none";
   textBookmarkSelected.style.display = "flex";
})
bookmarkSelected.addEventListener("click", function(){
    
    textBookmark.style.display = "flex";
    textBookmarkSelected.style.display = "none";
 })

//  close modal 
closeBtn.addEventListener("click", function(){
   setTimeout(() => {
   modalPage.style.display = "none"; 
}, 100);
})

// open modal 
modalOpen.addEventListener("click", function(){
   // modalPage.style.display = "flex";
   show2.style.display = "none";
   show3.style.display = "none";
   show1.style.display = "none";
   option1.checked = false;
   option2.checked = false;
   option3.checked = false;
   greenBorder1.style.border = "1px solid hsl(0, 0%, 48%)";
   greenBorder2.style.border = "1px solid hsl(0, 0%, 48%)";
   greenBorder3.style.border = "1px solid hsl(0, 0%, 48%)";
   
    setTimeout(() => {
      modalPage.style.display = "flex";
      // modalPage.style.opacity = '1';
    }, 100);
})

// open option 
option1.addEventListener("change", function(){
   if(option1.checked){
      show1.style.display = "flex";
      show2.style.display = "none";
      show3.style.display = "none";
      greenBorder1.style.border = "2px solid hsl(176, 50%, 47%)"
      greenBorder2.style.border = "1px solid hsl(0, 0%, 48%)";
      greenBorder3.style.border = "1px solid hsl(0, 0%, 48%)";
     
   }
})

option2.addEventListener("change", function(){
   if(option2.checked){
      show2.style.display = "flex";
      show3.style.display = "none";
      show1.style.display = "none";
      greenBorder2.style.border = "2px solid hsl(176, 50%, 47%)"
      greenBorder1.style.border = "1px solid hsl(0, 0%, 48%)";
      greenBorder3.style.border = "1px solid hsl(0, 0%, 48%)";
   }
})
option3.addEventListener("change", function(){
   if(option3.checked){
      show3.style.display = "flex";
      show2.style.display = "none";
      show1.style.display = "none";
      greenBorder3.style.border = "2px solid hsl(176, 50%, 47%)"
      greenBorder1.style.border = "1px solid hsl(0, 0%, 48%)";
      greenBorder2.style.border = "1px solid hsl(0, 0%, 48%)";
   }
})

// show reward while clicked on
bambooReward.addEventListener("click", function(){
   modalPage.style.display = "flex";
   show2.style.display = "flex";
   show3.style.display = "none";
   option2.checked = true;
}) 

blackReward.addEventListener("click", function(){
   modalPage.style.display = "flex";
   show2.style.display = "none";
   show3.style.display = "flex";
   option3.checked = true;
}) 

// completed
bambooContinue.addEventListener("click", function(){
   const bambooPrice = document.getElementById("bamboo-price").value;
   if (bambooPrice >= 25) {
      modalPage.style.display = "none"
      complete.style.display = "flex";
     console.log("good")
   }else{
      incorrectPrice2.style.display = "flex";
   }
})
blackContinue.addEventListener("click", function(){
   const blackPrice = document.getElementById("black-price").value;

   if (blackPrice >= 75){
      modalPage.style.display = "none"
      complete.style.display = "flex";
     console.log("good")
   }else{
      incorrectPrice3.style.display = "flex";
   }
})



// back to homePage 
gotIt.addEventListener("click", function(){
   complete.style.display = "none"
   incorrectPrice2.style.display = "none"
   incorrectPrice3.style.display = "none";
})

// mobile menu 
burgerMobile.addEventListener("click", function(){
   burgerMobile.style.display = "none"
   closeMobile.style.display = "flex"
   listMobile.style.display= "flex";
})

closeMobile.addEventListener("click", function(){
   burgerMobile.style.display = "flex"
   closeMobile.style.display = "none"
   listMobile.style.display= "none";
})
})
