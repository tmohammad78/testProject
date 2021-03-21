import Routes from "./routes";
import UserContext from './context/userContext'
import { useState } from "react";
import { AuthProvider } from "./context/auth-context";

const App = () => {
  const [currUser, SetCurrUser] = useState(null)
  return (
    <AuthProvider >
      <Routes />
    </AuthProvider>
  );
}

export default App;
