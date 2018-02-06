## Application Summary

- Chart Visualizations: Percentage format.
- Browser support: Mainly focused on Chrome.
- UI Responsive based on device used.
- Language: English only.
- Currency: USD only.
- Web Accessibility: Not ARIA compliant.
- No network usage so no network related error checking. Strictly UI.
- No persistance of data. Inputs have to be re-submitted if browser was closed or a button was clicked.
- No routing urls. Back/Forward button cannot be used. 
- Investment Types: Stocks, Bonds, Cash, Gold and Mutual Funds only.
- Risk Portfolios are hard-coded mock-data.
-  No Testing due to time constraint.

### Expected Inputs

- Risk Tolerance: Integers between 1-10 (inclusive and no floating points). 
- Form Input - Integers only (No floating points).


##  Execution Summary
About 8.5 hours completing the project excluding CSS and about 4 hours on CSS as I needed to familiarize myself with Foundation CSS.

### Break-up
- 2 hours to setup repository, create risk level components and implement application state with redux
- 10 mins to create mock-data.
- 1 hour to render ideal chart.
- 1 hour 20 mins to create form component.
- 30-40 mins making code making code modular.
- 40 mins to render custom portfolio chart.
- 40 mins for error checking and fixes.
- 20-30 mins white-boarding algorithm.
- 1 hour 15 mins to write algorithm.
- 30 mins to write component that renders algorithm and plug into application.
- About 4 hours with CSS after all functionality was complete.

### Possible Optimizations

- Change radio buttons to a scroll-bar or drop-down menu. Radio buttons are inefficient for small devices especially since all 12 columns are used for responsive layout.

- Use React-Router to route to different pages for different features. Right now you cannot go back or forward.

- Show chart labels separately because they reduce the size of the chart within the same box if the labels are too many. If there is a comparison, sometimes one chart becomes smaller than the other.

- Move compare portfolio button below the risk level chart on initial select so a larger chart is visible.

- Handle situation where portfolio was submitted and rendered, then change portfolio was clicked which rendered the form), followed by risk level change. As of now, the form stays as is, but ideally, the form should disappear and the previous portfolio chart should re-render.

- Add Testing.

