'use client'

import Image from 'next/image'
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'

export default function Page() {
  const links = [
    { name: 'Portfolio', url: 'https://anas-portfolio-blond-omega.vercel.app/' },
    { name: 'Instagram', url: 'https://instagram.com/Anassiddiqui778', icon: <FaInstagram /> },
    { name: 'WhatsApp', url: 'https://wa.me/918299734739', icon: <FaWhatsapp /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anas-siddiqui-a36932266/', icon: <FaLinkedin /> },
    { name: 'GitHub', url: 'https://github.com/Anas-Siddiqui78', icon: <FaGithub /> },
  ]

  return (
    <main className="linktree-bg">
      <section className="linktree-container">
        <div className="linktree-card">

          {/* Profile */}
          <div className="profile">
            <Image
              src="/profile.jpg"
              alt="Anas Siddiqui"
              width={96}
              height={96}
              priority
              className="profile-img"
            />
            <h1 className="profile-name">Anas Siddiqui</h1>
            <p className="profile-title">Backend Developer</p>
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

          {/* Footer (Linktree-like bottom info) */}
          <div className="footer">
            <p>Cookie Preferences • Privacy • Report</p>
            <p className="brand">AnasLinks</p>
          </div>

        </div>
      </section>
    </main>
  )
}
