import React, { useRef, useState } from "react";
import { Card, Form, Button, Container, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef) {
      return setError("Passwords do not match.");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create and account");
    }
    setLoading(false);
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <div className="w-100 mt-2">
            <h2>Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Button disabled={loading} type="submit" className="w-100">
                Sign Up
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </Container>
  );
}
