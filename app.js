let yourscore = 0;
let computerscore = 0;

let opt = document.querySelectorAll(".opt");
let msg = document.querySelector("#msg");
let yourscoreNumber = document.querySelector("#yourscoreNumber");
let computerscoreNumber = document.querySelector("#computerscoreNumber");

opt.forEach((option)=>{
    option.addEventListener("click",()=>{
        const userchoice = option.getAttribute("id");
        let arr=["rock","paper","scissor"];
        let index=Math.floor(Math.random()*3);
        let computerchoiceid = arr[index];
        playgame(userchoice,computerchoiceid);
    });
});

const playgame=(userchoice,computerchoiceid)=>{
    if(userchoice===computerchoiceid){
        draw();
    }else{
        let youwin = true;
        if(computerchoiceid === "paper"){
            youwin = userchoice === "rock" ? false:true;
        }else if(computerchoiceid === "rock"){
            youwin = userchoice === "scissor" ? false:true;
        }else{
            youwin = userchoice === "paper" ? false:true;
        }

        if(youwin){
            userwin(userchoice,computerchoiceid);
        }else{
            compwin(userchoice,computerchoiceid);
        }
        
    }
}

const draw=()=>{
    msg.innerText="HaHaHa it's a Draw.";
    msg.style.backgroundColor = "black";
}

const userwin=(userchoice,computerchoiceid)=>{
    msg.innerText=`You win. Your ${userchoice} beats  ${computerchoiceid}`;
    msg.style.backgroundColor = "green";
    yourscore++;
    yourscoreNumber.innerText=yourscore;
}

const compwin=(userchoice,computerchoiceid)=>{
    msg.innerText=`You loose you loser. ${computerchoiceid} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
    computerscore++;
    computerscoreNumber.innerText=computerscore;
}
