// this file is from auth0

// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
//new import and new code
// import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
    {!isAuthenticated && (
      <button onClick={() => loginWithRedirect({})}>Log in</button>
    )}

    {/* NEW - add a link to the home and profile pages */}
    {isAuthenticated && (
      <span>
        <a href="/profile">profile</a>
        <button onClick={() => logout()}>Log out</button>
      </span>
    )}
  </div>
    
  );
};

export default NavBar;

// const NavBar = () => {
//   const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

//   return (
//     <div>
//       {!isAuthenticated && (
//         <button onClick={() => loginWithRedirect({})}>Log in</button>
//       )}

//       {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
//     </div>
//   );
// };

// export default NavBar;