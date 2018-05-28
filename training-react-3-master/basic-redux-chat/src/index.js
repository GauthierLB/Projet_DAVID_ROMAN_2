import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Amplify from "aws-amplify";
import config from "./config";

import {
	Provider
} from "react-redux";

import configureStore from './services';

/*
	The store is initialize during the reconnect workflow
	You can find this workflow insde the workflow folder/login
	Called on each route to check user context
*/
const store = configureStore({

});

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "notes",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});


/*
	First thing first
	npm install --save redux react-redux
*/

const Application = (props) => (
	<Provider store={store}>
		<App/>
	</Provider>
)


ReactDOM.render(
  <Router>
    <Application
/>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();