var initialinp=  document.querySelector("#initialprice");
var currentinp = document.querySelector("#currentprice");
var quantityinp= document.querySelector("#qtystocks") ;
var button= document.querySelector("#btn-ref");
var outputinp= document.querySelector("#output-ref");

button.addEventListener("click",testing);

function testing(){
    var initial = initialinp.value;
    var current = currentinp.value;
    var quantity= quantityinp.value;
    
    calculation(initial,current,quantity);

}

function calculation(ini,cur,qua){
    if(ini>cur){
       document.body.style.backgroundColor = 'red';
       event.target.style.backgroundColor = 'salmon';
       var loss = Number.parseFloat((ini-cur)*qua).toFixed(2);
       var lossPercentage= Number.parseFloat((loss/ini)*100).toFixed(2);
       showOutput("The loss is "+loss+" and Percentage is "+lossPercentage);

    }

    else if(cur>ini){
        document.body.style.backgroundColor = 'green';
        event.target.style.backgroundColor = 'aqua';
        var profit = Number.parseFloat((cur-ini)*qua).toFixed(2);
        var profitPercentage=Number.parseFloat((profit/ini)*100).toFixed(2);
        showOutput("The proft is "+profit+" and Percentage is "+profitPercentage);

    }
    else{
        outputinp.style.backgroundColor = 'coral';
        showOutput("No pain No gain. Keep up with your braveery and keep Investing it will reward you if not now , later,")
    } 

}

function showOutput(message){
    outputinp.innerText= message;
}