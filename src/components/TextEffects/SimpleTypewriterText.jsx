import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const SimpleTypewriterText = ({ words }) => {
  return (
    <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
      <Typewriter
        words={words}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
};

export default SimpleTypewriterText;