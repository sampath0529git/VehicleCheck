import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'VehicleCheck - Free UK Vehicle Insurance Status Checker';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#102A43',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                backgroundColor: '#F5D547',
                borderRadius: '14px',
                color: '#102A43',
                fontSize: '28px',
                fontWeight: 'bold',
              }}
            >
              ✓
            </div>
            <span
              style={{
                color: '#FFFFFF',
                fontSize: '38px',
                fontWeight: 800,
                letterSpacing: '-0.02em',
              }}
            >
              VehicleCheck
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(245, 213, 71, 0.15)',
              border: '1px solid rgba(245, 213, 71, 0.4)',
              borderRadius: '8px',
              padding: '8px 18px',
              color: '#F5D547',
              fontSize: '18px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            UK Motorist Guide
          </div>
        </div>

        {/* Center Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '1000px',
          }}
        >
          <h1
            style={{
              color: '#FFFFFF',
              fontSize: '60px',
              fontWeight: 900,
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Check If Your Car Is Insured in the UK
          </h1>
          <p
            style={{
              color: '#CBD5E1',
              fontSize: '24px',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Official Motor Insurers’ Bureau (MIB) Checking Guide &amp; Free Registration Format Validator
          </p>
        </div>

        {/* Bottom Bar: Number Plate & Domain */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '28px',
          }}
        >
          {/* UK Yellow Number Plate */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#F5D547',
              borderRadius: '8px',
              border: '3px solid #000',
              padding: '4px 16px',
              gap: '12px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#003399',
                color: '#FFFFFF',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 900,
              }}
            >
              <span style={{ fontSize: '10px' }}>🇬🇧</span>
              <span>UK</span>
            </div>
            <span
              style={{
                color: '#102A43',
                fontSize: '28px',
                fontWeight: 900,
                letterSpacing: '0.15em',
                fontFamily: 'monospace',
              }}
            >
              AB12 CDE
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#94A3B8',
              fontSize: '20px',
              fontWeight: 600,
            }}
          >
            <span>carinsurancecheck.co.uk</span>
            <span>·</span>
            <span style={{ color: '#F5D547' }}>100% Free Public Verification</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
