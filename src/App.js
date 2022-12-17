import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("");
  var emojiMeanings = {
    "😀": "Grining face",
    "😉": "Winking face",
    "😠": "Angry face",
    "😗": "Kissing face",
    "🤑": "Money mouth face",
    "😐": "Neutral face",
    "❤️": "Love",
    "💀": "Skull",
    "👽": "Alien",
    "🤖": "Robot",
    "👌": "Ok hand",
    "🙏": "Folded hands"
  };
  var emojisWeKnow = Object.keys(emojiMeanings);

  function emojiHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiMeanings[userInput];
    if (meaning === undefined) {
      meaning = "This is not in our dictionary";
    }
    setMeaning(meaning);
    console.log(meaning);
    //setUserInput(event.target.value);
  }

  function emojiClickHndler(emojis) {
    var meaning = emojiMeanings[emojis];
    setMeaning(meaning);
    console.log(emojis);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiHandler} />
      <h2> {meaning} </h2>
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emojis) {
        return (
          <span
            onClick={() => emojiClickHndler(emojis)}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
            key={emojis}
          >
            {emojis}{" "}
          </span>
        );
      })}
    </div>
  );
}
