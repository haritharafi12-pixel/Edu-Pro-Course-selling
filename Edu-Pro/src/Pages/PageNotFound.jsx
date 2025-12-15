import React from 'react'

function PageNotFound() {
  return (
    <div   style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        color: "#333",
        textAlign: "center",
        padding: "20px",
      }}>
    
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        alt="Page Not Found"
        style={{ width: "300px", borderRadius: "12px", marginBottom: "30px" }}
      />
      <h1 style={{ fontSize: "4rem", margin: "0 0 10px" }}>404</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
        Sorry, this page doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: "#2575fc",
          color: "white",
          padding: "12px 30px",
          borderRadius: "25px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Go Back Home
      </Link></div>
  )
}

export default PageNotFound