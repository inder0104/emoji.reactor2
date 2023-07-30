import React, { useState } from "react";
import "./styles.css";

var emojiDctonary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Smiling Face with Open Hands",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face"
};
var emojiDctonary2 = {
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face"
};
var emojiWeKnow = Object.keys(emojiDctonary2);

export default function App() {
  const [Meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var Meaning = emojiDctonary[userInput];
    if (Meaning === undefined) {
      Meaning = "Sorry we donot have this emoji in our database";
    }
    setMeaning(Meaning);
  }

  return (
    <div className="App">
      <h1>
        EMOJI <span> RESPONSER </span> 😊
      </h1>

      <input
        onChange={emojiInputHandler}
        placeholder="Put emoji here if you want know the meaning "
      ></input>
      <h2> Meaning {Meaning} </h2>
      <h3>Emoji we know </h3>
      <header>{emojiWeKnow}</header>
    </div>
  );
}
