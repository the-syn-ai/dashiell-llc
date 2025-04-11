# GitHub Setup Guide for Dashiell LLC Website

This guide provides step-by-step instructions for pushing the Dashiell LLC website to GitHub and setting up a new repository with recommended configurations.

## Table of Contents
- [Prerequisites](#prerequisites)
- [1. Initialize Git (If Not Already Done)](#1-initialize-git-if-not-already-done)
- [2. Create a New GitHub Repository](#2-create-a-new-github-repository)
- [3. Add, Commit, and Push Code to GitHub](#3-add-commit-and-push-code-to-github)
- [4. Recommended Configurations](#4-recommended-configurations)
  - [.gitignore Configuration](#gitignore-configuration)
  - [README.md Content](#readmemd-content)
  - [GitHub Repository Settings](#github-repository-settings)
  - [GitHub Actions for CI/CD](#github-actions-for-cicd)

## Prerequisites

- Git installed on your local machine
- GitHub account
- Node.js and npm installed (for running the project)

## 1. Initialize Git (If Not Already Done)

It appears Git is already initialized in this project (there's a `.git` directory). If you're starting from scratch with a new project, you would initialize Git with:

```bash
cd dashiell-llc
git init
```

## 2. Create a New GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" icon in the top-right corner and select "New repository"
3. Fill in the repository details:
   - Owner: Your GitHub username or organization
   - Repository name: `dashiell-llc` (or your preferred name)
   - Description: "Official website for Dashiell LLC - Home renovation and repair services"
   - Visibility: Public (or Private if you prefer)
   - Do NOT initialize with README, .gitignore, or license (since the project already exists locally)
4. Click "Create repository"

## 3. Add, Commit, and Push Code to GitHub

After creating the repository, GitHub will show instructions for pushing an existing repository. Follow these steps:

```bash
# Navigate to your project directory (if not already there)
cd dashiell-llc

# Check current remote repositories (if any)
git remote -v

# If a remote already exists, you can remove it with:
# git remote remove origin

# Add the new GitHub repository as the remote origin
git remote add origin https://github.com/YOUR-USERNAME/dashiell-llc.git

# Verify the remote was added correctly
git remote -v

# Add all files to staging
git add .

# Commit the files
git commit -m "Initial commit: Dashiell LLC website"

# Push to GitHub
git push -u origin main
```

Note: If your default branch is named `master` instead of `main`, use:
```bash
git push -u origin master
```

## 4. Recommended Configurations

### .gitignore Configuration

The existing `.gitignore` file is already well-configured for a Next.js project. It includes:

- Node modules and package managers
- Build outputs
- Environment files
- Debug logs
- TypeScript build info

If you need to add additional entries, append them to the existing `.gitignore` file. For example, you might want to add:

```
# IDE specific files
.idea/
.vscode/
*.sublime-*

# Local environment files
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
logs
*.log

# Optional: Storybook build
/storybook-static
```

### README.md Content

The existing README.md is a standard Next.js template. Consider enhancing it with project-specific information:

```markdown
# Dashiell LLC Website

Official website for Dashiell LLC, a home renovation and repair services company.

## About

This website showcases Dashiell LLC's services including painting, drywall, flooring, siding, garage doors, closets, and water damage repair. It provides information about our locations, contact details, and service offerings.

## Technologies Used

- **Framework**: Next.js 15.3.0
- **UI**: React 19
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Linting**: ESLint

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js app directory containing pages and layouts
- `components/`: Reusable React components
- `public/`: Static assets
- `utils/`: Utility functions
- `types/`: TypeScript type definitions

## Deployment

This site is deployed on [platform name]. See the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for details.

## License

[Specify your license here]

## Contact

For questions or support, please contact [your contact information].
```

### GitHub Repository Settings

After pushing your code, configure these recommended repository settings:

1. **Branch Protection Rules**:
   - Go to Settings > Branches > Add rule
   - Branch name pattern: `main` (or your default branch)
   - Enable:
     - Require pull request reviews before merging
     - Require status checks to pass before merging
     - Require branches to be up to date before merging
     - Include administrators

2. **Default Branch**:
   - Ensure your default branch is set to `main` (Settings > Branches)

3. **Collaborators and Teams**:
   - Add team members with appropriate permissions (Settings > Collaborators and teams)

4. **GitHub Pages** (if you plan to host the static export on GitHub Pages):
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (you'll need to create this branch)

5. **Security Settings**:
   - Enable Dependabot alerts (Settings > Security & analysis)
   - Enable automated security fixes

### GitHub Actions for CI/CD

Create a GitHub Actions workflow for continuous integration and deployment. Create a file at `.github/workflows/ci.yml`:

```yaml
name: CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Lint
      run: npm run lint
      
    - name: Build
      run: npm run build
      
    # Optional: Add tests when you have them
    # - name: Test
    #   run: npm test

  # Optional: Deploy to Vercel or other platforms
  # deploy:
  #   needs: build
  #   runs-on: ubuntu-latest
  #   if: github.ref == 'refs/heads/main'
  #   
  #   steps:
  #   - uses: actions/checkout@v3
  #   
  #   - name: Deploy to Vercel
  #     uses: amondnet/vercel-action@v20
  #     with:
  #       vercel-token: ${{ secrets.VERCEL_TOKEN }}
  #       vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
  #       vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
  #       vercel-args: '--prod'
```

## Next Steps

After setting up your GitHub repository:

1. Share the repository URL with your team
2. Set up a deployment pipeline (Vercel, Netlify, or custom hosting)
3. Consider adding additional documentation:
   - Contributing guidelines
   - Code of conduct
   - Issue and PR templates

## Troubleshooting

### Authentication Issues

If you encounter authentication issues when pushing to GitHub:

1. Ensure you're using a personal access token or SSH key for authentication
2. For HTTPS, configure credential storage:
   ```bash
   git config --global credential.helper cache
   ```
3. For SSH, verify your SSH key is added to your GitHub account

### Large Files

If you have large files that exceed GitHub's file size limits:

1. Consider using Git LFS (Large File Storage)
2. Or add those files to `.gitignore` and store them elsewhere

### Merge Conflicts

If you encounter merge conflicts:

1. Pull the latest changes: `git pull origin main`
2. Resolve conflicts in your code editor
3. Add resolved files: `git add .`
4. Complete the merge: `git commit -m "Resolve merge conflicts"`