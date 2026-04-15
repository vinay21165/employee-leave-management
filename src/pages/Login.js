import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ id: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id === "admin" && form.password === "1234") {
      navigate("/leave");
    } else {
      setError("Invalid Employee ID or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Employee Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Employee ID"
            className="input"
            onChange={(e) => setForm({ ...form, id: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="btn-primary">
            Login
          </button>

        </form>

        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;