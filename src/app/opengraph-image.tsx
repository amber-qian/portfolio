
import { ImageResponse } from "next/og";

export const alt = "Amber Qian - Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          backgroundColor: "#ffffff",
          color: "#172b4d",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#2563eb",
            marginBottom: 35,
          }}
        >
          AQ. / PORTFOLIO
        </div>

        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            letterSpacing: -3,
          }}
        >
          Amber Qian
        </div>

        <div
          style={{
            fontSize: 36,
            marginTop: 20,
            color: "#475569",
          }}
        >
          Full Stack Software Developer
        </div>

        <div
          style={{
            fontSize: 24,
            marginTop: 30,
            color: "#64748b",
          }}
        >
          C# · .NET · Python · SQL · Web Applications
        </div>
      </div>
    ),
    size
  );
}
