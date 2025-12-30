'use client'

import Image from 'next/image'
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
import { QRCodeCanvas } from 'qrcode.react'

export default function Page() {
  const links = [
    { name: 'Website', url: 'https://anas-portfolio-blond-omega.vercel.app/' },
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
              Backend Developer | Java • Node.js
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
          background: 'rgba(255, 255, 255, 0.74)',
          padding: '10px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          zIndex: 1000
        }}
      >
        <p style={{ fontSize: '11px', textAlign: 'center', color: '#000' }}>
          Scan Me
        </p>
        <QRCodeCanvas
          value="http://localhost:3000" // change AFTER Vercel deploy
          size={55}
        />
      </div>

    </main>
  )
}
