import React from "react";

// Creates context object. It will contain a compnent.
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
