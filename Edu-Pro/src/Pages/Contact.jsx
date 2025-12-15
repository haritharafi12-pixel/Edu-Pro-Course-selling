import React from 'react'

function Contact() {
  return (


    <section
      id="contact"
      style={{
        backgroundColor: "#2575fc",
        color: "white",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", fontWeight: "700" }}>
        Get in Touch
      </h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px", maxWidth: "600px", margin: "0 auto" }}>
        Have questions or want to learn more? We're here to help!
      </p>

      <form
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you for contacting us! We'll get back to you soon.");
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "none",
            fontSize: "1rem",
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "none",
            fontSize: "1rem",
          }}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          required
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "none",
            fontSize: "1rem",
            resize: "vertical",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: "#fff",
            color: "#2575fc",
            padding: "15px",
            fontSize: "1.2rem",
            fontWeight: "700",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        
        >
          Send Message
        </button>
      </form>

      <div
        style={{
          marginTop: "40px",
          fontSize: "1rem",
          lineHeight: "1.6",
          maxWidth: "400px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p>Email: <a href="mailto:support@edupro.com" style={{ color: "white", textDecoration: "underline" }}>support@edupro.com</a></p>
        <p>Phone: <a href="tel:+918848901056" style={{ color: "white", textDecoration: "underline" }}>+91 12345 67890</a></p>
        <p>Address: 123 ,Kakkanad, Kochi,Kerala, India</p>
      </div>
    </section>

  )
}

export default Contact