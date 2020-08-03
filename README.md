# Git Repos

This is a sample application to fetch public repositories from GitHub using the newest v4 API with GraphQL.

This application uses Apollo and CodeGen to adapt the types from the public schema provided by GitHub.

# Overview

### File Structure:

The repository is split into two main parts. The first one is the root, where tools like codegen and commit linting are configured.
The second part is the client itself, where each folder has its own responsibilities, such as **lib, components and tests** for example, being lib for shared functions, components for TSX components, and tests for Jest/Enzyme files.

### Executing the application

The application is setup in a way that it can be easily run locally or on the Cloud. For running locally, the repository can be cloned, and Yarn or NPM can be used to install the dependencies. Yarn needs to be run on the root folder and on the client workspace.

To execute the application:

- run **yarn** on the root folder
- run **yarn** on the client folder
- run **yarn start** on the client folder

The application is integrated on CircleCI, so it can be switched to your own endpoint and static host of preference and deployed automatically.
