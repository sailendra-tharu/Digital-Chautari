import { ImageResponse } from "next/og";

export const alt = "Digital Chautari — Ideas to Impact";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#101826",
          background: "linear-gradient(135deg, #effaf3 0%, #ffffff 55%, #eaf7f4 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#008f83", fontSize: 30, fontWeight: 700 }}>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 58, height: 58, borderRadius: 16, color: "white", background: "#00a894" }}>DC</span>
          <span>Digital Chautari</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 68, lineHeight: 1.08, fontWeight: 800, letterSpacing: -3 }}>Ideas <span style={{ color: "#00a894" }}>→</span> Impact</div>
          <div style={{ fontSize: 28, color: "#58677d" }}>Thoughtful marketing, content, and technology from Kathmandu to the world.</div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#008f83" }}>digitalchautari.com</div>
      </div>
    ),
    size,
  );
}
