const btn = document.getElementById("submit");
const result = document.getElementById("result");   

function ageCal(event) {
    event.preventDefault()
    let dob = document.getElementById("dob").value;
    if (!dob) {
        alert("Please enter a valid date.");
        return;
    }
    let dobDate = new Date(dob);
    let today = new Date();

    if (dobDate > today) {
        alert("Abe bsdk future se aaya hai kya ?"); 
        return;
    }
    let year = today.getFullYear() - dobDate.getFullYear();
    let monthDiff = today.getMonth() - dobDate.getMonth();
    let dayDiff = today.getDate() - dobDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        year--;
        monthDiff += 12; 
        
    }

    let h1 = document.createElement("h2");
    h1.innerText = `You are ${year} years , ${monthDiff} months and ${dayDiff} days old`;
    result.appendChild(h1);
    console.log(result.innerHTML);
}

btn.addEventListener("click", ageCal);
document.getElementsByTagName("input")[0].addEventListener("click", function() {
    this.value = ""; 
    result.innerHTML = ""; 
}  );
