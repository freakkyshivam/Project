
const emoji1 = document.getElementById("emoji1")
const emoji2 = document.getElementById("emoji2")

// async ()=>{
//     const res = await fetch('https://emojihub.yurace.pro/api/all');
//     const data = await res.json();
//     emoji.innerText = data.htmlCode;
//     console.log(data.htmlCode  );
// }

emoji1.addEventListener("click", async () => {
    const res = await fetch('https://emojihub.yurace.pro/api/random');
    const data = await res.json();
    emoji2.innerText = data.htmlCode;
    console.log(data.htmlCode);
}); 



