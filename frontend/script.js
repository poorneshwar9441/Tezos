var button = document.getElementsByTagName("button"); 
button[0].addEventListener("click", (event)=>{
    alert("Hello Nothing Happens!"); 
});

var Net_apy = document.getElementsByClassName("Net-APY"); 
var Htmlelem1 = `<span> NetApy </span> <span> ... </span> `; 
var Htm1elem2 = `<span> ... </span>Intrest earned<span> `
Net_apy[0].addEventListener('mouseenter',(event)=>{
    Net_apy[0].style.color = "grey"; 
    Net_apy[0].innerHTML = Htmlelem1; 
    

});

Net_apy[0].addEventListener('mouseout',(event)=>{
  Net_apy[0].style.color = "green"; 
  Net_apy[0].innerHTML = Htm1elem2; 
  
});



