import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");

  const { setUser } = useContext(UserContext);

  async function RegisterUser(e) {
    e.preventDefault();

    try {
      const {
        data: { user },
      } = await axios.post("/auth/register", { name, username, password });
      setUser(user.id);
      alert("Success");
      setRedirect("/login");
    } catch (error) {
      throw new error();
    }
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={RegisterUser} className="mx-auto max-w-md p-6">
        <h1 className="my-2 text-center text-4xl font-semibold">Register</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="primary my-2">Register</button>
        <div className="my-1 text-center text-sm">
          Already a member?{" "}
          <Link className="underline" to={"/login"}>
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
}
