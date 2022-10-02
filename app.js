  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
let bars = document.querySelector(".fa-bars")
bars.addEventListener("click",raza)
let sidebar
let gt
function raza(){
   sidebar =  document.querySelector(".sidebar")
  sidebar.style.display ="block"
  bars.style.visibility = "hidden"
}
window.addEventListener('resize', function(event){
  console.log(window.innerWidth)

  if(window.innerWidth > 640){
  bars.style.visibility = "hidden"
  }
  if(sidebar.style.display = "block" && window.innerWidth < 640){
    bars.style.visibility = "hidden"
  }

if(sidebar.style.display = "none"){
  bars.style.visibility = "visible"
}


});


let cross = document.querySelector(".fa-times")
cross.addEventListener("click", saad)
function saad (){
 let sidebar =  document.querySelector(".sidebar")
 sidebar.style.display= "none"
 bars.style.visibility = "visible"
}



var totlaPictures = ["1.jpg" ,  "2.jpg"   , "3.jpg" ,  "4.jpg ", "5.jpg"]

var install = document.getElementById('display')
  function calling (value) {
// install.innerHTML = `<img src="./${totlaPictures[value]}" class = "image-1"> `
install.innerHTML = `<img class="banner"  width="100%" id= "tkr" height="100%"  src="./${totlaPictures[value] }"/>`

// console.log(value)
}

  var i = 0;
  setInterval( function() {
    if(totlaPictures.length === i ){
  i = 0 
    }
    calling(i++)
  }, 4000)

// var totlaPictures = ["" , "", "", ""]

// var install = document.querySelector(".carousel")
//   function calling (value) {
// install.innerHTML = `<img class="banner"  width="100%" height="100%"  src="./${totlaPictures[value] }"/>`
// }

//   var i = 0;
//   setInterval( function() {
//     if(totlaPictures.length === i ){
//   i = 0 
  //   }
  //   calling(i++)
  // }, 4000)