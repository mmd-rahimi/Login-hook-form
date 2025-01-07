import { Route, BrowserRouter as Router } from "react-router";
import { LoginForm } from "./pages/LoginForm";
import { Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Home" element={<HomePage />} />
      </Routes>
      <Sidebar />
    </Router>
  );
};

export default App;
