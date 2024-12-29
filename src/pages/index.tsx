// pages/index.tsx
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const handleHireMe = () => {
    window.location.href = 'mailto:your-email@example.com';
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Artistic Background */}
      <div style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        overflow: 'hidden',
      }}>
        {/* Gradient Background */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
          opacity: 0.3,
        }} />

        {/* Blob 1 */}
        <svg
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '50%',
            height: '50%',
            transform: 'rotate(-45deg)',
            opacity: 0.4,
          }}
          viewBox="0 0 200 200"
        >
          <path
            fill="#FF6B6B"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.6,42.4C65.8,55.6,55.7,67.5,42.9,75.3C30.1,83.1,15.1,86.8,0.7,85.7C-13.7,84.5,-27.4,78.5,-40.9,70.7C-54.4,62.9,-67.7,53.3,-77.4,40.3C-87.1,27.4,-93.2,11.2,-91.7,-4.3C-90.3,-19.8,-81.3,-34.6,-70.1,-46.4C-58.9,-58.2,-45.5,-67,-32.1,-74.1C-18.7,-81.2,-5.4,-86.6,8.9,-86.1C23.2,-85.6,46.5,-79.2,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Blob 2 */}
        <svg
          style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '60%',
            height: '60%',
            transform: 'rotate(45deg)',
            opacity: 0.4,
          }}
          viewBox="0 0 200 200"
        >
          <path
            fill="#4ECDC4"
            d="M39.3,-64.1C50.9,-56.9,60.2,-46,65.8,-33.5C71.4,-21,73.3,-7,71.9,6.8C70.5,20.6,65.8,34.2,57.6,45.3C49.4,56.4,37.7,65,24.5,69.9C11.3,74.8,-3.4,76,-17.8,73.2C-32.2,70.4,-46.3,63.7,-56.3,52.9C-66.3,42.1,-72.3,27.3,-74.8,11.8C-77.3,-3.7,-76.3,-19.8,-69.8,-32.8C-63.3,-45.8,-51.3,-55.7,-38.5,-62.3C-25.7,-68.9,-12.8,-72.2,0.7,-73.3C14.2,-74.4,28.3,-73.3,39.3,-64.1Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Blob 3 */}
        <svg
          style={{
            position: 'absolute',
            top: '30%',
            right: '20%',
            width: '40%',
            height: '40%',
            transform: 'rotate(120deg)',
            opacity: 0.3,
          }}
          viewBox="0 0 200 200"
        >
          <path
            fill="#FFD93D"
            d="M42.7,-73.4C55.9,-67.3,67.7,-57.1,75.9,-44.3C84.1,-31.5,88.7,-15.7,87.4,-0.8C86.1,14.2,78.8,28.4,70.1,41.3C61.4,54.2,51.2,65.8,38.5,72.5C25.8,79.2,10.7,81,-3.9,77.9C-18.5,74.8,-32.7,66.8,-45.5,57.4C-58.3,48,-69.7,37.2,-77.3,23.4C-84.9,9.6,-88.7,-7.2,-85.9,-22.9C-83.1,-38.6,-73.7,-53.2,-60.5,-59.3C-47.3,-65.4,-30.3,-63,-15.3,-59.7C-0.3,-56.4,12.7,-52.2,26.5,-58.5C40.3,-64.8,54.8,-81.6,42.7,-73.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <main style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          maxWidth: '800px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
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
            <h1 style={{ fontSize: '2.5rem', margin: '0', color: '#4FD1C5' }}>Kompany Dean</h1>
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