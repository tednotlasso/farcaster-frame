import type { NextApiRequest, NextApiResponse } from 'next'

import { BASE_URL, generateFarcasterFrame } from '@/utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  const signedMessage = req.body as {
    untrustedData: {
      fid: number
      url: string
      messageHash: string
      timestamp: number
      network: number
      buttonIndex: number
      castId: { fid: number; hash: string }
    }
    trustedData: {
      messageBytes: string
    }
  }

  const slide = Number(req.query.slide)

  let html: string = ''

  if (slide === 1) {
    html = generateFarcasterFrame(`${BASE_URL}/ZACH.png`, slide+1)
  } else if (slide === 2) {
    html = generateFarcasterFrame(`${BASE_URL}/V.png`, slide+1)
  }
  else if (slide === 3) {
    html = generateFarcasterFrame(`${BASE_URL}/CASSIE.png`, slide+1)
  }
  else if (slide === 4) {
    html = generateFarcasterFrame(`${BASE_URL}/GREG.png`, slide+1)
  }
  else if (slide === 5) {
    html = generateFarcasterFrame(`${BASE_URL}/HORSEFACTS.png`, slide+1)
  }
  else if (slide === 6) {
    html = generateFarcasterFrame(`${BASE_URL}/PUGSON.png`, slide+1)
  }
  else if (slide === 7) {
    html = generateFarcasterFrame(`${BASE_URL}/TED.png`, slide+1)
  }
  else if (slide === 8) {
    html = generateFarcasterFrame(`${BASE_URL}/DWR.png`, slide+1)
  }
  else if (slide === 9) {
    html = generateFarcasterFrame(`${BASE_URL}/ENDTITLE.png`, slide+1)
  }
  else if (slide === 10) {
    if (signedMessage.untrustedData.buttonIndex === 1) {
      html = generateFarcasterFrame(`${BASE_URL}/THANKYOU.png`, slide+1)
    }
    else {
      html = generateFarcasterFrame(`${BASE_URL}/OKAY.png`, slide+1)
    }
  }
  return res.status(200).setHeader('Content-Type', 'text/html').send(html)
}
