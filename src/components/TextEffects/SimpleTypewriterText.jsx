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
        typeSpeed={100}
        deleteSpeed={70}
        delaySpeed={2000}
      />
    </span>
  );
};

export default SimpleTypewriterText;