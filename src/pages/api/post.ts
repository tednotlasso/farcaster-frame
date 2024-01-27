import type { NextApiRequest, NextApiResponse } from 'next'

import { BASE_URL, generateFarcasterFrame } from '@/utils'

import { kv } from "@vercel/kv";

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

  const choice = signedMessage.untrustedData.buttonIndex

  let html: string = ''

  if (slide === 1) {
    html = generateFarcasterFrame(`${BASE_URL}/ZACH.png`, slide+1)
  } else if (slide === 2) {
    if (choice === 1) {
      await kv.incr("zach_zoomer");
    }
    else if (choice === 2) {
      await kv.incr("zach_boomer")
    }
    html = generateFarcasterFrame(`${BASE_URL}/V.png`, slide+1)
  }
  else if (slide === 3) {
    if (choice === 1) {
      await kv.incr("v_zoomer");
    }
    else if (choice === 2) {
      await kv.incr("v_boomer")
    }
    html = generateFarcasterFrame(`${BASE_URL}/CASSIE.png`, slide+1)
  }
  else if (slide === 4) {
    if (choice === 1) {
      await kv.incr("cassie_zoomer");
    }
    else if (choice === 2) {
      await kv.incr("cassie_boomer")
    }
    html = generateFarcasterFrame(`${BASE_URL}/GREG.png`, slide+1)
  }
  else if (slide === 5) {
    if (choice === 1) {
      await kv.incr("greg_zoomer");
    }
    else if (choice === 2) {
      await kv.incr("greg_boomer")
    }
    html = generateFarcasterFrame(`${BASE_URL}/HORSEFACTS.png`, slide+1)
  }
  else if (slide === 6) {
    if (choice === 1) {
      await kv.incr("horse_zoomer");
    }
    else if (choice === 2) {
      await kv.incr("horse_boomer")
    }
    html = generateFarcasterFrame(`${BASE_URL}/PUGSON.png`, slide+1)
  }
  else if (slide === 7) {
    if (choice === 1) {
      await kv.incr("pug_zoomer");
    }
    else if (choice === 2) {
      await kv.incr("pug_boomer")
    }
    html = generateFarcasterFrame(`${BASE_URL}/TED.png`, slide+1)
  }
  else if (slide === 8) {
    if (choice === 1) {
      await kv.incr("ted_zoomer");
    }
    else if (choice === 2) {
      await kv.incr("ted_boomer")
    }
    html = generateFarcasterFrame(`${BASE_URL}/DWR.png`, slide+1)
  }
  else if (slide === 9) {
    if (choice === 1) {
      await kv.incr("dwr_zoomer");
    }
    else if (choice === 2) {
      await kv.incr("dwr_boomer")
    }
    html = generateFarcasterFrame(`${BASE_URL}/ENDTITLE.png`, slide+1)
  }
  else if (slide === 10) {
    if (choice === 1) {
      await kv.incr("yes_code");
      html = generateFarcasterFrame(`${BASE_URL}/THANKYOU.png`, slide+1)
    }
    else {
      await kv.incr("no_code");
      html = generateFarcasterFrame(`${BASE_URL}/OKAY.png`, slide+1)
    }
  }
  return res.status(200).setHeader('Content-Type', 'text/html').send(html)
}
