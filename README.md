## Requirements
Below is the stack I used in this project. Please follow the getting started section in order to make this project run.

## Stack
 - create-react-app
 - React
 - React Hooks
 - React Router Dom
 - JSON API Specs
 - Normalizer
 - Ramda
 - Full Calender
 - JSX
 - CSS Grid
 - Styled-Components
 - CSS Animations
 - CSS Media Queries
 - Mobile first responsive
 - ES6+
 - Git
 - pull requests
 - Github
 - Github Actions as CI/CD
 - JSDocs
 - NPM/Yarn
 - Sublime Text
 - Mac OS X
 - Google Chrome Incognito
 - nodejs(16.9.1)

## Getting started
In order to run this project in the browser successfully, please follow the steps below!

    1. Clone this repository.
    2. cd into `/root` i.e. `brela-test/` directory.
    3. Run `yarn/npm install` command to download and install all dependencies.
    4. To run this project use `npm start/yarn` command in command line.
    5. To build the project for production run `npm build/yarn build` command. This will build the app for production and put all the files in `/build` folder.

## Description
Above steps, in getting started section, will install all the dependencies required for this project to run.

In this task I used `React 17.0.2`. I made use of `React Hooks` and `React Router DOM` for routing. I developed the entire project inside `/brela-test` folder. All the common components for this project resides in `/brela/src/components/` folder. Every component has its own folder with its file name. This folder contains all the common components that is reused in entire codebase. I implemented routing in `/src/App.js` file.

### Architecture
I had some options regarding choosing the best architecture for this app. One option was to choose simple components base architecture. I did not choose that because it could turn the project into `speghatti code` which is hard to read, maintain and scale.

`Redux`, a most widely use state management library for react, was another option. However, I did not choose that because `redux` would have been an overkill for such a small project. I had to write a lot of boilerplate code.

Another option I had was to use `React Context API with/without useReducer hook`. For such a small project I did not see this as a viable option by taking care of state at reducer level. Also scaling with this approach would be more cumbersome as everytime new page/component is added will have its own reducer to take care of the state.

Another option I had was to choose React Hooks architecture which I chose. This option for such a small project seems to be viable and it is scalable as you can add more pages into this project in `pages` folder and it will have its own `route` in `App.js` file.

### Reusability
I wrote all the reusable components inside `src/components/` folder and they are resused all over the project. We can further add more components in that folder to reusability reasons which also means better scalability.

### Performance
In terms of performance, as I mentioned I am using create-react-app to build the project for production. So it minifies all the resources which reduces it files sizes which loads faster on the network. Furthermore, I made sure that the code I wrote is optamized by making use of `memo` and `useCallback` hooks.

### Development process
The development process that I followed for this project is based on pull requests. I have two branches `master` and `develop`. I create feature branch from develop branch. Work on a feature and push all the changes to that feature branch. Then I make a pull request which could be used for code review purpose other than triggering CI github action. Then it is merged with develop branch upon successful code review/pull request in this case. For release I create a new `tag` and push it and launch it.

### DevOps
As mentioned above I used Github Actions as CI/CD. When the pull request is created for the feature it triggers github action and the feature is deployed to dev/staging environment, for which I used netlify. When I create a new tag with a release verion and push it, it triggers deployment to production.

### Code Quality
I wrote the entire project in components and pages architecture which means there will be separate pages and those pages will contain components. I wrote all the code very readable and easy to follow. I also used `JSDocs` to document the entire code. In addition, I used `create-react-app`'s default `eslint` configuration keep the quality of the code intact.

## Notes
The final result is responsive however, you have to reload the page for fullcalendar to be re-rendered in mobile view.
