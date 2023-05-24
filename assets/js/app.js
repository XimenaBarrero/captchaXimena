const captcha = document.querySelector(".captacha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector("input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-txt");

//storing all captcha characters in array
let allCharacters = ["A","B","C","D","E","F","G","H",
"I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z","a", "b", "c", "d", "e", "f",
 "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
 "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
 0,1,2,3,4,5,6,7,8,9];

 function getCaptcha(){
    for(let i = 0; i < 6; i++ ){
        let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += ` ${randomChar}`; //passing random characters inside captcha innerText
    }
 }

 getCaptcha();
 reloadBtn.addEventListener("click", ()=>{
    captcha.innerText = "";
    getCaptcha();
 });

 checkBtn.addEventListener("click", e =>{
    e.preventDefault();//preventing button from its default behaviour
    statusTxt.style.display = "block";
    statusTxt.getElementsByClassName.display ="block";
    //adding space after each value of user entered captcha because i`ve added spaces while generating captcha
    let inputVal = inputField.value.split('').join(' ');
    if(inputVal == captcha.innerText){ //if catcha matches 
        statusTxt.style.color="#4db2ec"
        statusTxt.innerText="Good! You dont seem to be a robot.";
    }else{
        statusTxt.style.color="#ff0"
        statusTxt.innerText="Captcha did not match. Please try again!";
    }
 })