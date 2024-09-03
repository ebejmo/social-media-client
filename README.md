# Social Media Client // Workflow Course Assignment

This repository is a fork created for the Noroff Workflow Course Assignment, based on the Social Media Client project.

## Description

The assignment aimed to enhance an existing package by applying skills from the Workflow course to establish efficient development workflows.

### Tools Used

- **Cypress**: For end-to-end testing.
- **Jest**: For unit testing.
- **ESLint**: For code linting.
- **Prettier**: For code formatting.
- **Husky**: For Git hooks.
- **GitHub Actions**: For Continuous Integration (CI) and Continuous Deployment (CD).

## Build Status

[![Automated E2E Testing](https://github.com/ebejmo/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/ebejmo/social-media-client/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/ebejmo/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/ebejmo/social-media-client/actions/workflows/unit-test.yml)

The workflow has a E2E test that fails on purpose to show that the project doesn't give an error message when the wrong email is used. This test points out that the project need to add error messages to improve user experience. 

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/ebejmo/social-media-client.git
```

Install the dependencies

```bash
npm install
```

Run the application

```bas
npm run start
```

Build the project
```bas
npm run build
```

## Testing

Run Unit test

```bash
npm run test-unit
```

Run Cypress test

```bash
npm run test-e2e
```

Run both tests

```bash
npm run test
```
