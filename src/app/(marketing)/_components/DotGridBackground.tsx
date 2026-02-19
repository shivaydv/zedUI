"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function DotMatrixCanvas({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const isDark = resolvedTheme === "dark";

        function draw() {
            if (!canvas || !ctx) return;
            // Handle high DPI
            const w = canvas.width / window.devicePixelRatio;
            const h = canvas.height / window.devicePixelRatio;

            ctx.clearRect(0, 0, w, h);

            const spacing = 14;
            const cols = Math.ceil(w / spacing);
            const rows = Math.ceil(h / spacing);

            const dotBase = isDark ? "255, 255, 255" : "0, 0, 0";

            for (let i = 0; i < Math.ceil(canvas.width / 14); i++) {
                for (let j = 0; j < Math.ceil(canvas.height / 14); j++) {
                    const x = i * 14;
                    const y = j * 14;

                    // Pseudo-random
                    const hash = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
                    const randomVal = hash - Math.floor(hash);

                    // Vignette
                    const normalizedX = x / (canvas.width / window.devicePixelRatio);
                    const normalizedY = y / (canvas.height / window.devicePixelRatio);

                    const dist = Math.sqrt(
                        Math.pow(normalizedX - 0.5, 2) + Math.pow(normalizedY - 0.5, 2)
                    );

                    let opacity = (randomVal * 0.5 + 0.5) * (1 - dist * 1.5);
                    opacity = Math.max(0, opacity);

                    if (opacity > 0.05) {
                        ctx.beginPath();
                        ctx.rect(x, y, 1.5, 1.5);
                        ctx.fillStyle = `rgba(${dotBase}, ${opacity * (isDark ? 0.3 : 0.15)})`;
                        ctx.fill();
                    }
                }
            }
        }

        function resize() {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            if (ctx) ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            draw();
        }

        resize();
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, [resolvedTheme]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{ width: "100%", height: "100%" }}
        />
    );
}
