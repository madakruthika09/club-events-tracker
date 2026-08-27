import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { signupUser, loginUser } from "./services/auth";

function App() {
  const handleSignup = async (email, password) => {
    try {
      const user = await signupUser(email, password);
      console.log("Signed up:", user.user.email);
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const user = await loginUser(email, password);
      console.log("Logged in:", user.user.email);
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div>
      <Signup onSignup={handleSignup} />
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
