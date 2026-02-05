export function otpEmailHtml(appName: string, supportEmail: string, code: string) {
  return `
  <div style="font-family:Arial,sans-serif;background:#f6f8fb;padding:24px">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden">
      <tr><td style="padding:24px 24px 0 24px">
        <h2 style="margin:0;font-size:22px;color:#111827">${appName}</h2>
        <p style="margin:8px 0 0 0;color:#6b7280;font-size:14px">Email verification</p>
      </td></tr>
      <tr><td style="padding:16px 24px">
        <p style="color:#374151;font-size:14px;margin:0 0 12px 0">Use this code to verify your email:</p>
        <div style="font-size:28px;letter-spacing:6px;font-weight:700;color:#111827;text-align:center;padding:16px;border:1px solid #e5e7eb;border-radius:8px;background:#f9fafb">${code}</div>
        <p style="color:#6b7280;font-size:13px;margin:12px 0 0 0">This code expires in 10 minutes.</p>
        <p style="color:#6b7280;font-size:13px;margin:8px 0 0 0">If you didn’t request this, you can ignore this email.</p>
      </td></tr>
      <tr><td style="padding:16px 24px 24px 24px;border-top:1px solid #f3f4f6">
        <p style="color:#9ca3af;font-size:12px;margin:0">${appName} • Support: ${supportEmail}</p>
      </td></tr>
    </table>
  </div>
  `
}
