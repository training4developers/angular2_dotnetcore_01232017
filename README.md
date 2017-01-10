# Welcome to Comprehensive Angular 2 + .NET Core!

## Instructor

Eric Greene - [http://t4d.io](http://t4d.io) - [LinkedIn](https://www.linkedin.com/in/ericwgreene)

## Schedule

Class:

- Monday - Friday: 8:30am to 4:30pm (end at 4pm on Friday)

Breaks:

- Morning: 10:15am to 10:30am
- Lunch: Noon to 1pm
- Afternoon: 2:45pm to 3:00pm

## Course Outline

TypeScript & JavaScript topics will be included as needed into the Angular 2 content

- Day 1 - Technology Overview, Project Setup, Modules, Components, Pipes, Event Handling, Directives, Styling
- Day 2 - Multiple Modules, Component Inputs/Outputs, Component Composition, Form Validation, Custom Validators
- Day 3 - Custom Pipes, Observables/Promises, Fetch, WebSockets
- Day 4 - Services, Dependency Injection, Http Service & .NET Core REST Services
- Day 5 - Routing, Structural and Attribute Directives, Unit Testing, NPM Packages

## Links

### Instructor's Resources

- [Accelebrate, Inc.](https://www.accelebrate.com/)
- [Eric's Blog](http://t4d.io/)
- [WintellectNOW](https://www.wintellectnow.com/Home/Instructor?instructorId=EricGreene) - Special Offer Code: GREENE-2016
- [Microsoft Virtual Academy](https://mva.microsoft.com/search/SearchResults.aspx#!q=Eric%20Greene&lang=1033)
- [JavaScript Blog Posts](https://www.accelebrate.com/blog/?s=Greene)

### Other Resources

- [Accelebrate's Blog](https://www.accelebrate.com/blog/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Air Podcast](http://javascriptair.podbean.com/)

## Overview

This project configuration is adapted from the [Angular 2 Webpack Starter project](https://angular.io/docs/ts/latest/guide/webpack.html).

## Application Setup

Step 1. Install Node.js (6 or later). Download from [https://nodejs.org](https://nodejs.org).

Step 2. Install .NET Core. Download from [https://www.microsoft.com/net/core](https://www.microsoft.com/net/core).

Step 3. Clone or download a ZIP of this repository. If you downloaded the ZIP of this repository, extract the ZIP file.

Step 4. Open a terminal, change to the folder where the code was cloned to or extracted to.

Step 5. Run the following commands from the terminal:

```bash
npm i
npm start
```

The command **npm i** will install all of the Node.js package dependencies, TypeScript type definitions, build the Webpack bundles, and restore the .NET Core NuGet packages. Sometimes this command will fail during execution (there is a lot of network activity, anything can and will go wrong). If it fails, run **npm i** again. The command **npm start** will build the Webpack bundles and start (build & run) the .NET Core web application. The URL of the web server will be displayed in the terminal window.

Step 6. Open a web browser, and navigate to the URL outputted to the console window. The widget application should load. The login form will be pre-filled out. Click 'Login', then use the Widget Tool.

If the web page does not load a working application, delete the **node_modules** folder and run **npm i** again. Yes, this is equivalent to fixing a crashed computer simply by rebooting it. Its not pretty, but usually it works.

## Modifying Source code

.NET Core C# code is located throughout the source code tree except for the **wwwrootsrc** folder. Any of the .NET Core C# code can be modified as appropriate. The **wwwrootsrc** folder contains the client-side HTML, CSS, and JS code. This code is ultimately transpiled and bundled with Webpack and deployed to the **wwwroot** which is created by the build process. The web server will serve the client-side assets from the **wwwroot** folder, not the **wwwrootsrc**. Never the less, all changes to the client-side code should be done within the **wwwrootsrc** folder. To launch Webpack in watch mode so file changes in **wwwrootsrc** are automatically processed out to the **wwwroot** folder, please run the command **npm run webpack**. This command will run Webpack, then wait for additional file changes. The terminal window will not be available while waiting, so you will have to open a new window to execute additional terminal commands such as running the application.

## Database Information

Entity Framework Core and SQLite are used to store and access the data of the application. When the application launches it checks to see if a database exists, and if does not, then it creates one and populates it with data. The database is located in **${project-root}/bin/Debug/netcoreapp1.0/widgets.db**. To start with a fresh database, run **npm run clean**. This will remove the **wwwroot**, **bin**, and **obj** folders. When the application is started again with **npm start** all of these folders will be recreated. SQLite Database client applications should be able to open the the **widgets.db** file.

## NPM Scripts Command Reference

From a terminal, in the root project folder (where the **package.json** file exists), the following commands can be executed to perform various project development tasks.

- **npm start** - removes the **wwwroot**, **bin** and **obj** folders, builds and deploys the web app, and starts the web app
- **npm run clean** - removes the **wwwroot**, **bin** and **obj** folders
- **npm run typings** - installs TypeScript type definitions as specified in the **typings.json** file
- **npm run webpack** - runs webpack in watch mode so web app file changes are automatically processed, and deployed to the **wwwroot** folder
- **npm run webpack-once** - runs webpack once to process web app files, and deploys them to the **wwwroot** folder

## Useful Resources

- [TypeScript Coding Guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)
- [Angular 2 Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
- [Angular 2 Cheat Sheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
- [Angular 2 API](https://angular.io/docs/ts/latest/api/)
- [Angular Quick Start Project](https://angular.io/docs/ts/latest/quickstart.html)
- [Angular Webpack Project](https://angular.io/docs/ts/latest/guide/webpack.html)
- [.NET Core Documentation](https://docs.microsoft.com/en-us/dotnet/)
- [ASP.NET Core Documentation](https://docs.asp.net/en/latest/)
- [EF Core Documentation](https://docs.efproject.net/en/latest/)