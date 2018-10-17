# INF 554 Assignment 8

## Description

Using Bootstrap, Angular and D3 layouts, implement a website using data from past assignments and data of your choice as outlined in the rubric.

## Rubric

### Development and published site (5 pts)

Use Angular cli and node to implement the site. Document set-up & deployment in [README.md](README.md). Use incremental commits that are consistent and tested. Use a consistent color scheme for the legends and the page. Layout uses Bootstrap components and use Angular components. Publish the site at:

```url
http://www-scf.usc.edu/~<username>/a8/
```

Present your the data and cite your source in the home page of the site.

| Quality       | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Use of GIT, Angular, Bootstrap and node is demonstrated. Set-up and deployment are documented. Pages are well formatted with a proper layout and explanatory text. Use of colors is appropriate. Site is deployed and working well.  |
| Competent     | 2-3    | Use of GIT, Angular, Bootstrap and node are not well demonstrated. Set-up and deployment are note well documented. Pages are not well formatted with improper layout and unclear explanatory text. Use of colors is not quite appropriate. Site is deployed but is not working well. |
| Needs work    | 0-1    | Use of GIT, Angular, Bootstrap and node are not demonstrated. Set-up and deployment are not documented. Pages are not well formatted and lack explanatory text. Use of colors is not appropriate. Site is not well deployed and not working well. |

### Bubble chart using circle packing (5 pts)

Based on the data and design from assignment 2, create a bubble chart with D3 using the circle packing layout. When the mouse hovers a bubble, show tooltips with information on the data for that bubble.

| Quality       | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Data is well formatted imported as JSON or a delimited format. Bubble chart is well formatted.  Uses D3 data join and circle packing layout. Bubble mouse hover tooltips work well. |
| Competent     | 2-3    | Data is not well formatted imported as JSON or a delimited format. Bubble chart is not well formatted. Does not use well D3 data join and circle packing layout. Bubble mouse hover tooltips does not work well. |
| Needs work    | 0-1    | Data is not formatted imported as JSON or a delimited format. Bubble chart is not formatted. Does not use D3 data join and circle packing layout. Bubble mouse hover tooltips does not work. |

### Responsive line chart (5 pts)

Use 10 countries and the data from assignment 1 to create a responsive line chart similar to what Google charts can generate, complete with a legend. Implement line selection with pop-out effect (one line can be selected at a time). Implement a mechanism to show/hide data points on the chart. Make the chart [responsive](https://en.wikipedia.org/wiki/Responsive_web_design).

| Quality       | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Data is well formatted imported as JSON or a delimited format. Line chart is well formatted.  Uses margin conventions, D3 data join and line generator. Line selection mechanism works well with pop-out effect. Mechanism to show/hide data points works well. Chart is responsive. |
| Competent     | 2-3    | Data is not well formatted imported as JSON or a delimited format. Line chart is not well formatted. Does not use well margin conventions, D3 data join and line generator. Line selection mechanism does not work well with pop-out effect. Mechanism to show/hide data points does not work well. Chart is not quite responsive. |
| Needs work    | 0-1    | Data is not formatted imported as JSON or a delimited format. Line chart is not formatted. Does not use margin conventions, D3 data join and line generator. Line selection mechanism does not work with pop-out effect. Mechanism to show/hide data points does not work. Chart is not responsive. |

### Pie chart using pie layout (5 pts)

Using 5 countries and the data of your choice, create a pie chart. Using Bootstrap, implement a card to show generic data information and information on how to interact with the chart when the mouse is not hovering on the pie chart. When the mouse is hovering a sector of the pie chart, show information that corresponds to the data for that sector. Add visual feedback on mouse hover.

| Quality       | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Data is well formatted imported as JSON or a delimited format. Pie chart is well formatted.  Uses D3 data join and pie layout. Mouse hover on the pie to update the card works well. Visual feedback on mouse hover works well. |
| Competent     | 2-3    | Data is not well formatted imported as JSON or a delimited format. Pie chart is not well formatted.  Does not use well D3 data join and pie layout. Mouse hover on the pie to update the card does not work well. Visual feedback on mouse hover works well. |
| Needs work    | 0-1    | Data is not formatted imported as JSON or a delimited format. Pie chart is not formatted.  Does not use D3 data join and pie layout. Mouse hover on the pie to update the card does not work. Visual feedback on mouse hover does not work. |

## Homework Guidelines

- Homework repository must be updated before the start of next class
- Commits after the submission deadline will not be considered unless requested
- Late policy: 10% of total available points per each 24-hour late; duration less than 24 hours counts as a 24-hour period
- Homework is expected to work in: Safari AND Chrome (Mac), Edge AND Chrome (Windows), Firefox AND Chrome (Linux)

## Important Note from Graders

Homework will be assessed on Linux systems which use case-sensitive filesystem by default. Ensure that you use the same case when referring to files in web pages. For example, if an image tag refers to `myFile.png` but the actual filename is `myfile.png`, the image will not appear on the web page in Linux systems. We will deduct points if this happens. Use [Visual Studio Code HTML path completion feature](https://code.visualstudio.com/updates/v1_21#_html-path-completion) and/or double-check filenames to avoid this problem.
