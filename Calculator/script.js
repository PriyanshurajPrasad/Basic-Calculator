const display=document.getElementById("display");
const button=document.querySelectorAll("button");

button.forEach(button=>{
    button.addEventListener("click",()=>{
        const value=button.getAttribute("data-value");
        if(value=="AC"){
            display.innerText="0";
        }
        else if(value=="DEL"){
            display.innerText=display.innerText.slice(0,-1)||"0";
        } 
        else if(value=="="){
            try{
                const expression=display.innerText.replace(/÷/g,"/");
                display.innerText=eval(expression);
            }
            catch{
                display.innerText="Error";
            }
        }
        else{
            if(display.nnerText=="0"||display.innerText=="Error"){
                display.innerText=value;
            }
            else{
                display.innerText+=value;
            }
        }
    });
});



