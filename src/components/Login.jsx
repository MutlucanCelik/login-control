import React, { useState } from "react";
import { useFetchUsersQuery } from "../store";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, isError, isFetching } = useFetchUsersQuery();
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const findUser = (email, password) => {
    const user = data.find((user) => {
      return user.email === email && user.password === password;
    });
    return user;
  };

  const handleClick = (e) => {
    e.preventDefault();
    const user = findUser(email, password);
    if (user) {
      setEmail("");
      setPassword("");
      // Giriş başarılı, yönlendirme işlemi
      return navigate("/home", { state: user }); // Yönlendirilecek sayfa yolunu burada belirtin
    } else {
      alert("Hatalı giriş");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form className="p-5">
        <div className="form-group mb-4">
          <label className="fs-5 mb-2">Email Adresi</label>
          <input
            value={email}
            onChange={handleChangeEmail}
            type="email"
            id="email"
            className="form-control"
            placeholder="Email Adresi"
          />
        </div>
        <div className="form-group mb-4">
          <label className="fs-5 mb-2">Şifre</label>
          <input
            value={password}
            onChange={handleChangePassword}
            type="password"
            id="password"
            className="form-control"
            placeholder="Şifre"
          />
        </div>

        <button
          onClick={handleClick}
          type="submit"
          className="btn btn-success w-100"
        >
          Giriş
        </button>
      </form>
    </>
  );
}
