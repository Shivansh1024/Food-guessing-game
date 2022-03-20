const food_result= document.getElementById('food_result');
const maxTime=90;

const food_btm=document.getElementById('food_btn');
food_btm.addEventListener('click',getfood)
function getfood(){


fetch('https://foodish-api.herokuapp.com/api/')
   .then(res=>res.json())
   .then(data=>{
       food_result.innerHTML= `<img src="${data.image}"/  style="width:550px;height:480px;position:relative;right:-30%;top:1px;padding 5px;border:4px solid black;size:20px">`
     const text =res.image[0].text;
     

       
   })
}
food_btm.addEventListener('click',time)
function lostgame()
{
    alert('TIMES UP CHAMP!YOU RAN OUT OF TIME')
}
function time()
{
setInterval(updatecountdown,1000);
const startingsec=90;
let time=startingsec;

const countdownEl=document.getElementById('time');


function updatecountdown(){
    if(time>=0)
    {
    let seconds=time;
    countdownEl.innerHTML=`${seconds}`;
    time--;
    }
    time=time<0 ? lostgame() :time;
}


    
} 
const textelement=document.getElementById('textelement'); 
if(textelement==text)
{
    alert('You won');
}
else{
    alert('you lost');
}
