import { BASE_URL } from '@/utils'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Frame" />
        <meta property="og:image" content={`${BASE_URL}/TITLE.png`} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`${BASE_URL}/TITLE.png`} />
        <meta property="fc:frame:button:1" content="Start Judging" />
        <meta property="fc:frame:post_url" content={`${BASE_URL}/api/post?slide=1`} />
      </Head>
    </>
  )
}
