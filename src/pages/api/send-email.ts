// pages/api/send-email.ts
import sgMail, { MailDataRequired } from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

sgMail.setApiKey(SENDGRID_API_KEY!)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const msg: MailDataRequired = req.body

    try {
      await sgMail.send(msg)
      res.status(200).json({ success: true })
    } catch (error) {
      console.error(error)
      res.status(500).json({ success: false, error })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
