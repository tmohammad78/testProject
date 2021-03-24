import Routes from "./routes";
import { AuthProvider } from "./context/auth-context";

const App = () => {
  return (
    <AuthProvider >
      <Routes />
    </AuthProvider>
  );
}

export default App;
