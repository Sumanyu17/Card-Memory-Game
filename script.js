const cards= document.querySelectorAll('.card');
let hasflipped=false;
let firstcard, secondcard;
let lock=false;
let chances=6;
let tries=0;
let matches=0;
let celebration = document.getElementById('celebration');
let defeat= document.getElementById('defeat');
const chanceP= document.getElementById('notifier');
cards.forEach(element => {element.addEventListener('click', flip)
});
function flip(e){
    if(lock){
    return;
    }
    if(this===firstcard)return;
    if(!hasflipped){
        hasflipped=true;
        firstcard=this;
        console.log(this);
    }
    else{
        hasflipped=false;
        secondcard=this;
        console.log(this);

    
    if(firstcard.dataset.face === secondcard.dataset.face)
    {
        matchedcards();
    }
    else{
        nomatch();
   }
}
    this.classList.toggle('flip');
}
function matchedcards(){
    firstcard.removeEventListener('click', flip);
        secondcard.removeEventListener('click', flip);
        console.log("its a match");
        matches+=1
        if(matches==6){
            celebrate();
            return;
        }
}
function nomatch(){
    lock=true;
    setTimeout(() =>{
        firstcard.classList.remove('flip');
        secondcard.classList.remove('flip');
        resetgame();
        }, 700);
        chances=chances-1;
        chanceP.innerHTML= "Remaining="+ chances;
        if(chances==0)
        {
            defeatfun();
        }
}
function resetgame(){
    lock=false;
    hasflipped=false;
    firstcard=null;
    secondcard=null;
}
function celebrate(){
    celebration.style.display='flex';
}
function defeatfun(){
    defeat.style.display='flex';
}
(function shuffle(){
    cards.forEach(element =>{
        let random= Math.floor(Math.random()*12)
        element.style.order= random;
    })
})();
window.onclick = function(event) {
    if (event.target == celebration) {
      celebration.style.display = "none";
    }
  }
  window.onclick = function(event) {
    if (event.target == defeat) {
      defeat.style.display = "none";
    }
  }

    