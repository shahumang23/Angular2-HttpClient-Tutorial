# `Angular2-HttpClient-Tutorial ​| Open Banking ​Assignment` - which developed using Halifax openbanking API and Angular2 framework

## Requirements

* Users should be able to view a list of the bank’s branches<br/>
* Users should be able to filter the list of branches by city name<br/>
* Clicking on a branch in the list should show the following additional details about the branch that was clicked:<br/>
  * Branch name<br/>
  * Full address<br/>
  * Phone number<br/>
* Data should be obtained from the Halifax API. Documentation and endpoint information is available here: https://developer.halifax.co.uk/opendata-v2.2#get-branches-2.2

## Getting Started

To get you started you can simply clone the `Angular2-HttpClient-Tutorial` repository and install the dependencies:

### Prerequisites

You need git to clone the `Angular2-HttpClient-Tutorial` repository.

We also use a number of Node.js tools to initialize and test `Angular2-HttpClient-Tutorial`. You must have Node.js
and its package manager (npm) installed.

### Clone `Angular2-HttpClient-Tutorial`

Clone the `Angular2-HttpClient-Tutorial` repository using git:

```
git clone https://github.com/shahumang23/Angular2-HttpClient-Tutorial.git
cd Angular2-HttpClient-Tutorial
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the Node package manager.

```
npm install
```

After that, you should find out that you have
below new folders in your project.

* `node_modules` - contains the npm packages for the tools we need

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`http://localhost:9000/`].

### Running Unit Tests

The `Angular2-HttpClient-Tutorial` app comes preconfigured with unit tests. These are written in [Jasmine][jasmine],
which we run with the [Karma][karma] test runner. We provide a Karma configuration file to run them.

* The configuration is found at `karma.conf.js`.
* The unit tests are found next to the code they are testing and have an `spec.js` suffix (e.g.
  `controller.spec.js`).

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will start
watching the source and test files for changes and then re-run the tests whenever any of them
changes.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

[angular]: https://angular.io/
[httpclient]: https://angular.io/guide/http
[jasmine]: https://jasmine.github.io/
[karma]: https://karma-runner.github.io/
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[typescript]: https://www.typescriptlang.org/
[typescript]: https://www.typescriptlang.org/
[webpack]: https://webpack.js.org/
[bootstrap]: https://getbootstrap.com/
[RxJS]: https://angular.io/guide/rx-library
[in-memory-web-api]: https://github.com/angular/in-memory-web-api

