import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

function clip(value: string, max: number) {
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}

export function ogImage({
  eyebrow,
  title,
  kicker = "Visit → Referral → Subscription → Revenue",
}: {
  eyebrow: string;
  title: string;
  kicker?: string;
}) {
  const clippedTitle = clip(title, 90);
  const clippedKicker = clip(kicker, 140);
  const titleSize = clippedTitle.length > 64 ? 44 : clippedTitle.length > 42 ? 52 : 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f1e8",
          color: "#12141a",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 6,
            color: "#c45c26",
            fontWeight: 600,
          }}
        >
          <div>SYCLOPS</div>
          <div style={{ letterSpacing: 3, fontSize: 18, color: "#5c574e" }}>
            {clip(eyebrow, 28).toUpperCase()}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <div
            style={{
              fontSize: titleSize,
              fontWeight: 600,
              lineHeight: 1.08,
            }}
          >
            {clippedTitle}
          </div>
          <div style={{ fontSize: 26, marginTop: 28, color: "#5c574e", lineHeight: 1.35 }}>
            {clippedKicker}
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
