# Deployment Instructions for Google Cloud Run

## Quick Deploy (If you have gcloud CLI installed)

```bash
gcloud run deploy portfolio-website --source . --platform managed --region us-central1 --allow-unauthenticated --port 8080
```

## Deploy Using Google Cloud Console (Web UI)

1. Go to [Google Cloud Console - Cloud Run](https://console.cloud.google.com/run)
2. Select your project
3. Click on your existing `portfolio-website` service (or "Create Service" if new)
4. Click "Edit & Deploy New Revision"
5. Choose one of these options:

### Option A: Deploy from Source (Recommended)
   - Click "Continuously deploy new revisions from a source repository"
   - Connect your GitHub repository
   - Select the branch (usually `main` or `master`)
   - Set build type to "Dockerfile"
   - Click "Deploy"

### Option B: Build and Deploy with Cloud Build
   - Click "Deploy one revision from a source repository"
   - Upload your source code or connect GitHub
   - Cloud Build will automatically build using the Dockerfile
   - Set port to 8080
   - Click "Deploy"

## What's Fixed

✅ Headshot file renamed to lowercase (`headshot.jpg`)
✅ Sharp package added for image optimization
✅ Dockerfile updated to include public directory correctly
✅ All file paths are case-sensitive compatible

## After Deployment

Once deployed, your headshot should appear at:
- Your Cloud Run URL (e.g., `https://portfolio-website-xxx.run.app`)
- The headshot will be served from `/headshot.jpg`

## Troubleshooting

If the headshot still doesn't appear after deployment:
1. Check Cloud Run logs for any errors
2. Verify the file exists in the container: Check logs for file listing
3. Verify the path is correct: `/headshot.jpg` (lowercase)
4. Clear browser cache and hard refresh

