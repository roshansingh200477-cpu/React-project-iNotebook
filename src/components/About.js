import React from 'react';

const About = () => {
  return (
    <div className="container my-5">

      {/* Hero Section */}
      <div 
        className="text-center p-5 mb-5"
        style={{
          borderRadius: "25px",
          background: "linear-gradient(135deg, #0d6efd, #6610f2)",
          color: "white",
          boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
        }}
      >
        <h1 className="fw-bold mb-3" style={{ letterSpacing: "1px" }}>
          🚀 iNotebook
        </h1>
        <p className="lead mb-0">
          A Secure Cloud-Based Note Management Application Built Using MERN Stack
        </p>
      </div>

      {/* Project Overview */}
      <div 
        className="card p-4 mb-4"
        style={{
          borderRadius: "20px",
          border: "none",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      >
        <h3 className="fw-bold mb-3">📌 Project Overview</h3>
        <p className="text-muted" style={{ lineHeight: "1.8" }}>
          iNotebook is a full-stack web application that allows users to securely create,
          update, delete, and manage personal notes. It implements authentication using JWT,
          protected routes, and RESTful APIs to ensure secure and efficient data handling.
          The application follows modern UI/UX principles with responsive design and smooth
          user interactions.
        </p>
      </div>

      {/* Features Section */}
      <div className="row g-4 mb-4">

        <div className="col-md-6">
          <div 
            className="card h-100 p-4"
            style={{
              borderRadius: "18px",
              border: "none",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "0.3s"
            }}
          >
            <h5 className="fw-bold">🔐 Authentication & Security</h5>
            <ul className="text-muted mt-3">
              <li>JWT-based user authentication</li>
              <li>Protected routes</li>
              <li>Password encryption</li>
              <li>Token-based authorization</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div 
            className="card h-100 p-4"
            style={{
              borderRadius: "18px",
              border: "none",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              transition: "0.3s"
            }}
          >
            <h5 className="fw-bold">⚡ Core Features</h5>
            <ul className="text-muted mt-3">
              <li>Create, Read, Update & Delete Notes (CRUD)</li>
              <li>Real-time UI updates</li>
              <li>Responsive design</li>
              <li>Alert system for user feedback</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Tech Stack */}
      <div 
        className="card p-4 mb-4"
        style={{
          borderRadius: "20px",
          border: "none",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      >
        <h3 className="fw-bold mb-4">🛠️ Technology Stack</h3>

        <div className="row text-center">

          <div className="col-md-3 mb-3">
            <div className="p-3 bg-light rounded-4 shadow-sm">
              <h6 className="fw-bold text-primary">MongoDB</h6>
              <small className="text-muted">Database</small>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="p-3 bg-light rounded-4 shadow-sm">
              <h6 className="fw-bold text-success">Express.js</h6>
              <small className="text-muted">Backend Framework</small>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="p-3 bg-light rounded-4 shadow-sm">
              <h6 className="fw-bold text-info">React.js</h6>
              <small className="text-muted">Frontend Library</small>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="p-3 bg-light rounded-4 shadow-sm">
              <h6 className="fw-bold text-warning">Node.js</h6>
              <small className="text-muted">Runtime Environment</small>
            </div>
          </div>

        </div>
      </div>

      {/* Resume Highlight Section */}
      <div 
        className="text-center p-4"
        style={{
          borderRadius: "20px",
          background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
        }}
      >
        <h4 className="fw-bold mb-3">💼 Professional Value</h4>
        <p className="text-muted mb-0" style={{ lineHeight: "1.7" }}>
          This project demonstrates strong understanding of full-stack development,
          REST API integration, authentication systems, state management, and modern
          responsive UI design. It showcases the ability to build scalable, secure,
          and production-ready web applications using the MERN stack.
        </p>
      </div>

    </div>
  );
};

export default About;