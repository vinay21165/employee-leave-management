import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

function Login() {
  const [form, setForm] = useState({ id: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

      if (res.data === "SUCCESS") {
        navigate("/leave");
      } else {
        setError("Invalid Credentials");
      }
    } catch (err) {
      setError("Server Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl mb-4 text-center">Login</h2>

        <input
          placeholder="Employee ID"
          className="input mb-2"
          onChange={(e) => setForm({ ...form, id: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="input mb-2"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn-primary mt-2">Login</button>

        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </form>
    </div>
  );
}

export default Login;