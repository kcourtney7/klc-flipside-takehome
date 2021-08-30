# Kate's Implementation

To implement this solution, I first needed to build a data structure that would hold
all the data that would need to be stored in the cells. 

The `project_id` was the key because it was the same amongst all data. My plan for the FCAS
trend line was to make another map with the `project_id` as the key and an array of time series data as the value.

Then when I was building the table, I'd fetch the values from both maps and build the sparkline
dynamically as I was pulling all the other data together.

### Things I struggled with, and how I worked around them

1. API calls
    1. For some reason my 'fetch' calls kept getting JSON parse errors. 
        1. To get around this and use the data, I saved the results to .JSON files to reference and pull from.
    1. 'utility' calls never returned anything.
        1. When I tried calling `getProjectRankMetrics('utility')` I didn't get anything back. I didn't spend too much time debugging it because I would have done essentially the same thing I was doing when I called `getProjectRankMetrics('dev')` so I thought my limited could be better spend working on something else
        1. I guess I didn't really work around this, I more chose to ignore it and moved on.

### Things I would add

1. Completing all the user stories
    1. figure out why 'utility' API call isn't working
    1. finishing the FCAS sparkline
        1. I was going to do this package: https://github.com/fnando/sparkline
    1. sort table by 'fcas' in descending order
    1. adding paging to the table
1. Testing
    1. There currently isn't any. That's bad.
1. Use real API calls
    1. I like to develop with smaller sets of input data. I think it's easier to keep track of if my code is doing what I expect if I have <12 items in the table.
1. Attractiveness
    1. I mean, the table doesn't look good. I'd fix that.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
