import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

export default function LoginPage({ user, onLoginSuccess, switchPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Vui lòng nhập username và password!");
      return;
    }

    const foundUser = user.find(
      (u) => u.username === username && u.password === password
    );
    if (foundUser) {
      onLoginSuccess(foundUser);
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleLogin}>
        <AuthInput
          label="Username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <AuthInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-400 text-center text-sm mb-3">{error}</p>
        )}

        <div className="flex items-center justify-between text-sm text-gray-200 mb-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-purple-500" /> Remember Me
          </label>
          <span className="cursor-pointer hover:underline">
            Forgot Password?
          </span>
        </div>

        <AuthButton type="submit">Login</AuthButton>

        <p className="text-center text-gray-200 text-sm mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => switchPage("register")}
            className="cursor-pointer text-white font-medium hover:underline"
          >
            Register
          </span>
        </p>
      </form>
    </AuthLayout>
  );
}
