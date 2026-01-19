'use client'

import Image from 'next/image'
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
import { QRCodeCanvas } from 'qrcode.react'

export default function Page() {
  const links = [
    { name: 'Website', url: 'https://anas-siddiqui-website.netlify.app/' },
    { name: 'Instagram', url: 'https://instagram.com/Anassiddiqui778', icon: <FaInstagram /> },
    { name: 'WhatsApp', url: 'https://wa.me/918299734739', icon: <FaWhatsapp /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anas-siddiqui-a36932266/', icon: <FaLinkedin /> },
    { name: 'GitHub', url: 'https://github.com/Anas-Siddiqui78', icon: <FaGithub /> },
  ]

  return (
    <main className="linktree-bg">
      <section className="linktree-container">
        <div className="linktree-card">

          {/* Floating Bubbles (3D effect) */}
          <div className="bubbles">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
          </div>

          {/* Profile Section */}
          <div className="profile">
            <div className="profile-img-container" style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/Profile.jpg" // Fixed: Matches your exact filename in the 'public' folder
                alt="Anas Siddiqui"
                width={130}
                height={130}
                priority
                className="profile-img"
              />
            </div>
            <h1 className="profile-name">Anas Siddiqui</h1>
            <p className="profile-title">
              Backend Developer | Java • Python
            </p>
          </div>

          {/* Links Section */}
          <div className="links">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn"
              >
                {link.icon && <span className="icon">{link.icon}</span>}
                {link.name}
              </a>
            ))}
          </div>

          {/* Footer Section */}
          <div className="footer">
            <p>Cookie Preferences • Privacy • Report</p>
            <p className="brand">AnasLinks</p>
          </div>

        </div>
      </section>

      {/* QR Code - Bottom Right */}
      <div
        className="qr-container"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#ffffff',
          padding: '12px',
          borderRadius: '16px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
          Scan Me
        </p>
        <QRCodeCanvas
          value="https://my-website-ochre-six-66.vercel.app" // Updated to your actual Vercel URL
          size={120}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
          includeMargin={false}
        />
      </div>

    </main>
  )
}
