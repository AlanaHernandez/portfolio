# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed for showcasing projects, skills, and professional experience in biological engineering and biotechnology.

## Features

- **Modern Design**: Clean, minimal design with smooth animations using Framer Motion
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js 14+ App Router for optimal performance
- **Docker Ready**: Pre-configured for Google Cloud Run deployment
- **SEO Optimized**: Proper metadata and semantic HTML

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Docker + Google Cloud Run

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── SkillCategory.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── animations.ts
├── lib/                   # Utilities and data
│   └── data.ts           # Centralized data (projects, skills, contact info)
├── assets/               # Images and assets
├── public/               # Static files
├── Dockerfile            # Docker configuration
└── .dockerignore         # Docker ignore file
```

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager
- Docker (for containerization)
- Google Cloud SDK (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update personal information**
   
   Edit `lib/data.ts` and update the following:
   - `personalInfo`: Your name, headline, bio, and headshot path
   - `projects`: Your project details (title, description, technologies, links)
   - `skills`: Your technical skills and proficiency levels
   - `contactInfo`: Your email, LinkedIn, and GitHub URLs

4. **Add your headshot**
   
   Place your headshot image in the `public/` directory as `headshot.jpg` (or update the path in `lib/data.ts`)
   
   The image should be square (recommended: 800x800px or larger) and in JPG, PNG, or WebP format.

5. **Add project images (optional)**
   
   Place project images in the `public/projects/` directory and update image paths in `lib/data.ts`

### Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Docker Deployment

### Build Docker Image

```bash
docker build -t portfolio-website .
```

### Run Docker Container Locally

```bash
docker run -p 8080:8080 portfolio-website
```

Visit [http://localhost:8080](http://localhost:8080) to see the application.

**Note**: The Dockerfile uses Next.js standalone output mode. If you encounter issues, ensure that `next.config.js` has `output: 'standalone'` configured (which is already set).

## Google Cloud Run Deployment

### Prerequisites

1. Install [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)
2. Authenticate with Google Cloud:
   ```bash
   gcloud auth login
   ```
3. Set your project:
   ```bash
   gcloud config set project YOUR_PROJECT_ID
   ```
4. Enable required APIs:
   ```bash
   gcloud services enable cloudbuild.googleapis.com
   gcloud services enable run.googleapis.com
   ```

### Deploy to Cloud Run (Using Cloud Build - No Docker Required)

**Option 1: Deploy from source (Recommended - Easiest)**

This method builds and deploys in one step:

```bash
gcloud run deploy portfolio-website \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

**Option 2: Build and deploy separately**

1. **Build and push using Cloud Build**
   ```bash
   gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/portfolio-website
   ```

2. **Deploy to Cloud Run**
   ```bash
   gcloud run deploy portfolio-website \
     --image gcr.io/YOUR_PROJECT_ID/portfolio-website \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --port 8080
   ```

**Option 3: Using Cloud Run web console**
   - Go to [Cloud Run Console](https://console.cloud.google.com/run)
   - Click "Create Service"
   - Select "Deploy one revision from a source repository" or "Deploy one revision from an existing container image"
   - Follow the prompts to deploy
   - Set port to 8080
   - Click "Create"

### Continuous Deployment

You can set up Cloud Build triggers for automatic deployment on git push:

1. Connect your GitHub repository to Cloud Build
2. Create a trigger that builds and deploys on push to main/master branch
3. Cloud Build will automatically build and deploy your application

## GitHub Repository Setup

### Initial Setup

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com/new)
   - Create a new repository (e.g., `portfolio-website`)

2. **Initialize and push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git push -u origin main
   ```

### Updating Your Portfolio

1. Make changes to your files
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Your primary colors
  },
  accent: {
    // Your accent colors
  },
}
```

### Fonts

Fonts are configured in `app/layout.tsx`. You can change the Google Fonts imports and update the CSS variables.

### Content

All content is centralized in `lib/data.ts`:
- Update `personalInfo` for your personal details
- Update `projects` array with your projects
- Update `skills` array with your skills
- Update `contactInfo` with your contact details

## Environment Variables

Currently, no environment variables are required. If you want to add functionality like:

- Email service integration (SendGrid, Resend, etc.)
- Analytics (Google Analytics, etc.)
- Contact form backend

Create a `.env.local` file:

```env
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
RESEND_API_KEY=your_resend_api_key
# OR for SMTP:
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

**Note**: Never commit `.env.local` to git. It's already in `.gitignore`.

## Contact Form Email Setup

The contact form is ready to send emails but needs configuration. Choose one of these options:

### Option 1: Resend (Recommended - Easiest)

1. Sign up at [Resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Get your API key from the dashboard
3. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```
4. Install Resend:
   ```bash
   npm install resend
   ```
5. Uncomment the Resend code in `app/api/contact/route.ts` (lines 30-55)
6. Update the `from` email address with your verified domain (or use `onboarding@resend.dev` for testing)

### Option 2: Formspree (No Backend Setup - Simplest)

1. Sign up at [Formspree.io](https://formspree.io) (free tier: 50 submissions/month)
2. Create a new form and get your form endpoint (e.g., `https://formspree.io/f/xxxxxxxxxx`)
3. Update `components/ContactForm.tsx` line 20 to use Formspree:
   ```typescript
   const response = await fetch("https://formspree.io/f/your-form-id", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData),
   });
   ```

### Option 3: Nodemailer with Gmail/SMTP

1. Install Nodemailer:
   ```bash
   npm install nodemailer
   ```
2. Create a Gmail App Password:
   - Go to Google Account → Security → 2-Step Verification → App Passwords
   - Generate a password for "Mail"
3. Add to `.env.local`:
   ```env
   SMTP_USER=your.email@gmail.com
   SMTP_PASSWORD=your_app_password
   ```
4. Uncomment the Nodemailer code in `app/api/contact/route.ts` (lines 58-80)

## Performance Optimization

- Images are optimized using Next.js Image component
- Code splitting is handled automatically by Next.js
- CSS is automatically minified in production
- Static assets are served efficiently

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For issues, questions, or contributions, please open an issue on GitHub.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

