# Step-by-Step Guide to Redeploy to Google Cloud Run

## Method 1: Using Google Cloud Console (Web UI) - RECOMMENDED

This is the easiest method if you don't have gcloud CLI installed.

### Step 1: Prepare Your Code
1. Make sure all your changes are saved
2. If using GitHub:
   - Commit your changes: `git add .`
   - Commit: `git commit -m "Fix headshot image loading"`
   - Push: `git push origin main` (or your branch name)

### Step 2: Go to Google Cloud Console
1. Open your web browser
2. Go to: https://console.cloud.google.com/run
3. Make sure you're in the correct Google Cloud project

### Step 3: Deploy Your Service
1. **If you already have a service:**
   - Click on your existing `portfolio-website` service
   - Click the **"Edit & Deploy New Revision"** button (pencil icon)
   - Skip to Step 4

2. **If creating a new service:**
   - Click the **"Create Service"** button
   - Skip to Step 4

### Step 4: Configure Deployment

**Option A: Deploy from GitHub (If connected)**
1. Select **"Continuously deploy new revisions from a source repository"**
2. Choose your GitHub repository
3. Select the branch (usually `main` or `master`)
4. Set build type to **"Dockerfile"**
5. Set port to **8080**
6. Click **"Deploy"**

**Option B: Upload Source Code**
1. Select **"Deploy one revision from a source repository"**
2. Click **"Browse"** or **"Upload"**
3. Upload your project folder (or zip file of your project)
4. Make sure the Dockerfile is in the root directory
5. Set port to **8080**
6. Click **"Deploy"**

### Step 5: Wait for Deployment
- The build process will take 5-10 minutes
- You'll see progress in the Cloud Build logs
- Wait until you see "Service deployed successfully"

### Step 6: Verify
1. Click on your service to see the details
2. Copy the service URL (e.g., `https://portfolio-website-xxx.run.app`)
3. Open the URL in your browser
4. Check that the headshot now appears!

---

## Method 2: Using Google Cloud SDK (gcloud CLI)

### Step 1: Install Google Cloud SDK
1. Download from: https://cloud.google.com/sdk/docs/install
2. Install it on your computer
3. Open PowerShell or Command Prompt

### Step 2: Authenticate
```powershell
gcloud auth login
```

### Step 3: Set Your Project
```powershell
gcloud config set project YOUR_PROJECT_ID
```
(Replace `YOUR_PROJECT_ID` with your actual Google Cloud project ID)

### Step 4: Navigate to Your Project Directory
```powershell
cd "C:\Users\nanin\OneDrive\Desktop\DevOps Portfolio Cursor"
```

### Step 5: Deploy
```powershell
gcloud run deploy portfolio-website --source . --platform managed --region us-central1 --allow-unauthenticated --port 8080
```

### Step 6: Wait and Verify
- Wait for the deployment to complete (5-10 minutes)
- The command will output your service URL
- Open it in your browser to verify

---

## Method 3: Using GitHub with Cloud Build (Automatic)

If you have Cloud Build connected to your GitHub repository:

### Step 1: Push to GitHub
```powershell
git add .
git commit -m "Fix headshot image loading"
git push origin main
```

### Step 2: Automatic Deployment
- Cloud Build will automatically detect the push
- It will build and deploy your application
- Check the Cloud Build console for progress
- Your service will be updated automatically

---

## Troubleshooting

### If deployment fails:
1. Check the Cloud Build logs for errors
2. Verify your Dockerfile is in the root directory
3. Make sure `package.json` includes the `sharp` dependency
4. Verify `headshot.jpg` exists in the `public/` directory

### If headshot still doesn't appear:
1. Check the browser console for 404 errors
2. Verify the file is named exactly `headshot.jpg` (lowercase)
3. Clear your browser cache and hard refresh (Ctrl+Shift+R)
4. Check Cloud Run logs for any errors

### To view logs:
1. Go to Google Cloud Console → Cloud Run
2. Click on your service
3. Click on the "Logs" tab
4. Look for any errors related to images or file paths

---

## Quick Checklist Before Deploying

- [ ] All code changes are saved
- [ ] `headshot.jpg` exists in `public/` directory (lowercase)
- [ ] `package.json` includes `sharp` dependency
- [ ] Dockerfile is in the root directory
- [ ] Changes are committed to Git (if using GitHub)
- [ ] You're logged into Google Cloud Console

---

## After Deployment

Once deployed, your headshot should appear because:
✅ Using regular `img` tag (same as working project images)
✅ File is correctly named `headshot.jpg` (lowercase)
✅ Path `/headshot.jpg` matches the file location
✅ Error handling added for better reliability

Your service URL will be something like:
`https://portfolio-website-xxx-uc.a.run.app`

Open it in your browser to see your updated portfolio!

