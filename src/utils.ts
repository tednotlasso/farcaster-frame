export const BASE_URL = process.env.BASE_URL

// generate an html page with the relevant opengraph tags
export function generateFarcasterFrame(image: string, slide: number) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${image}" />
      <meta property="fc:frame:post_url" content="${BASE_URL}/api/post?slide=${slide}" />
      <meta property="fc:frame:button:1" content="${slide > 10 ? "" : slide === 10 ? "Yes" : "Zoomer"}" />
      <meta property="fc:frame:button:2" content="${slide > 10 ? "" : slide === 10 ? "No" : "Boomer"}" />

    </head>
    <body>
      
    </body>
    </html>
  `
}
