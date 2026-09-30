import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function BlastText({ text, fontSize = 90, color = "#ff5722", onDone }) {
  const canvasRef = useRef(null);
  const [showCanvas, setShowCanvas] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    ctx.font = `italic 700 ${fontSize}px Arial`;
    const width = Math.ceil(ctx.measureText(text).width) + 30;
    const height = fontSize * 1.3;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(dpr, dpr);
    ctx.font = `italic 700 ${fontSize}px Arial`;
    ctx.fillStyle = color;
    ctx.textBaseline = "middle";
    ctx.fillText(text, 5, height / 2);

    const imageData = ctx.getImageData(0, 0, width, height);
    const targets = [];
    const gap = 3;
    for (let y = 0; y < height; y += gap) {
      for (let x = 0; x < width; x += gap) {
        const alpha = imageData.data[(y * width + x) * 4 + 3];
        if (alpha > 128) targets.push({ x, y });
      }
    }
    ctx.clearRect(0, 0, width, height);

    const particles = targets.map((t) => ({
      x: Math.random() * width,
      y: Math.random() * height - 150,
      tx: t.x,
      ty: t.y,
      size: Math.random() * 1.4 + 0.8,
    }));

    let frame = 0;
    const duration = 80;
    function animate() {
      frame++;
      ctx.clearRect(0, 0, width, height);
      const t = Math.min(frame / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);

      particles.forEach((p) => {
        const cx = p.x + (p.tx - p.x) * eased;
        const cy = p.y + (p.ty - p.y) * eased;
        ctx.beginPath();
        ctx.globalAlpha = 0.4 + eased * 0.6;
        ctx.fillStyle = color;
        ctx.arc(cx, cy, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (frame < duration) {
        requestAnimationFrame(animate);
      } else {
        gsap.to(canvas, {
          opacity: 0,
          duration: 0.35,
          delay: 0.15,
          onComplete: () => {
            setShowCanvas(false);
            onDone && onDone();
          },
        });
      }
    }
    requestAnimationFrame(animate);
  }, [text, fontSize, color]);

  return (
    <span className="relative inline-block align-baseline" style={{ height: fontSize * 1.1 }}>
      {showCanvas && (
        <canvas ref={canvasRef} className="absolute left-0 top-0 pointer-events-none" />
      )}
      <span
        id="blast-target-text"
        className="italic font-bold"
        style={{ color, opacity: showCanvas ? 0 : 1 }}
      >
        {text}
      </span>
    </span>
  );
}