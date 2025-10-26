
import React, { useState, useEffect } from "react";

const TypingText = ({ words = ["Hello", "World"], speed = 100, deleteSpeed = 50, pause = 1000 }) => { 
  const [displayed, setDisplayed] = useState(""); 
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && displayed.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
      }, speed);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length - 1));
      }, deleteSpeed);
    } else if (!isDeleting && displayed.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, pause / 2);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  return <span>{displayed}</span>;
};

export default TypingText;
