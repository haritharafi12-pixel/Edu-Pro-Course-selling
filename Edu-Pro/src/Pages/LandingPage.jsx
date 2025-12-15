import React from 'react'

function LandingPage() {
  return (
<div style={{ fontFamily: "'Poppins', sans-serif", background: '#f9fafb', color: '#111', minHeight: '100vh' }}>

      <section
        style={{
          background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
          color: 'white',
          padding: '80px 20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: '700' }}>
          Unlock Your Potential with Expert-Led Courses
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 40px' }}>
          Learn the skills you need to succeed — anytime, anywhere. Join thousands of learners transforming their careers today.
        </p>
        <a
          href="#courses"
          style={{
            backgroundColor: '#fff',
            color: '#2575fc',
            padding: '15px 40px',
            fontWeight: '600',
            borderRadius: '30px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            boxShadow: '0 6px 15px rgba(37,117,252,0.4)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#e1eaff')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#fff')}
        >
          Browse Courses
        </a>
      </section>

      {/* Features */}
      <section
        style={{
          padding: '60px 20px',
          display: 'flex',
          justifyContent: 'space-around',
          backgroundColor: '#fff',
          flexWrap: 'wrap',
        }}
      >
        {[
          {
            icon: '🎓',
            title: 'Expert Instructors',
            desc: 'Learn from industry professionals with years of experience.',
          },
          {
            icon: '⏰',
            title: 'Flexible Schedule',
            desc: 'Learn at your own pace, anytime and anywhere.',
          },
          {
            icon: '💼',
            title: 'Career-Focused',
            desc: 'Courses designed to help you land your dream job.',
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            style={{
              flex: '1 1 250px',
              maxWidth: '300px',
              margin: '20px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '3rem',
                marginBottom: '15px',
              }}
              aria-label={feature.title}
            >
              {feature.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', fontWeight: '600' }}>
              {feature.title}
            </h3>
            <p style={{ color: '#555' }}>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Call To Action Section */}
      <section
        style={{
          backgroundColor: '#2575fc',
          color: 'white',
          textAlign: 'center',
          padding: '60px 20px',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Ready to Start Learning?
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto' }}>
          Join thousands of students today and transform your future with the power of knowledge.
        </p>
        <a
          href="#signup"
          style={{
            backgroundColor: '#fff',
            color: '#2575fc',
            padding: '15px 50px',
            fontWeight: '700',
            borderRadius: '30px',
            fontSize: '1.2rem',
            textDecoration: 'none',
            boxShadow: '0 6px 15px rgba(255,255,255,0.3)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#e1eaff')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#fff')}
        >
          Get Started Now
        </a>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f1f1f1',
          color: '#777',
          fontSize: '0.9rem',
        }}
      >
        &copy; {new Date().getFullYear()} EduPro Courses. All rights reserved.
      </footer>
    </div>
  )
}

export default LandingPage