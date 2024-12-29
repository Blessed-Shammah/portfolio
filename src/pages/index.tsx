// pages/index.tsx
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleHireMe = () => {
    window.location.href = 'mailto:iamblessedshammah@gmail.com';
  };

  return (
    <>
      <Head>
        <title>Portfolio - Kompany Dean</title>
        <meta name="description" content="Personal portfolio of Kompany Dean" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
          opacity: 0.3,
        }} />

        {[1, 2, 3].map((_, index) => (
          <svg
            key={index}
            style={{
              position: 'absolute',
              ...getBlobStyles(index, isMobile),
              animation: 'float 20s ease-in-out infinite',
              animationDelay: `${index * 2}s`,
            }}
            viewBox="0 0 200 200"
          >
            <path
              fill={getBlobColor(index)}
              d={getBlobPath(index)}
              transform="translate(100 100)"
            />
          </svg>
        ))}
      </div>

      <main style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '20px 10px' : '20px',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: isMobile ? '30px' : '40px',
          maxWidth: '800px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          padding: isMobile ? '20px' : '40px',
          borderRadius: '24px',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        }}>
          <div style={{ 
            position: 'relative',
            width: isMobile ? '220px' : '280px',
            flexShrink: 0,
          }}>
            <svg
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: -1,
                animation: 'rotate 20s linear infinite',
              }}
              viewBox="0 0 200 200"
            >
              <path
                fill="#4FD1C5"
                d="M45.3,-59.1C58.9,-52.8,70.3,-39.4,75.2,-23.7C80.1,-8,78.5,10.1,71.3,25.1C64.1,40.1,51.3,52.1,36.8,58.7C22.3,65.4,6.2,66.7,-10.2,64.9C-26.6,63,-43.3,58,-54.4,46.6C-65.5,35.2,-71,17.6,-70.8,0.1C-70.6,-17.3,-64.7,-34.6,-53.3,-41.1C-41.9,-47.6,-25,-43.3,-10.1,-41.9C4.8,-40.5,31.7,-65.4,45.3,-59.1Z"
                transform="translate(100 100)"
              />
            </svg>

            <div style={{
              position: 'relative',
              width: isMobile ? '220px' : '280px',
              height: isMobile ? '220px' : '280px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            }}>
              <Image
                src="/photo.png"
                alt="Profile"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>

          <div style={{
            textAlign: isMobile ? 'center' : 'left',
          }}>
            <h1 style={{ 
              fontSize: isMobile ? '2rem' : '2.5rem',
              margin: '0',
              fontWeight: '500',
            }}>
              I&apos;m
            </h1>
            <h1 style={{ 
              fontSize: isMobile ? '2rem' : '2.5rem',
              margin: '0',
              color: '#4FD1C5',
              fontWeight: '700',
            }}>
              Kompany Dean
            </h1>
            <p style={{ 
              color: '#666',
              margin: '15px 0',
              fontSize: isMobile ? '0.9rem' : '1rem',
              lineHeight: '1.6',
            }}>
              I&apos;m a Web Developer, App Developer, UX/UI Designer and Video Editor.
            </p>
            <button 
              onClick={handleHireMe}
              style={{
                background: 'linear-gradient(to right, #FFDAB9, #FFF)',
                border: '2px solid #4FD1C5',
                color: '#4FD1C5',
                padding: isMobile ? '8px 20px' : '12px 28px',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                marginTop: '10px',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(79, 209, 197, 0.3)';
                e.currentTarget.style.background = 'linear-gradient(to right, #4FD1C5, #4FD1C5)';
                e.currentTarget.style.color = '#FFF';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'linear-gradient(to right, #FFDAB9, #FFF)';
                e.currentTarget.style.color = '#4FD1C5';
              }}
            >
              Hire Me
            </button>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, 15px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}

// Helper functions
function getBlobStyles(index: number, isMobile: boolean) {
  const styles = [
    {
      top: isMobile ? '-15%' : '-20%',
      left: isMobile ? '-20%' : '-10%',
      width: isMobile ? '70%' : '50%',
      height: isMobile ? '70%' : '50%',
      transform: 'rotate(-45deg)',
      opacity: 0.4,
    },
    {
      bottom: isMobile ? '-15%' : '-20%',
      right: isMobile ? '-20%' : '-10%',
      width: isMobile ? '80%' : '60%',
      height: isMobile ? '80%' : '60%',
      transform: 'rotate(45deg)',
      opacity: 0.4,
    },
    {
      top: isMobile ? '40%' : '30%',
      right: isMobile ? '10%' : '20%',
      width: isMobile ? '60%' : '40%',
      height: isMobile ? '60%' : '40%',
      transform: 'rotate(120deg)',
      opacity: 0.3,
    },
  ];
  return styles[index];
}

function getBlobColor(index: number) {
  return ['#FF6B6B', '#4ECDC4', '#FFD93D'][index];
}

function getBlobPath(index: number) {
  const paths = [
    "M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.6,42.4C65.8,55.6,55.7,67.5,42.9,75.3C30.1,83.1,15.1,86.8,0.7,85.7C-13.7,84.5,-27.4,78.5,-40.9,70.7C-54.4,62.9,-67.7,53.3,-77.4,40.3C-87.1,27.4,-93.2,11.2,-91.7,-4.3C-90.3,-19.8,-81.3,-34.6,-70.1,-46.4C-58.9,-58.2,-45.5,-67,-32.1,-74.1C-18.7,-81.2,-5.4,-86.6,8.9,-86.1C23.2,-85.6,46.5,-79.2,44.7,-76.4Z",
    "M39.3,-64.1C50.9,-56.9,60.2,-46,65.8,-33.5C71.4,-21,73.3,-7,71.9,6.8C70.5,20.6,65.8,34.2,57.6,45.3C49.4,56.4,37.7,65,24.5,69.9C11.3,74.8,-3.4,76,-17.8,73.2C-32.2,70.4,-46.3,63.7,-56.3,52.9C-66.3,42.1,-72.3,27.3,-74.8,11.8C-77.3,-3.7,-76.3,-19.8,-69.8,-32.8C-63.3,-45.8,-51.3,-55.7,-38.5,-62.3C-25.7,-68.9,-12.8,-72.2,0.7,-73.3C14.2,-74.4,28.3,-73.3,39.3,-64.1Z",
    "M42.7,-73.4C55.9,-67.3,67.7,-57.1,75.9,-44.3C84.1,-31.5,88.7,-15.7,87.4,-0.8C86.1,14.2,78.8,28.4,70.1,41.3C61.4,54.2,51.2,65.8,38.5,72.5C25.8,79.2,10.7,81,-3.9,77.9C-18.5,74.8,-32.7,66.8,-45.5,57.4C-58.3,48,-69.7,37.2,-77.3,23.4C-84.9,9.6,-88.7,-7.2,-85.9,-22.9C-83.1,-38.6,-73.7,-53.2,-60.5,-59.3C-47.3,-65.4,-30.3,-63,-15.3,-59.7C-0.3,-56.4,12.7,-52.2,26.5,-58.5C40.3,-64.8,54.8,-81.6,42.7,-73.4Z",
  ];
  return paths[index];
}