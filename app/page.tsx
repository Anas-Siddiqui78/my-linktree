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

          {/* Profile */}
          <div className="profile">
            <Image
              src="/profile.jpg"
              alt="Anas Siddiqui"
              width={130}
              height={130}
              priority
              className="profile-img"
            />
            <h1 className="profile-name">Anas Siddiqui</h1>
            <p className="profile-title">
              Backend Developer | Java • Python
            </p>
          </div>

          {/* Links */}
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

          {/* Footer */}
          <div className="footer">
            <p>Cookie Preferences • Privacy • Report</p>
            <p className="brand">AnasLinks</p>
          </div>

        </div>
      </section>

      {/* QR Code - Bottom Right */}
      <div
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          background: '#ffffff', // solid white for scanning
          padding: '10px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <p style={{ fontSize: '11px', textAlign: 'center', color: '#000', marginBottom: '5px' }}>
          Scan Me
        </p>
        <QRCodeCanvas
          value="https://my-linktreeee.netlify.app/" // live deployed URL
          size={150} // bigger for easier scanning
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
          includeMargin={true}
        />
      </div>

    </main>
  )
}
