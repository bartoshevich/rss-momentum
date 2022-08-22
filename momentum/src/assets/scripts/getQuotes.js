
const citation = document.querySelector('.citation');

let quote = document.createElement('div');
citation.append(quote);
quote.classList.add('quote');

let authorBlock = document.createElement('div');
citation.append(authorBlock);
authorBlock.classList.add('author__block');

let author = document.createElement('span');
authorBlock.append(author);
author.classList.add('author');




export async function getQuotes() {
  let quotes;

  if (localStorage.getItem('lang') === 'by') {
    quotes = './quotesBy.json';
  } else {
    quotes = './qoutes.json';
  }

  const res = await fetch(quotes);
  const data = await res.json();



  let randomN = Math.floor(Math.random() * data.length);

  // console.log(data.length)



  function showQuote() {

    quote.textContent = data[randomN].text;
    author.textContent = data[randomN].author;
  }
  showQuote();

  const changeQuoteButton = document.querySelector('.change-quote');
  changeQuoteButton.addEventListener('click', changeQuote);

  function changeQuote() {
    if (randomN < data.length - 1) {
      randomN = randomN + 1;

    } else {
      randomN = 0;
    }
    // console.log('num quote -' + randomN);
    showQuote();
  }

}

getQuotes();


