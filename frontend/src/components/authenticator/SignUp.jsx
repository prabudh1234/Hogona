import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignUp = location.pathname === "/signup";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("Sign up data:", formData);
      // After successful signup, redirect to signin
      // navigate("/signin");
    } else {
      console.log("Sign in data:", { email: formData.email, password: formData.password });
      // After successful signin, redirect to home
      // navigate("/");
    }
  };

  const toggleMode = () => {
    navigate(isSignUp ? "/signin" : "/signup");
    setFormData({
      name: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
          <p style={styles.subtitle}>
            {isSignUp 
              ? "Sign up to get started" 
              : "Sign in to your account"}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          {isSignUp && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                style={styles.input}
                required
              />
            </div>
          )}

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={styles.input}
              required
            />
          </div>

          {isSignUp && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone Number</label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter your phone number"
                style={styles.input}
                required
              />
            </div>
          )}

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={styles.input}
              required
            />
          </div>

          {isSignUp && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                style={styles.input}
                required
              />
            </div>
          )}

          {!isSignUp && (
            <div style={styles.forgotPassword}>
              <a href="#" style={styles.link}>Forgot password?</a>
            </div>
          )}

          <button type="submit" style={styles.button}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div style={styles.divider}>
          <span style={styles.dividerText}>OR</span>
        </div>

        <div style={styles.socialButtons}>
          <button style={styles.socialButton}>
            <svg style={styles.icon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </div>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button onClick={toggleMode} style={styles.toggleButton}>
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #ffffff00 0%, #ffffff00 100%)",
    padding: "20px",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    padding: "40px",
    width: "100%",
    maxWidth: "450px"
  },
  header: {
    textAlign: "center",
    marginBottom: "32px"
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1a202c",
    margin: "0 0 8px 0"
  },
  subtitle: {
    fontSize: "14px",
    color: "#718096",
    margin: "0"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#2d3748"
  },
  input: {
    padding: "12px 16px",
    fontSize: "15px",
    border: "2px solid #e2e8f0",
    borderRadius: "8px",
    outline: "none",
    transition: "all 0.2s",
    fontFamily: "inherit"
  },
  forgotPassword: {
    textAlign: "right",
    marginTop: "-8px"
  },
  link: {
    fontSize: "14px",
    color: "#667eea",
    textDecoration: "none",
    fontWeight: "500"
  },
  button: {
    padding: "14px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#ffffff",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    marginTop: "8px"
  },
  divider: {
    position: "relative",
    textAlign: "center",
    margin: "24px 0",
    height: "1px",
    background: "#e2e8f0"
  },
  dividerText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    padding: "0 16px",
    fontSize: "13px",
    color: "#a0aec0",
    fontWeight: "500"
  },
  socialButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  socialButton: {
    padding: "12px",
    fontSize: "15px",
    fontWeight: "500",
    color: "#2d3748",
    backgroundColor: "#ffffff",
    border: "2px solid #e2e8f0",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    transition: "all 0.2s",
    fontFamily: "inherit"
  },
  icon: {
    width: "20px",
    height: "20px"
  },
  footer: {
    marginTop: "24px",
    textAlign: "center"
  },
  footerText: {
    fontSize: "14px",
    color: "#718096",
    margin: "0"
  },
  toggleButton: {
    background: "none",
    border: "none",
    color: "#667eea",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "underline",
    fontFamily: "inherit"
  }
};

export default SignUp;