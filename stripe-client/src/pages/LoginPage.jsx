import React from "react";

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={() =>
          (window.location.href = "http://localhost:3001/api/auth/discord")
        }
      >
        Login with Discord
      </button>
    </div>
  );
}

export default LoginPage;
