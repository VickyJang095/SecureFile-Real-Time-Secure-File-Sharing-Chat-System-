import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

export default function RegisterPage({ onRegister, switchPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !password || !rePassword) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    if (password !== rePassword) {
      setError("Mật khẩu nhập lại không khớp!");
      return;
    }
    onRegister({ username, password });
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={handleRegister}>
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
        <AuthInput
          label="Confirm Password"
          type="password"
          placeholder="Re-enter your password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />

        {error && (
          <p className="text-red-400 text-center text-sm mb-3">{error}</p>
        )}

        <AuthButton type="submit">Register</AuthButton>

        <p className="text-center text-gray-200 text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => switchPage("login")}
            className="cursor-pointer text-white font-medium hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </AuthLayout>
  );
}
