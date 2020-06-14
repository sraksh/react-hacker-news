### Installation

````````````````````````````````````````````````````````````````````````````
git clone https://github.com/sraksh/react-hacker-news.git
cd react-hacker-news
npm i
npm run dev
````````````````````````````````````````````````````````````````````````````

### Overview

This is a hacker news clone using React with Server Side Rendering.

2 separate webpack configs for Client and Server Side Rendering

Express for server setup
Babel for transpiling
Nodemon as watcher
Native fetch API for ajax calls
[Redux-thunk](https://github.com/reduxjs/redux-thunk) as middleware
Used [API](https://hn.algolia.com/api)
Localstorage for storing hide and upvote status
Accessibility added

For plotting the chart, [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) has been used
which is a wrapper around [Chart.js](https://www.chartjs.org/docs/latest/) library



### License
This project is licensed under the [MIT License](LICENSE)