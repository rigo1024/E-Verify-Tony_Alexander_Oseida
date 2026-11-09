import React from 'react';

export default function App() {
  const studentName = 'TONY ALEXANDER OSEIDA';
  const cardNumber = '26-0113605';
  const trainingHours = '30 HR.';
  const trainingTitle = 'Construction Safety and Health';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif', padding: '20px', boxSizing: 'border-box' }}>
      {/* Main Verification Page Content with bulletproof inline styles */}
      <div style={{ maxWidth: '700px', width: '100%', textAlign: 'center', margin: 'auto' }}>
        {/* Green Checkmark Circle */}
        <div style={{ width: '110px', height: '110px', borderRadius: '50%', background: 'linear-gradient(to bottom, #8be333, #59b313)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 30px rgba(89, 179, 19, 0.35)', margin: '0 auto 24px auto' }}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        {/* VALID STUDENT CARD */}
        <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#111111', textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '-0.5px' }}>
          VALID STUDENT CARD
        </h1>

        {/* NAME: */}
        <div style={{ fontSize: '15px', fontWeight: 700, color: '#111111', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.5px' }}>
          NAME:
        </div>

        {/* Student Name Value */}
        <div style={{ fontSize: '30px', fontWeight: 900, color: '#111111', textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '0.5px' }}>
          {studentName}
        </div>

        {/* CARD NUMBER: */}
        <div style={{ fontSize: '15px', fontWeight: 700, color: '#111111', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.5px' }}>
          CARD NUMBER:
        </div>

        {/* Card Number Value */}
        <div style={{ fontSize: '24px', fontWeight: 900, color: '#111111', fontFamily: 'monospace', marginBottom: '20px', letterSpacing: '1px' }}>
          {cardNumber}
        </div>

        {/* Training Hours */}
        <div style={{ fontSize: '24px', fontWeight: 900, color: '#111111', marginBottom: '16px' }}>
          {trainingHours}
        </div>

        {/* Training Title */}
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#111111', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.3' }}>
          {trainingTitle}
        </div>

        {/* Footer Logo using exact uploaded user logo asset */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="/assets/aistudio/image_8ab39f4c.png"
            alt="Outreach Portal Logo"
            style={{ height: '52px', width: 'auto', objectFit: 'contain', userSelect: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}
