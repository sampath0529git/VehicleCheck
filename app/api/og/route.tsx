import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Check If Car Is Insured UK';
    const subtitle =
      searchParams.get('desc') ||
      'Official Motor Insurers’ Bureau (MIB) Checking Guide & Registration Validator';
    const tag = searchParams.get('tag') || 'UK Vehicle Information Service';

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
          {/* Top Brand Bar */}
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
              {/* Brand Icon Shield */}
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
                  fontSize: '36px',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                }}
              >
                VehicleCheck
              </span>
            </div>

            {/* Tag Badge */}
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
              {tag}
            </div>
          </div>

          {/* Middle: Title & Description */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '1000px',
            }}
          >
            <h1
              style={{
                color: '#FFFFFF',
                fontSize: title.length > 40 ? '52px' : '62px',
                fontWeight: 900,
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                color: '#CBD5E1',
                fontSize: '24px',
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Bottom Bar: Number Plate Graphic & Domain */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              paddingTop: '30px',
            }}
          >
            {/* UK Plate Graphic */}
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
                  fontSize: '26px',
                  fontWeight: 900,
                  letterSpacing: '0.15em',
                  fontFamily: 'monospace',
                }}
              >
                CHECK VRN
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#94A3B8',
                fontSize: '20px',
                fontWeight: 600,
              }}
            >
              <span>carinsurancecheck.co.uk</span>
              <span>·</span>
              <span style={{ color: '#F5D547' }}>Free Official MIB Direct</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image: ${e.message}`, {
      status: 500,
    });
  }
}
