const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");
const jump = document.querySelector(".jump");
const forward = document.querySelector(".forward");
const score = document.querySelector(".score");
let Score = 0;

function jumping() {
    if(dino.classList!="jump")
    {
        dino.classList.add("jump");
    }
    setTimeout(function() {
        dino.classList.remove("jump")
    },400);
}

function forwards()
{
    dino.classList.add("forward");

   setTimeout(() => {
       dino.classList.remove("forward")
   }, 300);
}
document.onkeydown = function(e)
{
    
    if(e.keyCode == 32)
    {
        jumping();
    }
    if(e.keyCode == 39)
    {
        const dinoX = parseInt(window.getComputedStyle(dino , null).getPropertyValue("left"));
        
        
        if(dinoX < 750)
        {
                dino.style.left = dinoX + 20 + "px";
            
        }
    }
setInterval(() => {
}, 300);

if(e.keyCode == 37)
{
    const dinoX = parseInt(window.getComputedStyle(dino , null).getPropertyValue("left"));
    
    
    if(dinoX > 0)
    {
        
        dino.style.left = dinoX - 20 + "px";
        
    }

}   


}

setInterval(() => {
    gameover = document.querySelector(".gameover");

    dx=parseInt(window.getComputedStyle(dino , null).getPropertyValue("left"));
    dy=parseInt(window.getComputedStyle(dino , null).getPropertyValue("bottom"));

    cx = parseInt(window.getComputedStyle(cactus , null).getPropertyValue("left"));
    cy = parseInt(window.getComputedStyle(cactus , null).getPropertyValue("top"));

    
    valuex = Math.abs(dx-cx);        
    console.log(valuex);
    valuey = Math.abs(dy-cy);        
    
    
    if( 40 >valuex && valuey > 167 )
    {
        alert("Game over");
        Score = 0;
        cactus.style.left ="8200px";
        dino.style.left ="0px";
    }
    else{
        Score +=1;
        
         document.querySelector(".score").innerHTML= Score;
    }
   
}, 100);



