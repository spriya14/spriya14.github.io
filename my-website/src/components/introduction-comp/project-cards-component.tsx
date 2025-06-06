import React from 'react';
import { useSelector } from 'react-redux';


const ProjectCardsComponent = () => {
    const theme = useSelector((state: any) => state.theme.mode);
    const isDark = theme === 'dark';
    const projects = [
        {
            title: 'Linear Regression',
            description: 'This is a brief description of Project One.',
            link: '#'
        },
        {
            title: 'Game of Chance',
            description: 'This is a brief description of Project Two.',
            link: '#'
        },
        {
            title: 'Distributed Logging and Monitoring Sys.',
            description: 'This is a brief description of Project Three.',
            link: '#'
        }
    ];

    return (
        <div className="row">
            <div className="col-md-3">
                {/* Left Column content here */}
            </div>

            <div
                className="col-md-8"
                style={{
                    backgroundColor: isDark ? '#1b1a2e' : 'rgba(255, 247, 235, 0.85)',
                    padding: '3rem 2rem',
                    borderRadius: '16px',
                    fontFamily: "'DM Sans', sans-serif",
                }}
            >
                <div className="row">
                    <header className="col-12 mb-5">
                        <h2
                            className="text-center"
                            style={{
                               color: '#e86a33',
                                fontSize: '2rem',
                                fontWeight: 700,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'

                            }}
                        >
                            Projects
                        </h2>
                    </header>

                    {projects.map((project, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div
                                className="card h-100"
                                style={{
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid #e0ddeb',
                                    borderRadius: '12px',
                                    padding: '1.5rem',
                                    color: '#f0f0f0',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                                    transition: 'transform 0.2s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                            >
                                <h5 style={{ fontWeight: 600, color: '#e0ddeb' }}>{project.title}</h5>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: '#e86a33',
                                        fontWeight: 500,
                                        fontSize: '0.9rem',
                                        textDecoration: 'underline',
                                    }}
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >

    );
}

export default ProjectCardsComponent;