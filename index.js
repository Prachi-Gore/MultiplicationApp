//generate number between 1 to 10
const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
//console.log(num1);
// if (typeof window !== 'undefined') {
//     console.log('You are on the browser')
//   } else {
//     console.log('You are on the server')
//   }
  
// if (typeof document !== "undefined") {//when type define
    
//     console.log("hiii")
// } else{
// console.log("not define")
// }
//to generate the qn
document.getElementById("question").innerText=`What is ${num1} multiply by ${num2}`;
//document.getElementById("question").innerText="What is "+num1+" multiply by "+num2;

const ans=num1*num2;

//console.log(typeof localStorage.getItem("score"));
//convert score into number

 let score=+localStorage.getItem("score");
 //console.log(typeof score);


const scoreE1=document.getElementById("score");
//console.log(scoreE1);
scoreE1.innerText=`score: ${score}`;

const formE1=document.getElementById("form");

 inputE1= document.getElementById("input");

 formE1.addEventListener("submit",()=>{
    if(inputE1.value!=""){
 const userAns=+inputE1.value;// + sign to convert string to num;
 
 if(userAns===ans){
     score++;
    updateLocalStorage();
}else{
    score--;
   updateLocalStorage()
}
    }
 });

 document.getElementById("start-again").addEventListener("click",()=>{
       // localStorage.clear();
       score=0;
       updateLocalStorage();
 });
 function updateLocalStorage(){
     localStorage.setItem("score",score);
 }

