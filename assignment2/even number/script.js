
let btn=document.querySelector(".btn");
let para=document.querySelector("p")
 
function evenNumber(){
    let output=''
    for(let i=1;i<=100;i++){
        if(i%2==0){
            output=output+i+'';
           
        }
    }
    
    para.innerText=output
}
btn.addEventListener("click",evenNumber);
