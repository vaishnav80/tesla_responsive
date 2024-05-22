// function openNav() {
//     document.getElementById("myNav").style.height = "500px";
//   }

// function closeNav() {
//     document.getElementById("myNav").style.height = "0%";
// }
  
// function demo(){
//   alert('This is a demo alert');
// }

var hoverDiv = document.getElementById('one');
hoverDiv.addEventListener('mouseover',()=>{
  document.getElementById("myNav2").style.height = "0";
  document.getElementById("myNav").style.height = "380px";
  
  document.getElementById("navbar").style.backgroundColor = 'white';
})
var hoverDiv = document.getElementById('two');
hoverDiv.addEventListener('mouseover',()=>{
  document.getElementById("myNav").style.height = "0";
  document.getElementById("myNav3").style.height = "0";
  document.getElementById("myNav2").style.height = "300px";
  document.getElementById("navbar").style.backgroundColor = 'white';
})
hoverDiv.addEventListener('mouseout',()=>{
  document.getElementById("myNav2").style.height = "0";
  document.getElementById("navbar").style.backgroundColor = 'transparent';
})
var hoverDiv = document.getElementById('three');
hoverDiv.addEventListener('mouseover',()=>{
  document.getElementById("myNav2").style.height = "0";
  document.getElementById("myNav4").style.height = "0";
  document.getElementById("myNav3").style.height = "300px";
  document.getElementById("navbar").style.backgroundColor = 'white';
})
hoverDiv.addEventListener('mouseout',()=>{
  document.getElementById("myNav3").style.height = "0";
  document.getElementById("navbar").style.backgroundColor = 'transparent';
})
var hoverDiv = document.getElementById('four');
hoverDiv.addEventListener('mouseover',()=>{
  document.getElementById("myNav3").style.height = "0";
  document.getElementById("myNav5").style.height = "0";
  document.getElementById("myNav4").style.height = "320px";
  document.getElementById("navbar").style.backgroundColor = 'white';
})
hoverDiv.addEventListener('mouseout',()=>{
  document.getElementById("myNav4").style.height = "0";
  document.getElementById("navbar").style.backgroundColor = 'transparent';
})
var hoverDiv = document.getElementById('five');
hoverDiv.addEventListener('mouseover',()=>{
  document.getElementById("myNav4").style.height = "0";
  document.getElementById("myNav5").style.height = "250px";
  document.getElementById("navbar").style.backgroundColor = 'white';
})
hoverDiv.addEventListener('mouseout',()=>{
  document.getElementById("myNav5").style.height = "0";
  document.getElementById("navbar").style.backgroundColor = 'transparent';
})
const hoverDiv2 = document.querySelector('.overlay');
hoverDiv2.addEventListener('mouseout',()=>{
  document.getElementById("myNav").style.height = "0";
})
hoverDiv2.addEventListener('mouseout', () => {
  document.getElementById("navbar").style.backgroundColor = 'transparent';
});
hoverDiv2.addEventListener('mouseout', () => {
  document.getElementById("myNav2").style.height = "0";
  // document.getElementById("myNav5").style.height = "0";
});
hoverDiv2.addEventListener('mouseout', () => {
  // document.getElementById("myNav2").style.height = "0";
  document.getElementById("myNav5").style.height = "0";
});
