# SSR React App

<p align="center"><img src="https://i.ibb.co/GdRf4rL/Screen-Shot-2020-06-16-at-1-24-49-PM.png"></p>
<p align="center"><img src="https://i.ibb.co/Dt6FNQD/Screen-Shot-2020-06-16-at-1-19-47-PM.png"></p>

## Overview

This is a hacker news clone using React with Server Side Rendering.
Chart represents the vote count of news feeds.

Demo: [hacker-news-clone](https://hacker-news-clone-sumit.herokuapp.com/)

## Installation

```
git clone https://github.com/sraksh/react-hacker-news.git
cd react-hacker-news
npm i
npm run dev
```

## Features

- Express for server setup
- Redux for Store Management
- Babel for transpiling
- Webpack for bundling
- Nodemon as watcher
- Native fetch API for ajax calls
- [Redux-thunk](https://github.com/reduxjs/redux-thunk) as middleware
- Used [API](https://hn.algolia.com/api) service
- Localstorage for storing hide and upvote status
- Prettier standard eslint rules

- For plotting the chart, [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) has been used which is a wrapper around [Chart.js](https://www.chartjs.org/docs/latest/) library

## Notes

#### Client React App

Browser requests web page -> Browser requests JS File -> React App boots on client -> Client app requests data from API -> Users sees content

### SSR React App

Browser requests web page -> Loads React App in Node env -> Client app requests data from API -> Render App -> Generate HTML -> Users sees content -> Client bundle is fetched and HTML boots into an App

- client.js is the entry point for client side rendered app
- rendered.js is the entry point for server side render app
- Client app user BrowserRouter while the server side app uses StaticRouter as route wrapper

## Testing

```
npm test
```

#### Testing Libraries used

- [Jest](https://jestjs.io/docs/en/tutorial-react)
- [React Testing library](https://github.com/testing-library/react-testing-library)
- [Redux-mock-store](https://github.com/reduxjs/redux-mock-store)

## Pros

- High Accessibility score
- High SEO score
- Zero Accessibility Error using WAVE tool (Chrome Extension)

## Improvements

- Performance
- Mobile style fixes
- Use CSS compiler like SCSS
- Add more unit tests

## License

This project is licensed under the [MIT License](LICENSE)
