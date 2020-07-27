import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/FVApp';
import FVApp from './components/FVApp';
import CssBaseline from "@material-ui/core/CssBaseline";
import * as serviceWorker from './serviceWorker';

// from auth0 
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";


// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  
  <>
  {/* removed strict mode due to dev tool warning 7/10 */}
      <CssBaseline />
      <Auth0Provider
          domain={config.domain}
          client_id={config.clientId}
          redirect_uri={window.location.origin}
          onRedirectCallback={onRedirectCallback}
        >
     
        <FVApp />
        </Auth0Provider>
  </> 
  
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
