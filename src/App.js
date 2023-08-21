import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quoteData, setQuoteData] = useState({});
  const [style, setStyle] = useState({});
  useEffect(() => {
    getRandomQuote();
  }, []);
  const getColor = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];
    let color = Math.floor(Math.random() * colors.length);
    setStyle({
      color: colors[color],
    });
  };

  async function getRandomQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const quote = await response.json();

    // Output the quote and author name
    setQuoteData({
      text: quote.content,
      author: quote.author,
    });
    getColor();
  }
  return (
    <div className="App" style={{ backgroundColor: style.color }}>
      <section className="wrapper" id="quote-box">
        <div className="wrapper-content">
          <h2 id="text" style={{ color: style.color }}>
            <span>"</span> {quoteData.text}
          </h2>
          <p id="author" style={{ color: style.color }}>
            - {quoteData.author}
          </p>
        </div>
        <div className="wrapper-footer">
          <button
            id="new-quote"
            onClick={getRandomQuote}
            style={{ backgroundColor: style.color }}
          >
            New Quote
          </button>
          <a
            href={
              "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
              quoteData.text
            }
            id="tweet-quote"
            target="_blank"
            style={{ color: style.color }}
          >
            Tweet Quote
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
