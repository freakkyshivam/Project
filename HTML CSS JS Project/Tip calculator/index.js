
const btn = document.getElementById("btn");
const result = document.getElementById("result")

btn.addEventListener("click", ()=>{
    let amount = document.getElementById("bill-amount").value;
    let percent = document.getElementById("tip-percentage").value;
    if (amount === "" || percent === "") {
        alert("Please enter both amount and percentage");
        return;
    }

    if (amount < 1) {
        result.textContent = `Please enter a valid amount`;
        return;
    }

    if (percent < 1 || percent > 100) {
        result.textContent = `Please enter a valid percentage (1-100)`;
        return;
    }

    calculateTip(amount, percent);
    clearFields();
    

})


function calculateTip(amount, percent) {
    
    let finalAmount = parseFloat(amount);
    let finalPercent = parseFloat(percent);     
    let tip = (finalAmount * finalPercent) / 100;
    
    let total = finalAmount + tip;
    result.textContent = `Tip is ${tip} and the Final amount is ${total}.`;
    
}

function clearFields() {
    document.getElementById("bill-amount").value = "";
    document.getElementById("tip-percentage").value = "";   
        
   
}
 
    document.getElementsByTagName("input")[0].addEventListener("click", ()=> {
        document.getElementById("result").textContent = "";
    });
    document.getElementsByTagName("input")[1].addEventListener("click", ()=> {
        document.getElementById("result").textContent = "";
    });    
 
