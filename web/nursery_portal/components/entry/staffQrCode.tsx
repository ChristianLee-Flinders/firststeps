'use client'

import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

function StaffQrCode() {
    const [qrCode, setQrCode] = useState('');
    const [qrProgress, setQrProgress] = useState(100);
    
    // Create dynamic QR code that refreshes every 60 seconds
    useEffect(() => {
        const generateQR = () => {
        const code = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0');
        setQrCode(code);
        setQrProgress(100);
        };
        generateQR();
        const interval = setInterval(generateQR, 60000);
        return () => clearInterval(interval);
    }, []);

    // Handle progress bar countdown
    useEffect(() => {
    const progressInterval = setInterval(() => {
      setQrProgress((prev) => {
        const newProgress = prev - (100 / 60);
        return newProgress < 0 ? 0 : newProgress;
      });
    }, 1000);
    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="flex flex-col items-center">
        <div className="bg-white rounded-2xl p-4 border-4 border-slate-200">
        <QRCodeSVG 
            value={qrCode}
            size={60}
            level="H"
        />
        </div>
        <div className="w-full mt-4">
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-1000 ease-linear"
            style={{ width: `${qrProgress}%` }}
            />
        </div>
        <p className="text-xs text-slate-500 text-center mt-2">Code refreshes in {Math.ceil(qrProgress * 0.6)}s</p>
        </div>
    </div>
  )
}

export default StaffQrCode