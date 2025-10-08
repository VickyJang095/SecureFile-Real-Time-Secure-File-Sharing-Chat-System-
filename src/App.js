import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const [page, setPage] = useState("login"); 
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUserList(storedUsers);

    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
      setPage("dashboard");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userList));
  }, [userList]);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    setPage("dashboard");
  };

  const handleRegister = (newUser) => {
    setUserList([...userList, newUser]);
    setPage("login");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    localStorage.removeItem("uploadedFiles"); 
    setPage("login"); 
  };

  return (
    <div className="App">
      {page === "login" && (
        <LoginPage
          user={userList}
          onLoginSuccess={handleLoginSuccess}
          switchPage={setPage}
        />
      )}
      {page === "register" && (
        <RegisterPage onRegister={handleRegister} switchPage={setPage} />
      )}
      {page === "dashboard" && (
        <DashboardPage user={currentUser} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;