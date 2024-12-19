const ResumePage = () => {
  const baseUrl = window.location.origin;
  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <embed
        src={`${baseUrl}/vinayhc.pdf`}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default ResumePage;