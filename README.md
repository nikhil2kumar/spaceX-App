# SpaceX Launch Programs

This application shows the list of the launch programs based on the filter applied. User has the option to apply filter on launch year, launch success and land success.

## Deployment

Heroku is used for deployment.

The deployment is connected to code GitHub repository's master branch. When the code is pushed to master branch the Heroku rebuilds the application and deploys it.

## Libraries and tools used

1. Express for server side rendering
2. Axios for Api calls
3. Webpack to bundle client and server code
4. [Uglify](https://www.npmjs.com/package/uglifyjs-webpack-plugin) to minify the JavaScript code.
5. [DuplicatePackageCheckerPlugin](https://www.npmjs.com/package/duplicate-package-checker-webpack-plugin) for checking the duplicate packages.

## Development Approach

1. The application is server side rendered for the initial static page load. Once the static page is rendered the client code takes over and renders the DOM again.
   If the user reload the app the resulting page is server side rendered and then the client code takes over and reapplies the selected filters.

2. The implementation follows the mobile first approach i.e the CSS styling has been done for the mobile view and then media query to modify it for desktop and tablet view.

3. [Uglify](https://www.npmjs.com/package/uglifyjs-webpack-plugin) is used for minification of JavaScript file and thus reduction in bundle size.

4. [React Helmet](https://www.npmjs.com/package/react-helmet) is used for making the application SEO friendly.

5. React memo and useMemo hook is used to avoid unnecessary re-rendering.

6. The code is split into multiple components to make use of re-usability.

7. No found page has been added in case the user tries to navigate to the page that doesn't exist.

## Deployment Links

<https://spacex-webapp.herokuapp.com/>

## Run app on local

### `npm install`

install all dependencies

### `npm start`

Runs the app in the development mode.
