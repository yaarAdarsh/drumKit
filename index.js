var drumButtons=document.querySelectorAll(".drum").length;



function btnAnimation(currKey){
    // console.log("."+currKey);
    var active=document.querySelector("."+currKey);
    active.classList;
    active.classList.add("pressed");
    setTimeout(function(){active.classList.remove("pressed")},100);
}

function makeSound(key){
    switch(key){
        case 'w':
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare=new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            var kick=new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
           
            break;
    }
}
for(var i=0;i<drumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){  
    
        var buttonVariable=this.innerHTML;
       
        makeSound(buttonVariable);
        btnAnimation(buttonVariable); 
});
    // console.log(i);
   
}

var total=document.querySelector("html");
total.addEventListener("keydown",function(event) {
    var btnVariable=event.key;
   makeSound(btnVariable);
   btnAnimation(btnVariable);
})


