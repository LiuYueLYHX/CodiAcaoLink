import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./Start.css";

export default function Start() {
  const navigate = useNavigate();

  const [sessionId] = useState(() =>
    Math.random().toString(36).substring(2)
  );

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/check-scan?sessionId=${sessionId}`
        );
        const data = await res.json();

        if (data.scanned) {
          clearInterval(interval);
          navigate("/home");
        }
      } catch (err) {
        console.error("Backend server not reached:", err);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [sessionId, navigate]);

  return (
    <div className="start-container">
      <div className="background-image"></div>
      <div className="background-overlay"></div>
      
      <div className="content-wrapper">
        <div className="qr-card">
          <h1 className="start-title">扫码进入</h1>
          <p className="start-subtitle">开启你的冒险之旅</p>
          
          <div className="qr-wrapper">
            <QRCodeSVG
              value={`http://localhost:3001/scan?sessionId=${sessionId}`}
              size={220}
              level="H"
              includeMargin={false}
            />
          </div>

          <p className="start-subtitle">
            <span className="loading-dots">等待扫码中</span>
          </p>
        </div>
      </div>
    </div>
  );
}