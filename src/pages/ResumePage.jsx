const ResumePage = () => {
  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <embed
        src="https://vinayhc.vercel.app/vinayhc.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default ResumePage;