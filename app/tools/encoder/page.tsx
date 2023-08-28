'use client'
import { useState } from "react";
import "./styles.css";

export default function Encoder() {
  const [encodedText, setEncodedText] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncodedText(e.target.value);
  }

  function handleClear() {
    setEncodedText('');
  }

  return (
    <div id="encoder-wrapper">
      <input id="encoder" type="text" autoFocus value={encodedText} onChange={handleChange} placeholder="Start typing" />
    </div>
  )
}