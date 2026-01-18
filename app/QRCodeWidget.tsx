'use client'
import { QRCodeCanvas } from 'qrcode.react'

export default function QRCodeWidget() {
  return (
    <div className="fixed bottom-6 right-6 bg-white p-3 rounded-xl shadow-lg z-50">
      <p className="text-xs text-center mb-1 text-black">Scan Me</p>
      <QRCodeCanvas
        value="https://your-vercel-link.vercel.app"
        size={20}
        bgColor="#ffffff55"
        fgColor="#000000" 
      />s
    </div>
  )
}
