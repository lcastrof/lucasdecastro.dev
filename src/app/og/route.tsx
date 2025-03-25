import { ImageResponse } from "next/og";

export const runtime = "edge";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") ?? "home";
    const title = searchParams.get("title");

    const text = title ?? "Lucas de Castro";
    const fontData = await loadGoogleFont("Geist", text);

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#030712",
            background: `
              radial-gradient(circle at 50% 0%, rgba(14,165,233,0.12) 0%, transparent 50%),
              radial-gradient(circle at 50% 100%, rgba(14,165,233,0.12) 0%, transparent 50%)
            `,
            fontFamily: "Geist",
            padding: "60px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(14,165,233,0.05) 0%, transparent 100%)",
              opacity: 0.5,
            }}
          />

          {type !== "home" && (
            <img
              src={`https://lucasdecastro.dev/assets/images/logo.svg`}
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "8px",
                position: "absolute",
                bottom: "40px",
                right: "40px",
              }}
            />
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              maxWidth: "90%",
              position: "relative",
              padding: "32px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(14,165,233,0.03)",
                borderRadius: "16px",
                border: "1px solid rgba(14,165,233,0.1)",
                filter: "blur(1px)",
              }}
            />

            <h1
              style={{
                fontSize: 56,
                color: "#fff",
                margin: 0,
                lineHeight: 1.2,
                wordBreak: "break-word",
                overflowWrap: "break-word",
                maxWidth: "100%",
                textAlign: "center",
                position: "relative",
                letterSpacing: "-0.02em",
                background:
                  "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.8) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {type === "home" ? (
                <img
                  src={`https://lucasdecastro.dev/assets/images/logo.svg`}
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "8px",
                    position: "absolute",
                    top: "-80px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
              ) : (
                title
              )}
            </h1>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: "Geist",
            data: fontData,
            style: "normal",
          },
        ],
        headers: {
          "Cache-Control": "public, max-age=604800, immutable, no-transform",
        },
      }
    );
  } catch (error) {
    console.error("OG Image generation error:", error);
    return new Response(`Failed to generate image: ${error}`, {
      status: 500,
    });
  }
}
