import React, { useState } from "react";

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
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
    } else {
      console.log("Sign in data:", { email: formData.email, password: formData.password });
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
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
    background: "#0077b6",
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