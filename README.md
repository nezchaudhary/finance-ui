
## Finance UI 

This application displays a doughnut chart for different level-risk portfolios and custom portfolios.. You can compare custom portfolios to the risk portfolio. It will tell you how to adjust investments to match the risk portfolio.

## Scripts

### To start application

You need to download the repo as a zip file or fork it and then create a git repository with your own account.  Go into the repo folder in the terminal. To install all the dependencies, run the following command in the shell:

### `npm install`

After all the dependencies are installed, you need to run:

### `npm start`

This will runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### To build

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.
Command to build is

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

