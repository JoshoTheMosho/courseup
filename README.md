# CourseUp

[![Contributors][contributors-shield]][contributors-link]
[![Stargazers][stars-shield]][stars-link]
[![Issues][issues-shield]][issues-link]
[![Website][website-staging-shield]][website-staging-link]
[![Website][website-prod-shield]][website-prod-link]

CourseUp is a website built to simplify the experience of searching courses and building timetables for the [University of Victoria](https://uvic.ca) (UVic). The website is a TypeScript app which uses React with Next.js for the frontend and backend. The database is a PostgreSQL database.

## Develop

If you're interested developing this application, follow these steps to get running a local version of the application.

### Requirements

You will require the following to run this application locally:

- [Node.js](https://nodejs.org/en/)
  - Tip: use something like [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) to manage your Node.js versions.
- [npm](https://www.npmjs.com/get-npm)
  - This should be installed with Node.js, but if not, you can install it with `npm install -g npm`
- [Docker](https://www.docker.com/products/docker-desktop)
  - It is suggested to use Docker Desktop for Mac or Windows, as it provides a GUI for managing containers. If you are using Linux, you can use the [Docker Engine](https://docs.docker.com/engine/install/)
  - As long as you can run containers, you should be fine whatever you use.
- [Docker Compose](https://docs.docker.com/compose/install/)
  - Docker Compose is included in Docker Desktop for Mac and Windows. If you are using Linux, you can install it using `pip` or `pip3`:
    - `pip install docker-compose`
    - `pip3 install docker-compose`

### Setup

1. Fork the repository.
2. Clone your forked repository:
   ```
   git clone https://github.com/<YOUR_GITHUB_USERNAME>/courseup.git
   ```
3. Run `npm ci`
   - Tip: Avoid using `npm install` unless you're installing a package.
4. Start the PostgreSQL database from the `docker-compose.yml` file in the root directory.
   ```
   docker-compose up -d
   ```
5. Run migrations and seed the database with the latest course data.

   ```
   npx prisma migrate deploy && npx prisma db seed
   ```

   - This will run migrations to apply the latest schema changes to the database as well as seed the database with the latest course data.

6. Start the application using `npm run dev` (or `yarn dev`)
   - This will start the Next.js server.

You will now be able to develop the application. Any changes made to the code will hot-reload upon save.

### Troubleshooting

Note: If the above is failing to compile on a Windows machine, you will first need to run `git config --global core.autocrlf false`, then `git fetch --all` and then `git reset --hard`. After successfully running these two commands, you can then retry step 4 (`npm start`).

If you get stuck setting up the development environment, try Google **then** if you're still stuck drop a question in our [GitHub Discussions](https://github.com/VikeLabs/courseup/discussions/categories/q-a).

### Directory Structure

CourseUp uses a defined structure for directories. Make sure you read up on our [frontend directory structure guidelines](https://github.com/VikeLabs/courseup/wiki/Frontend-Directory-Structure) before submitting contributions.

### Chakra UI

CourseUp uses the component library [Chakra UI](https://chakra-ui.com/) as it's main source of components, styling, and formatting. You will notice throughout the codebase there is _no_ use of raw HTML elements such as `<div>`, `<li>`, etc. as Chakra provides us with clean alternatives that help keep the code consistent and the website looking good.

### Fetchers

You will notice there are React hooks like `useGetCourse`. This is provided by [resful-react](https://github.com/contiamo/restful-react/) to interact with our backend RESTful API. Please take a brief read of [resful-react](https://github.com/contiamo/restful-react/) to understand what it provides.

We use the [code generation](https://github.com/contiamo/restful-react/#code-generation-from-openapi--swagger-specs) capabilities to generate React hooks for all the resource routes to our backend. The generated code is located in [here.](./src/shared/fetchers.tsx). **DO NOT EDIT THIS FILE** as it is supposed to be generated from the OpenAPI spec.

To regenerate the fetchers, run `npm run fetchers:generate`. This is **only required if the backend controllers change**.

## Contribute

Thanks for wanting to contribute! Make sure you read up on our [contributions guidelines](CONTRIBUTING.md) before submitting contributions.

## Deployment

Hosting is provided by [VikeLabs](https://vikelabs.ca) using [Firebase](https://firebase.google.com/). CourseUp has a **staging** and **production** environment. Changes will be first deployed to staging to be verified before moving onto production.

## Testing

This project uses [Jest](https://jestjs.io/) testing framework. You can execute tests by running `npm test`.

This will execute tests using Jest files with the extension `*.test*`.

`npx jest --watch` will put Jest into watch mode, which will execute tests as files change.

## UVic Course Scraper

The website uses the npm package [`uvic-course-scraper`](https://github.com/VikeLabs/uvic-course-scraper). The package is a web-scraping tool made with TypeScript that is the main way of extracting data from UVic. It is contributed to and maintained by the original development team of `courseup`.

The motivation of [`uvic-course-scraper`](https://github.com/VikeLabs/uvic-course-scraper) is to abstract away the parsing and scraping required to obtain data. It is not designed to do anything else.

## VikeLabs

This project was developed by students at the [University of Victoria](https://www.uvic.ca) as part of [VikeLabs](https://vikelabs.ca), which is a student-led software development club.

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/VikeLabs/courseup?style=flat
[contributors-link]: https://github.com/VikeLabs/courseup/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/VikeLabs/courseup?style=flat
[stars-link]: https://github.com/VikeLabs/courseup/stargazers
[issues-shield]: https://img.shields.io/github/issues/VikeLabs/courseup
[issues-link]: https://github.com/VikeLabs/courseup/issues
[website-staging-shield]: https://img.shields.io/website?down_message=staging%20offline&up_message=staging&url=https%3A%2F%2Fcourseup.vikelabs.dev
[website-prod-shield]: https://img.shields.io/website?down_message=prod%20offline&up_message=prod&url=https%3A%2F%2Fcourseup.vikelabs.ca
[website-staging-link]: https://courseup.vikelabs.dev/
[website-prod-link]: https://courseup.vikelabs.ca/
