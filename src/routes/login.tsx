import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import {
  Error,
  ForgotPassword,
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
} from "../components/auth-components";
import GithubButton from "../components/github-btn";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (loading || Object.values(account).includes("")) return;
    const { email, password } = account;
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const onSendPasswordEmail = async () => {
    if (account.email === "") {
      setError("Please, Input your Email");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, account.email);
      setError("Please, Check your Email to reset password");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    }
  };
  return (
    <Wrapper>
      <Title>Log into 𝕏</Title>
      <Form onSubmit={onSubmit}>
        <Input
          name="email"
          value={account.email}
          onChange={onChange}
          placeholder="Email"
          type="email"
          required
        />
        <Input
          name="password"
          value={account.password}
          onChange={onChange}
          placeholder="Password"
          type="password"
          required
        />
        <Input type="submit" value={loading ? "Loading..." : "Log In"} />
      </Form>
      <ForgotPassword onClick={onSendPasswordEmail}>
        I'm forgot my password 😭
      </ForgotPassword>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        Don't have an account?{" "}
        <Link to="/create-account">Create one &rarr;</Link>
      </Switcher>
      <GithubButton />
    </Wrapper>
  );
}
