//random quote on homepage
const quote = "You will never find time for anything. If you want time, you must make it./Don’t watch the clock; do what it does. Keep going./The only way to do great work is to love what you do./The most effective way to do it is to do it./Believe you can and you're halfway there.";
const quotesArr = quote.split('/');

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesArr.length);
    const randomQuote = quotesArr[randomIndex];

    const quotesDiv = document.querySelector('.quotes');
    if (quotesDiv) {
        quotesDiv.textContent = randomQuote;
    }
}

window.addEventListener('load', function() {
    if (window.location.pathname.includes('home.html')) {
        displayRandomQuote();
        displayTodayTasks();
        displayUpcomingEvents();
    } 
});
