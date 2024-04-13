import React from 'react';

const Loading = ({ duration = 2 }) => {
  return (
    <>
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.8)'
      }}>
          <div style={{
              padding: '20px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
          }}>
              <div style={{
                  width: '50px',
                  height: '50px',
                  border: '5px solid #f3f3f3',
                  borderTop: '5px solid #3498db',
                  borderRadius: '50%',
                  animation: `spin ${duration}s linear infinite`
              }}></div>
          </div>
      </div>
    </>
  );
};

export default Loading;
