# 🚀 Quick Setup: GitHub Token

Your portfolio is configured to use environment variables for the GitHub token!

## Steps to Add Your Token:

### 1️⃣ Generate GitHub Token
1. Go to: **https://github.com/settings/tokens**
2. Click **"Generate new token (classic)"**
3. Settings:
   - **Name**: Portfolio Website
   - **Expiration**: Your choice (recommended: 90 days or 1 year)
   - **Scopes**: ❌ **Leave ALL unchecked** (no permissions needed)
4. Click **"Generate token"**
5. **Copy the token** (starts with `ghp_`)

### 2️⃣ Add Token to .env File
1. Open the `.env` file in the root of this project
2. Find this line:
   ```
   REACT_APP_GITHUB_TOKEN=
   ```
3. Paste your token after the `=`:
   ```
   REACT_APP_GITHUB_TOKEN=ghp_your_actual_token_here
   ```
4. Save the file

### 3️⃣ Restart Development Server
```bash
# In your terminal, stop the server (Ctrl+C or Cmd+C)
# Then restart:
npm start
```

## ✅ Done!
Your portfolio will now:
- Load projects without rate limit issues
- Have 5,000 API requests per hour (instead of 60)
- Keep your token secure (not committed to Git)

## 🔒 Security
- The `.env` file is in `.gitignore` - your token is safe
- Never share your token publicly
- You can regenerate it anytime at GitHub settings

## 🆘 Troubleshooting
If projects still don't load:
1. Make sure you saved the `.env` file
2. Check that you restarted the dev server
3. Verify the token starts with `ghp_`
4. Check browser console for any errors
