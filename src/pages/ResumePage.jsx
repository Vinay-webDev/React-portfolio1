import React from 'react';
import myResume from '/myResumeDecember.pdf';

const ResumePage = () => {
  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <embed
        src={myResume}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default ResumePage;
