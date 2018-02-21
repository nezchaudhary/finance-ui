
## Finance UI 

This application displays a doughnut chart for different level-risk portfolios and custom portfolios. You can compare custom portfolios to the risk portfolio. It will tell you how to adjust investments to match the risk portfolio.

![finance-ui](https://github.com/nehacp/finance-ui/blob/master/finance-ui-image.png "Finance-UI")

### Application and Execution Summary

This project uses a ready-to-use React environment call create-react-app. The main reason for the choice was project deadline. The main focus was to add features, CSS and responsiveness.

Read the application and execution summary [here](https://github.com/nehacp/finance-ui/blob/master/summary.md)

### Video

Watch a demo of the app [here](https://youtu.be/4C0ZBM7eWnw)

### Instructions

To use the application, you need to download the repository as a zip file or fork it to your own account and clone as a git repository. 

#### Dependencies

- "chart.js": "^2.7.1",
- "react": "^16.2.0",
- "react-chartjs-2": "^2.7.0",
- "react-dom": "^16.2.0",
- "react-redux": "^5.0.6",
- "redux": "^3.7.2"

#### Scripts

##### To install dependencies

Once you download/clone the application to your local computer, go into the repository root folder in the terminal. To install all the dependencies, run the command:

`npm install`


##### To start application

After all the dependencies are installed, you need to run:

`npm start`

This will runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Files and Structure

- The entry point html file for the app is [index.html](https://github.com/nehacp/finance-ui/blob/master/public/index.html) in the public folder.
- The entry point javascript file is [index.js](https://github.com/nehacp/finance-ui/blob/master/src/index.js) in the 'src' folder.
- All of the components are under [src/components](https://github.com/nehacp/finance-ui/blob/master/src/components).
- The CSS files for each component are in the same folder as the component.
- The algorithm to calculate the change needed in the portfolio is [here](https://github.com/nehacp/finance-ui/blob/master/src/calculate-portfolio-shift/index.js).
- The test suite is in the [__tests__](https://github.com/nehacp/finance-ui/blob/master/src/__tests__) folder in 'src'. It has a limited number of tests.