const quotes = [
   "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Hard work changes FATE!",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The future depends on what you do today.",
  "Dream big and dare to fail.",
  "Push yourself, because no one else will.",
  "Work in silence, let success make the noise.",
  "Fall seven times, stand up eight.",
  "Your only limit is you."
]

const usedIndexes = new Set()
const quotesEl = document.getElementById("quote");



function generate(){

  if(usedIndexes.size >= quotes.length){
    usedIndexes.clear()
  }

  while (true){
      const randomIndex = Math.round(Math.random() * quotes.length);

      if(usedIndexes.has(randomIndex)) continue

  const quote = quotes[randomIndex]
   quotesEl.innerText = quote;
   usedIndexes.add(randomIndex)
   break;
}
  }
 