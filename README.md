## React Social Network

Social Network Single Page Application (SPA) on React.js - code sandbox, technology/code demonstrator

The app uses Redux, redux-thunk middleware, axios requests and auth to backend (not made by me), react-router-dom for navigation, uses redux-form validation, selectors and reselect lib for demo, classnames for dynamic classes, css modules, etc.

Intentionally made without class components (using Hooks). 

Build deployed on: https://kexxpert.online/social

For testing please contact me for credentials.

Social Network has the following functionality:
- Initial app layout
- Users partial fetching on REST API (only requested part)
- Paginated display of users
- Change follow status for selected user (via REST API)
- Selected user (and logged user) profile display (fetched via REST API)
- Logged user profile and status change (dynamic page content) (via REST API)
- My Posts and Dialogs adding using Redux state (initial values are hardcoded)
- Global app authentication and logout (via REST API)
- Captcha service on multiple login attempts (via REST API)
- Forms validation: local via Redux-form, backend via API
- Custom form controls to display validation
- App routing using react-router-dom based on auth state
- Avatar uploading and dynamic display (via REST API)
- Preloaders (svg and CSS) while data fetching
- Simple reducer testing
- Error catching

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
