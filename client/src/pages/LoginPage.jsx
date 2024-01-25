import { useContext, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");

  const { setUser } = useContext(UserContext);

  async function LoginUser(e) {
    e.preventDefault();

    try {
      const {
        data: { user },
      } = await axios.post("/auth/login", { username, password });
      setUser(user.id);
      setRedirect("/");
    } catch (error) {
      console.log(error);
    }
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={LoginUser} className="mx-auto max-w-md p-6">
        <h1 className="my-2 text-center text-4xl font-semibold">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="primary my-2">Login</button>
        <div className="my-1 text-center text-sm">
          Don`t have an account yet?{" "}
          <Link className="underline" to={"/register"}>
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
}
