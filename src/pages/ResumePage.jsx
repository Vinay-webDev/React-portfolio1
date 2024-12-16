import React from 'react';
import myResume from '../assets/resume/myResumeDecember.pdf';

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
      <a
        href={myResume}
        download="Vinay_HC_Resume.pdf"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumePage;
