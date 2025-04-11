# Contributing to Dashiell LLC Website

Thank you for considering contributing to the Dashiell LLC website! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone. Please be kind and courteous to others, and avoid any form of harassment or discriminatory behavior.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/dashiell-llc.git
   cd dashiell-llc
   ```
3. Add the original repository as a remote to keep your fork in sync:
   ```bash
   git remote add upstream https://github.com/original-owner/dashiell-llc.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Development Workflow

1. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-you-are-fixing
   ```

2. Make your changes and test them locally

3. Keep your branch updated with the upstream main branch:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

4. Commit your changes following the [commit message guidelines](#commit-message-guidelines)

5. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Create a pull request from your branch to the main repository

## Pull Request Process

1. Ensure your PR includes a clear description of the changes and the purpose
2. Link any related issues in the PR description using keywords like "Fixes #123" or "Resolves #456"
3. Make sure all CI checks pass
4. Request a review from at least one maintainer
5. Address any feedback or requested changes
6. Once approved, a maintainer will merge your PR

## Coding Standards

This project follows specific coding standards to maintain consistency:

- **TypeScript**: Use TypeScript for all new code
- **Formatting**: The project uses ESLint for linting
- **Component Structure**: 
  - Use functional components with hooks
  - Keep components focused on a single responsibility
  - Extract reusable logic into custom hooks
- **Styling**: Use Tailwind CSS for styling
- **File Organization**:
  - Place page components in the appropriate directory under `app/`
  - Place reusable components in the `components/` directory
  - Place utility functions in the `utils/` directory
  - Place TypeScript types in the `types/` directory

## Commit Message Guidelines

Follow these guidelines for commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests after the first line
- Consider using the following format:
  ```
  [type]: Short description

  Longer description if necessary

  Refs #123
  ```
  Where `type` is one of:
  - `feat`: A new feature
  - `fix`: A bug fix
  - `docs`: Documentation changes
  - `style`: Changes that do not affect the meaning of the code (formatting, etc.)
  - `refactor`: Code changes that neither fix a bug nor add a feature
  - `perf`: Performance improvements
  - `test`: Adding or updating tests
  - `chore`: Changes to the build process or auxiliary tools

## Testing

While this project doesn't currently have automated tests, please manually test your changes thoroughly before submitting a PR. In the future, we plan to add:

- Unit tests with Jest
- Component tests with React Testing Library
- End-to-end tests with Cypress

## Documentation

- Update the README.md if you change functionality
- Document new components with JSDoc comments
- Add inline comments for complex logic
- Update any relevant documentation files

## Questions?

If you have any questions or need help, please open an issue or contact the maintainers.

Thank you for contributing to the Dashiell LLC website!