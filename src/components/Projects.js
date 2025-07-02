import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Key Projects</h2>
      
      <div className="project-item">
        <div className="project-header">
          <h3>Enterprise CI/CD Pipeline for Stellantis</h3>
          <span className="date">2024</span>
        </div>
        <ul>
          <li><strong>Technologies:</strong> Jenkins, JFrog, GitHub, Docker, AWS, SigNoz, OpenTelemetry</li>
          <li><strong>Key Features:</strong> 90% reduction in manual intervention, PR validation workflows, static code analysis integration</li>
          <li><strong>Impact:</strong> Served 50+ developers, improved integration reliability, enforced secure coding standards</li>
        </ul>
      </div>
      
      <div className="project-item">
        <div className="project-header">
          <h3>Yocto-based Build System Enhancement</h3>
          <span className="date">2023</span>
        </div>
        <ul>
          <li><strong>Technologies:</strong> Yocto, BitBake, AWS EC2/EFS, Jenkins</li>
          <li><strong>Key Features:</strong> Custom toolchains and SDKs, scalable build infrastructure, build efficiency metrics</li>
          <li><strong>Impact:</strong> Enabled seamless module integration, optimized build performance and storage</li>
        </ul>
      </div>
      
      <div className="project-item">
        <div className="project-header">
          <h3>DevOps Infrastructure Automation</h3>
          <span className="date">2021-2023</span>
        </div>
        <ul>
          <li><strong>Technologies:</strong> GitLab CI, Jenkins, Docker, Kubernetes, Ansible, Prometheus, Grafana, Loki</li>
          <li><strong>Key Features:</strong> Multi-environment deployments, automated administration, real-time monitoring</li>
          <li><strong>Impact:</strong> Reduced deployment errors, improved system reliability, enhanced visibility</li>
        </ul>
      </div>
      
      <div className="project-item">
        <div className="project-header">
          <h3>OTA-SDK Product Development</h3>
          <span className="date">2017-2019</span>
        </div>
        <ul>
          <li><strong>Technologies:</strong> Jenkins, GitLab, CMake, Yocto, BitBake, AWS EC2</li>
          <li><strong>Key Features:</strong> Cross-platform compatibility, automated testing and delivery, static code analysis</li>
          <li><strong>Impact:</strong> 60% reduction in deployment errors, 25% reduction in code defects</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
