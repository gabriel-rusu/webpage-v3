<p align="center">
   <img width="128" height="128" src="public/logo.png">
</p>

<h3 align="center">Webpage v3</h3>

<p align="center"> 
      In this project, I tried to showcase my achievements in a pleasant way building a personal webpage from scratch and learn something in the process 
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Running with Docker Compose](#docker_compose)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>
This website is a digital version of my traditional paper resume. It shows my education, skills, previous positions and projects I've worked on. But, it also shows things I cannot accurately share using a paper resume (such as links to my projects).

This project was also designed to auto-update its content using the GitHub API & some configuration JSON files. The end goal is to make a personal webpage that doesn't need any manual updating & redeployment.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites
To run and modify the project easily you should install:
- [Node JS](https://nodejs.org/en/)
- [Angular CLI](https://cli.angular.io/)

Or, if you just want to play around with the project locally without installing anything, you can use:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installing

To install this project on your computer, run the following command in the root of the project directory:

```bash
npm install
```

To start the app:
```bash
npm start
```
or, if you installed the angular cli:
```bash
ng serve
```

## 🔧 Running the tests <a name = "tests"></a>

- Running unit tests
    - Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Running end-to-end tests
    - Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## 🚀 Deployment <a name = "deployment"></a>
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## 🐳 Running with Docker Compose <a name = "docker_compose"></a>
You can run the project using Docker Compose with no need for installing Node or Angular CLI locally.
Make sure Docker and Docker Compose are installed and started then run the following command:
```bash
docker-compose up --build
```
Open your browser and go to http://localhost:4200.

## ⛏️ Built Using <a name = "built_using"></a>
- [Visual Studio Code](https://code.visualstudio.com/) - code editor.
- [Bootstrap](https://semantic-ui.com/) - framework that helps create beautiful, responsive layouts.
- [Node JS](https://nodejs.org/en/) - designed to build scalable network applications.
- [Angular 13](https://angular.io/) - application design framework and development platform for creating efficient and sophisticated single-page apps.

## ✍️ Authors <a name = "authors"></a>
- [@gabriel-rusu](https://github.com/gabriel-rusu) - Idea & Implementation

