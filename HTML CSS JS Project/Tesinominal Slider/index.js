
let img = document.getElementsByTagName("img");
let quoteName = document.getElementById("quote-name");
let author = document.getElementById("quote-author");

const quotes = [
    {
        name: "Albert Einstein",
        img: "https://karsh.org/wp-content/uploads/2016/10/Yousuf-Karsh-Albert-Einstein-1948-01-1562x1960.jpg",
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
    },
    {
        name: "Steve Jobs",
        img: "https://media.gettyimages.com/id/90504957/photo/san-francisco-apple-ceo-steve-jobs-speaks-during-a-special-event-september-9-2009-in-san.jpg?s=612x612&w=0&k=20&c=S1AkGrxjVIlW41t_9Vs2MQDBrYrZmhxH288GWkrTKO8=",
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
    },
    {
        name: "Nelson Mandela",
        img: "https://media.gettyimages.com/id/171532260/photo/state-president-of-south-africa-nelson-mandela-smiles-on-may-22-bonn-germany.jpg?s=612x612&w=0&k=20&c=MVfUPkooJjQuTmOJHwZsK7ZRGAUmwaOrVNMOK8fX8ps=",
        quote: "It always seems impossible until it’s done.",
    },

    {
        name: "Walt Disney",
        img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vZGV8ZW58MHx8fHwxNjg5NTY3NzA0&ixlib=rb-4.0.3&q=80&w=400",
        quote: "The way to get started is to quit talking and begin doing.",
    },
    {
        name: "Henry Ford",
        img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vZGV8ZW58MHx8fHwxNjg5NTY3NzA0&ixlib=rb-4.0.3&q=80&w=400",
        quote: "Whether you think you can or you think you can’t, you’re right.",
    },

    {
        name: "Mahatma Gandhi",
        img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vZGV8ZW58MHx8fHwxNjg5NTY3NzA0&ixlib=rb-4.0.3&q=80&w=400",
        quote: "Be the change that you wish to see in the world.",
    },

    {
        name: "Mark Twain",
        img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vZGV8ZW58MHx8fHwxNjg5NTY3NzA0&ixlib=rb-4.0.3&q=80&w=400",
        quote: "The secret of getting ahead is getting started.",
    },

    {
        name: "Oscar Wilde",
        img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vZGV8ZW58MHx8fHwxNjg5NTY3NzA0&ixlib=rb-4.0.3&q=80&w=400",
        quote: "Be yourself; everyone else is already taken.",
    },

    {
        name: "Confucius",
        img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vZGV8ZW58MHx8fHwxNjg5NTY3NzA0&ixlib=rb-4.0.3&q=80&w=400",
        quote: "It does not matter how slowly you go as long as you do not stop.",
    },

    {
        name: "Leonardo da Vinci",
        img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vZGV8ZW58MHx8fHwxNjg5NTY3NzA0&ixlib=rb-4.0.3&q=80&w=400",
        quote: "Learning never exhausts the mind.",
    },

    {
        name: "Mother Teresa",
        img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vZGV8ZW58MHx8fHwxNjg5NTY3NzA0&ixlib=rb-4.0.3&q=80&w=400",
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    },
    {
        name: "Abraham Lincoln",
        img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vZGV8ZW58MHx8fHwxNjg5NTY3NzA0&ixlib=rb-4.0.3&q=80&w=400",
        quote: "In the end, it’s not the years in your life that count. It’s the life in your years.",
    },

]

 let i = 0;

 function changeQuote(){
    if(i >= quotes.length){
        i = 0;
    }
    img[0].src = quotes[i].img;
    quoteName.textContent = quotes[i].quote;
    author.textContent = quotes[i].name;
    i++;

 }

 setInterval( changeQuote, 5000);