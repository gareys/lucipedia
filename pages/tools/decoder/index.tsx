'use client'
import { useState } from "react";
import Legend from "./Legend";

export default function Encoder() {
  const [revealedText, setRevealedText] = useState("");
  const [revealTitle, setRevealTitle] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRevealedText(e.target.value);
  }

  function handleLetterClick(letter: string) {
    setRevealedText((prev) => `${prev}${letter}`);
  }

  function handleClear() {
    setRevealedText('');
  }

  function handleTitleClick() {
    setRevealTitle((prev) => !prev);
  }

  return (
    <div id="page-container-centered">
      <div id="decoder-container">
        <h1 onClick={handleTitleClick} id={revealTitle ? "reveal-title" : ""}>
          Luci Decoder
        </h1>
        <h2>Type text or press symbols to decode a message from luci</h2>
        <div id="legend">
          <Legend handleLetterClick={handleLetterClick} />
        </div>
        <div id="decoder-wrapper">
          <input
            id="decoder"
            autoFocus
            type="text"
            onChange={handleChange}
            value={revealedText}
          />
          {!!revealedText.length && <button onClick={handleClear} id="clear">✕</button>}
        </div>
        {!!revealedText.length && <div id="reveal">{revealedText}</div>}
      </div>
    </div>
  );
}
