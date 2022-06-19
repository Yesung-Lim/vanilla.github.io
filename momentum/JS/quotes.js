const quotes = [
    {
        quote: "The worst sin - perhaps the only sin - passion can commit, is to be joyless.",
        author: "Dorothy L. Sayers",
    },
    {
        quote: "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.",
        author: "William Ellery Channing",
    },
    {
        quote: "I had learnt to seek intensity more of life, a concentrated sense of life.",
        author: "Nina Berberova",
    },
    {
        quote: "Lord, grant that I may always desire more than I accomplish.",
        author: "Michelangelo",
    },
    {
        quote: "Every time you state what you want or believe, you're the first to hear it. It's a message to both you and others about what you think is possible. Don't put a ceiling on yourself.",
        author: "Oprah Winfrey",
    },
    {
        quote: "Risk! Risk anything! Care no more for the opinions of others, for those voices. Do the hardest thing on earth for you. Act for yourself. Face the truth.",
        author: "Katherine Mansfield",
    },
    {
        quote: "The secret of getting ahead is getting started. The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks, and then starting on the first one.",
        author: "Mark Twain",
    },
    {
        quote: "Despair is a narcotic. It lulls the mind into indifference.",
        author: "Charlie Chaplin",
    },
    {
        quote: "The only greatness for man is immortality.",
        author: "James Dean",
    },
    {
        quote: "Avoiding danger is no safer in the long run than outright exposure. The fearful are caught as often as the bold.",
        author: "Helen Keller",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = `-${randomQuote.author}-`;