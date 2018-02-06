## Project Execution Summary
I spent about 8.5 hours completing the project excluding CSS and about 4 hours on CSS since I had to familiarize myself with Foundation CSS.

### Break-up
- 2 hours to setup repo, create risk level components and implement application state with redux
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

- Change radio buttons to scroll bar or drop-down menu. Radio buttons are inefficient for responsiveness especially since all 12 columns are used for CSS responsive layout.

- Use React-Router to route to different pages for different features. Right now you cannot go back or forward.

- Show chart labels separately because they reduce the size of the chart with the box if the labels are too many. If there is a comparison, sometimes one becomes smaller than the other.

- Move compare portfolio button below the risk level chart on initial select so a larger chart is visible.

- Handle situation where portfolio was submitted and rendered, then change portfolio was clicked which rendered the form), followed by risk level change. Right now the form remains but ideally, the form should disappear and portfolio chart should re-render.

- Testing.