# Contributing to CSS Monster

Welcome to CSS Monster project! Here are some guidelines to help you get started.

## How to Contribute

1. **Fork & Clone:** Fork the repository and clone it to your local machine.
2. **Install Dependencies:** Run `npm install` in the project directory.
3. **Create a Branch:** Create a new branch (e.g., `feat/ISSUE-00-my_feature_branch`). Follow the [Branch Naming Convention](./validate-branch-name.config.cjs) defined in project.
4. **Make Changes & Test:** Update the code and test your changes using `npm run start`.
5. **Commit & Push:** Commit your changes with clear messages (using [Conventional Commits](https://www.conventionalcommits.org)) and push your branch.
6. **Open a Pull Request:** Submit a PR to the `main` branch with a brief description of your changes.

## Code Style

### GitHub Flow

We use **GitHub Flow** for our development process. The `main` branch is always stable and deployable. All changes are introduced via pull requests from **feature branches** to `main`. Each merged PR automatically triggers a new release and deployment through CI/CD.

### CSS

Please follow the OOCSS (Object-Oriented CSS) and BEM (Block Element Modifier) methodologies for writing CSS. Ensure your code is clean and well-documented. We use the BEM style with two dashes (`--`) for modifiers.
