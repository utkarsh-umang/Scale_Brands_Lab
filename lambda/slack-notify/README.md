# Slack Notify Lambda — AWS Amplify (scalebrandslab.com)

## What this is
Paste `index.mjs` into a Lambda fronted by API Gateway. Keeps Slack webhooks server-side (never in `dist/`).

## 1. Create Lambda
- AWS Console > Lambda > Create function > Author from scratch
- Name: `slack-notify`, Runtime: `Node.js 20.x`, Arch: `x86_64`
- Paste `lambda/slack-notify/index.mjs` into Code tab > Deploy

## 2. Env vars (Lambda > Configuration > Environment variables)
- `SLACK_CONTACT_WEBHOOK_URL` = your contact incoming webhook
- `SLACK_AUDIT_WEBHOOK_URL` = your audit incoming webhook

## 3. Add API Gateway trigger
- Lambda > Add trigger > API Gateway > HTTP API > Security: Open
- Or create API Gateway > HTTP API > Add route `POST /slack-notify` > Integrate -> Lambda `slack-notify`
- Copy Invoke URL, e.g. `https://abc123.execute-api.ap-south-1.amazonaws.com/slack-notify`

## 4. Point frontend at it
- Amplify Console > App > Environment variables > `VITE_SLACK_API_URL` = `https://abc123.execute-api.ap-south-1.amazonaws.com/slack-notify`
- Redeploy. If `VITE_SLACK_API_URL` is empty, the app falls back to `/api/slack-notify` (Vercel compat).

## 5. CORS
Edit `ALLOWED_ORIGINS` in `index.mjs` if you add preview domains. Default allows `scalebrandslab.com`, `www.scalebrandslab.com`, `localhost`.

## Test
```bash
curl -X POST https://abc123.execute-api.ap-south-1.amazonaws.com/slack-notify \
  -H "Content-Type: application/json" \
  -d '{"channel":"contact","message":"test from lambda"}'
# expect {"success":true} and message in Slack
```
