# Contributing to Engineering360
> Please read the [PRIORITY LIST / App Features](https://github.com/workshopapps/engineerprofile360.web/issues/1) before contributing.

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:
- Reporting an issue
- Discussing the current state of the code.
- Submitting a fix.
- Proposing new features
- Becoming a maintainer.

## Code of Conduct
The code of conduct is described in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## Our Development Process
All changes happen through pull requests. Pull requests are the best way to propose changes. We actively welcome your pull requests and invite you to submit pull requests directly [here](https://github.com/workshopapps/engineerprofile360.web/pulls), and after review, these can be merged into the project.

## Using the Project's Standard Commit Messages
This project is using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard. Please follow these steps to ensure your
commit messages are standardized:
<!-- 1. Make sure your shell path is in the root of the project (not inside any of the packages).
2. Run `yarn`.
3. Stage the files you are committing with `git add [files]`.
4. Run `yarn commit`. This will start an interactive prompt that generates your commit message:
    1. Select the type of change.
    2. Type the scope. This is either `global` for project-wide changes or one of the packages (kibbeh, shawarma etc.).
    3. Write a short, imperative tense description of the change.
    4. If the above was not sufficient, you may now write a longer description of your change (otherwise press enter to leave blank).
    5. y or n for whether there are any breaking changes (e.g. changing the props of a component, changing the JSON structure of an API response).
    6. y or n for whether this change affects an open issue, if positive you will be prompted to enter the issue number.
5. Your commit message has now been created, you may push to your fork and open a pull request (read below for further instructions). -->

## Contribution Guidelines

1. Clone the repo `git clone https://github.com/workshopapps/engineerprofile360.web.git`.
2. Open your terminal & set the origin branch: `git remote add origin https://github.com/workshopapps/engineerprofile360.web.git`
3. Pull origin `git pull origin dev`
4. Create a new branch for the task you were assigned to, eg : `git checkout -b feat-csv-parser`
5. After making changes, do `git add .`
6. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.
7. To make sure there are no conflicts, run `git pull upstream dev`.
8. Push changes to your new branch, run `git push -u origin feat-csv-parser`.
9. Create a pull request to the `dev` branch.
10. Ensure to describe your pull request.
11. > If you've added code that should be tested, add some test examples.

<!-- 
1. Fork the repo and create your branch (usually named `patch-%the number of PRs you've already made%`) from `staging`.
3. Ensure to describe your pull request. -->


## Quickstart Local Frontend Development

## Manual Full Local Development
How to run locally:


## Tech Requirement

1. **PHP 8.0.2** / **Laravel** (installed)
2. **MySql** (installed)
3. **Composer** (installed)
4. **Nodejs** (installed)
5. **NPM** / **Yarn** (installed)


## Getting Started

1. Clone the repo.

#### Frontend.

2. move into the desired project folder `frontend`
3. Install all projects dependencies using `npm install` or `yarn`
4. Start frontend development server. `npm run dev` or `yarn start`.

#### Backend.

> **Backend** replies heavily on `PHP 8.x.x` and `Laravel`. If you dont have php installed, follow this link on setting it up. [Setup PHP ON (mac,linux,windows) ](https://www.youtube.com/watch?v=mVzL2MRFANI)

2. move into the desired project folder `backend`
3. Install all projects dependencies using `composer install`.

> If you dont have composer installed, download composer with this [link](https://getcomposer.org/download/).

4. Start backend server locally.. `php artisan serve`. This should startup a local server @ `http://localhost:8000`

> make sure MYSQL server has started locally before running the above commands.

## Issues

We use GitHub issues to track public bugs. Please ensure your description is
clear and has sufficient instructions to be able to reproduce the issue. Report a bug by <a href="https://github.com/workshopapps/engineerprofile360.web/issues">opening a new issue</a>; it's that easy!

> **_Note!!** each issues given, must be followed by a specific track to ease the assessibility of other devs. for eg :- Reacreate the login screen page (FE), fix typo in utility class (BE). where FE & BE are Frontend and Backend respectively.