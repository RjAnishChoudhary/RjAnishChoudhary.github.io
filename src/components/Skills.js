import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills & Technologies</h2>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h3>CI/CD & Version Control</h3>
          <ul>
            <li>Jenkins, GitLab CI, GitHub Actions</li>
            <li>Version Control (Git, Gerrit)</li>
            <li>Release Management</li>
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>Build Systems</h3>
          <ul>
            <li>Yocto, BitBake, devtool</li>
            <li>CMake, GNU Make, Gradle, Maven</li>
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>Scripting & Coding</h3>
          <ul>
            <li>Shell Scripting</li>
            <li>Groovy</li>
            <li>Python</li>
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>Cloud & Infrastructure</h3>
          <ul>
            <li>AWS (EC2, EFS, S3, IAM, etc.)</li>
            <li>Docker, Docker Compose</li>
            <li>Kubernetes</li>
            <li>Terraform, Ansible</li>
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>Monitoring & Tools</h3>
          <ul>
            <li>Prometheus and Grafana</li>
            <li>SonarQube, Cppcheck</li>
            <li>JFrog Artifactory, Amazon S3</li>
            <li>JIRA, Confluence</li>
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Mentoring, Training, Leadership</li>
            <li>Attention to Detail</li>
            <li>Time Management</li>
            <li>Collaboration and Communication</li>
            <li>Troubleshooting and Problem Solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
