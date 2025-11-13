import React, { useState, useEffect } from 'react';

const TextType = ({
  text = [],
  typingSpeed = 100,
  pauseDuration = 2000,
  showCursor = true,
  cursorCharacter = '|',
  className = ''
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = text[currentTextIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentCharIndex < currentText.length) {
          setCurrentCharIndex(prev => prev + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (currentCharIndex > 0) {
          setCurrentCharIndex(prev => prev - 1);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % text.length);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentTextIndex, currentCharIndex, isDeleting, text, typingSpeed, pauseDuration]);

  const displayText = text[currentTextIndex]?.substring(0, currentCharIndex) || '';

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span 
          className="animate-pulse"
          style={{ 
            animation: 'blink 1s infinite',
            display: 'inline-block'
          }}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;