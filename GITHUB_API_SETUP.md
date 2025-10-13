# GitHub API Setup Guide

## Why am I seeing "Failed to fetch projects"?

This error occurs due to **GitHub API Rate Limiting**:
- **Without authentication**: 60 requests/hour per IP
- **With Personal Access Token**: 5,000 requests/hour

If you've been refreshing your portfolio multiple times, you've likely hit the rate limit.

## Quick Solutions

### Option 1: Wait (Easiest)
Simply wait 1 hour for the rate limit to reset. Your projects will load automatically.

### Option 2: Add GitHub Token (Recommended)

**✅ Environment variables are already set up!**

1. **Generate a Personal Access Token**:
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Give it a name: "Portfolio Website"
   - **Don't select any scopes** (no permissions needed for public repos)
   - Click "Generate token"
   - **Copy the token immediately** (you won't see it again!)

2. **Add Token to .env file**:
   - Open the `.env` file in the root directory
   - Paste your token after the `=` sign:
     ```
     REACT_APP_GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     ```
   - Save the file

3. **Restart the development server**:
   ```bash
   # Stop the current server (Ctrl+C) and restart:
   npm start
   ```

That's it! The `.env` file is already in `.gitignore`, so your token will never be committed to Git.

## Security Note

⚠️ **Never commit tokens to public repositories!**
- Use environment variables for production
- Keep tokens out of version control
- Tokens for public repo access are low-risk but still should be protected

## Check Rate Limit Status

Open browser console and run:
```javascript
fetch('https://api.github.com/rate_limit')
  .then(r => r.json())
  .then(data => console.log(data.rate));
```

This shows:
- `limit`: Your max requests per hour
- `remaining`: How many requests you have left
- `reset`: Unix timestamp when it resets
