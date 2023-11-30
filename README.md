# react-redux-vite-antd-boilerplate

This template provides a minimal setup to get React working in Vite along with Redux, AntDesign, React Router and some ESLint rules.

## Libraries / Packages:
- [react](https://www.npmjs.com/package/react)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)
- [redux-persist](https://www.npmjs.com/package/redux-persist)
- [immer](https://www.npmjs.com/package/immer)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [axios](https://www.npmjs.com/package/axios)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [antd](https://www.npmjs.com/package/antd)
- [eslint](https://www.npmjs.com/package/eslint)
- [husky](https://www.npmjs.com/package/husky)
- [vite](https://www.npmjs.com/package/vite)

## Folder Structure

```
.
├── src
│   ├── App.jsx                 // entry point for the application, includes <BrowserRouter>
│   ├── assets                  // static assets (images, videos, fonts etc.)
│   ├── components              // reuseable components
│   │   ├── common              // common / presentational components (custom buttons, checkboxes, layout etc.)
│   │   └── index.js            // re-exports components to make it easy to import them later on
│   ├── config
│   │   └── apiClient.js        // contains config for axios api client
│   ├── features                // each feature gets it's own directory
│   │   └── auth
│   │       ├── authSlice.js    // redux slice
│   │       ├── index.jsx       // presentational + functional react component
│   │       ├── requests.js     // api requests
│   │       ├── selectors.js    // state selectors
│   │       └── useAuthenticateUser.js // useAuthenticateUser hook
│   ├── main.jsx                // contains redux store configuration
│   ├── pages                   // back in the old days this would be "containers", major pages that you hook directly to the react-router go in here
│   ├── routes
│   │   └── index.jsx           // routes configuration for react-router-dom
│   ├── store
│   │   ├── index.js            // creates the redux store
│   │   └── rootReducer.js      // combines all redux slices and exports thee appReducer
│   └── theme                   // any files related to custom theme (colors, component customization, etc.) go in here
│       └── antd-theme.js       // custom AntDesign theme

```
