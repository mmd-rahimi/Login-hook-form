import { Route, BrowserRouter as Router } from "react-router";
import { LoginForm } from "./pages/LoginForm";
import { Routes } from "react-router";
import { HomePage } from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Home" element={<HomePage />}/>
      </Routes>
    </Router>
  );
};

export default App;
