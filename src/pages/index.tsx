// pages/index.tsx
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const handleHireMe = () => {
    window.location.href = 'mailto:iamblessedshammah@gmail.com';
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          maxWidth: '800px',
          width: '100%'
        }}>
          <div style={{ position: 'relative' }}>
            {/* Curved background pattern */}
            <svg
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                zIndex: -1
              }}
              viewBox="0 0 200 200"
            >
              <path
                fill="#4FD1C5"
                d="M45.3,-59.1C58.9,-52.8,70.3,-39.4,75.2,-23.7C80.1,-8,78.5,10.1,71.3,25.1C64.1,40.1,51.3,52.1,36.8,58.7C22.3,65.4,6.2,66.7,-10.2,64.9C-26.6,63,-43.3,58,-54.4,46.6C-65.5,35.2,-71,17.6,-70.8,0.1C-70.6,-17.3,-64.7,-34.6,-53.3,-41.1C-41.9,-47.6,-25,-43.3,-10.1,-41.9C4.8,-40.5,31.7,-65.4,45.3,-59.1Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Profile image container */}
            <div style={{
              position: 'relative',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              overflow: 'hidden'
            }}>
              <Image
                src="/photo.png" // Replace with your image path
                alt="Profile"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div>
            <h1 style={{ fontSize: '2.5rem', margin: '0' }}>I&apos;m</h1>
            <h1 style={{ fontSize: '2.5rem', margin: '0', color: '#4FD1C5' }}>Blessed Shammah</h1>
            <p style={{ color: '#666', margin: '10px 0' }}>
            I&apos;m a Web Developer, App Developer, UX/UI Designer and Video Editor.
            </p>
            <button 
              onClick={handleHireMe}
              style={{
                background: 'linear-gradient(to right, #FFDAB9, #FFF)',
                border: '2px solid #4FD1C5',
                color: '#4FD1C5',
                padding: '10px 25px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(79, 209, 197, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Hire Me
            </button>
          </div>
        </div>
      </main>
    </>
  )
}