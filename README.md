### `Set up choices`

- Redux for state management, I would have store all the API data in here, also the state of the application, for example to deal with the filters changes, make sure to have loading flags, hook this loading flags to the components via selectors being able to show loaders whenever API's are being fired. 
- Sagas for handling side effects, in my opinion is the best available middleware for big and scalable applications. 
- Styled-components for the styling, it's easy use, configuration and access to components props makes it a great way to set up styles, also helping re-usability. 
- Reselect, I loke reselect a lot, it should help lower down the complexity of the reducers, data treatment can be done in the selectors. This ones also will help previnting unnecesary re-renders in our components. 
- Jest as a testing library most probably together with react-testing-library. There was absolutely no time to think about testing. 
- typesafe-actions is one of my latest discoveries, it makes working with actions and Typescript a lot more clear.
- axios for to handle the API's calls, I tend to use it doe to it's extend compatibility with older browsers. 
- Folder structure "Duck" was the one meant to be inplemented, in this structure I would have created a separation between conponents and containers, every container folder would include it's own reducer, sagas, actions, test, etc.. the same applies to the component folder. This structure ensure quick access to all functionalities related to that component/container. 
- Google maps for the Map interaction, I found an adaptation as NPM module so it was relatively straight forward to add and start using.
- For the selection of Dates ranges I saw on the API Docs that a date range can be set so no filtering was required, I decided to move forward with a simple form with the starting date, ending date, a request button and an extra button in case of wanting to know the next available launch without modifing the date range.  
- Selecting an specific Launch is easy to do since the filtering by id on the Launches can be done in the selectors, also I wouldn't have done a new API call to select the specific data since the general call already responded with the location of the launch and the other required information. 


### `Documentation`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


