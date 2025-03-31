
const btn =  document.getElementById("btn")
const container = document.getElementById("a")

const jokes = [
    "Why don’t skeletons fight? They don’t have the guts!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? It was two-tired!",
    "Why don’t eggs tell jokes? They might crack up!",
    "I told my wife she should embrace her mistakes… she hugged me.",
    "What did one plate say to the other? Lunch is on me!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "What’s orange and sounds like a parrot? A carrot!",
    "Why was the math book sad? It had too many problems.",
    "What do you call a factory that makes good products? A satisfactory!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What did the ocean say to the beach? Nothing, it just waved!",
    "Why can’t a nose be 12 inches long? Because then it would be a foot!",
    "How do trees access the internet? They log in!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why do cows wear bells? Because their horns don’t work!",
    "I told my suitcase there will be no vacations this year… now I’m dealing with emotional baggage.",
    "Why do ducks have feathers? To cover their butt-quacks!",
    "What’s a vampire’s favorite fruit? A blood orange!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!"
  ];

  const emj = [
    "😍" , "👻", "😁", "🤦‍♀️", "😂", "🤣", "😎", "🤩","🤪"
  ]
  
  

  btn.addEventListener("click", (e)=>{
    console.log(e.target);
    let a = Math.floor(Math.random() * jokes.length); 
    let b = Math.floor(Math.random()* emj.length)
    container.innerHTML = `
    <div class="joke">
        <h1>${jokes[a]} ${emj[b]}</h1>
    </div>`;
  })