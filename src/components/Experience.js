import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Professional Experience</h2>
      
      <div className="experience-item">
        <div className="experience-header">
          <h3>Senior Engineer in Product Management</h3>
          <span className="date">May 2024 – Jan 2025</span>
        </div>
        <p><strong>Mobile Drive Technology India, Bangalore (Client: Stellantis)</strong></p>
        <ul>
          <li>Architected enterprise CI/CD pipeline using Jenkins, JFrog, GitHub, and Docker, serving 50+ developers, significantly reducing manual build interventions and improving integration reliability.</li>
          <li>Achieved a 90% reduction in manual intervention and improved monitoring efficiency through SigNoz dashboards with OpenTelemetry-based tracing and metrics.</li>
          <li>Supported integration of BitBake recipes for Amazon's Vera OS, ensuring compatibility with Yocto builds.</li>
          <li>Implemented PR validation workflows for Unity builds, enhancing code quality and compliance.</li>
          <li>Integrated static code analysis using SonarScanner, Cppcheck, and MISRA compliance checks, reducing code defects by 20% and enforcing secure, safety-critical coding.</li>
          <li>Wrote and refined multiple CMake files to streamline software build and integration.</li>
          <li>Worked closely with cross-functional teams to enhance build systems and CI/CT/CM workflows, aligning with OEM and Tier 1 supplier standards.</li>
          <li>Streamlined the provisioning and configuration of nodes using Proxmox and Ansible to minimise manual setup efforts.</li>
        </ul>
      </div>
      
      <div className="experience-item">
        <div className="experience-header">
          <h3>Senior Engineer</h3>
          <span className="date">Jul 2023 – May 2024</span>
        </div>
        <p><strong>Wipro, Bangalore (Client: Stellantis)</strong></p>
        <ul>
          <li>Automated build workflows in Jenkins to improve CI efficiency and accelerate delivery timelines.</li>
          <li>Enhanced the Yocto-based build system for pre-integration, enabling seamless integration of new modules.</li>
          <li>Developed custom toolchains, SDKs, and devtool workflows to accelerate application development and improve build performance.</li>
          <li>Integrated AWS EC2 and EFS for scalable and persistent build infrastructure, optimizing build performance and storage usage across multiple Jenkins agents.</li>
          <li>Actively involved in testing newly developed features after integration, ensuring functionality and stability to support overall system performance.</li>
          <li>Established pipelines to generate metrics for tracking build efficiency, ensuring consistent improvements in software delivery timelines.</li>
        </ul>
      </div>
      
      <div className="experience-item">
        <div className="experience-header">
          <h3>Senior Engineer in Software Configuration Management (SCM)</h3>
          <span className="date">Oct 2021 – May 2023</span>
        </div>
        <p><strong>Landis+gyr, Noida</strong></p>
        <ul>
          <li>Created and executed GitLab CI with YAML. Additionally developed and improved Jenkins scripted pipelines in combination of Groovy, Shell, Python modules, and Batch Script to facilitate regular builds based on diverse strategies.</li>
          <li>Regulated and maintained a complete set-up of DevOps instruments, managing Jenkins environments, GIT, Gerrit, GitLab, SonarQube, OpenGrok, Looker, LAMS, JIRA, and security examination instruments like MEND.</li>
          <li>Simultaneously administered Jenkins and Gerrit, integrating security protocols with LDAP and implementing secure code practices for access management.</li>
          <li>Automated multi-environment deployments via Docker and Kubernetes with rolling updates and health checks.</li>
          <li>Developed & implemented procedures for system troubleshooting and maintenance.</li>
          <li>Responsible for establishing milestones for necessary contributions from departments and developing processes to facilitate their collaboration.</li>
          <li>Wrote comprehensive Ansible playbooks for automated administration of web applications, system configurations, mount point management, and software package deployments.</li>
          <li>Implemented Prometheus and Grafana for real-time monitoring, alerting, and visualization of build+deployment servers, Kubernetes nodes, Jenkins pipelines, and Gerrit instances; integrated Loki for centralized logging.</li>
          <li>Managed JFrog repositories, facilitating artifacts publication and retrieval.</li>
          <li>Carried the responsibilities regarding the organization of JIRA, Gerrit, GitLab, and ServiceNow, fastidiously dealing with tasks like client management, workflow refinement, and field creation.</li>
          <li>Creating documentation for integration and release processes, enabling quick team adoption and workflow adaptation with minimal onboarding.</li>
        </ul>
      </div>
      
      <div className="experience-item">
        <div className="experience-header">
          <h3>Build and Release Engineer</h3>
          <span className="date">Dec 2019 – Oct 2021</span>
        </div>
        <p><strong>Netradyne Tech. India Pvt. Limited, Bangalore</strong></p>
        <ul>
          <li>Developed multi-stage Jenkins pipelines for automotive builds, integrating Cppcheck, Pylint and Prometheus for quality assurance.</li>
          <li>Managed source code repositories by defining branching, merging, and tagging strategies, ensuring robust version control and traceability for both major and minor software releases.</li>
          <li>Identified & monitored monthly metrics & KPIs, ensuring adherence to operational standards and consistently applying them to ensure that SLAs are achieved.</li>
          <li>Performed sanity testing of new features and bug fixes using a combination of manual white-box techniques before releasing to QA, with test logs and artifacts stored securely in AWS S3 for traceability and collaboration.</li>
          <li>Led the development and maintenance of BitBake recipes to support integration and builds.</li>
          <li>Authored comprehensive Dev and Release build notes, including feature highlights, change logs, and known issues for every release cycle, promoting cross-team transparency.</li>
          <li>Diagnosed build failures and application defects, with a focus on root cause analysis, performance tuning, and long-term software optimization.</li>
        </ul>
      </div>
      
      <div className="experience-item">
        <div className="experience-header">
          <h3>Member of Technical Staff</h3>
          <span className="date">Sept 2017 – Nov 2019</span>
        </div>
        <p><strong>Sirius Embedded Software Pvt. Limited, Bangalore</strong></p>
        <ul>
          <li>Engineered a scalable CI/CD pipeline using Jenkins, GitLab, CMake, Make, Gradle, Maven, and Pydio Artifactory, deployed on AWS EC2, achieving a 60% reduction in integration and deployment errors through end-to-end automation of testing and delivery processes.</li>
          <li>Integrated SonarQube for static code analysis, reducing code defects by 25% and enabling incident response with detailed vulnerability reports.</li>
          <li>Devised and executed scripts to packages, facilitating their release via the Pydio file server.</li>
          <li>Led the construction and release of Android (AOSP) images for embedded devices, integrating OTA software applications as system applications.</li>
          <li>Developed customized meta layers & authored BitBake recipe files to integrate OTA software applications with Yocto, packaging them alongside with rootfs/system images.</li>
          <li>Created & applied patches to open-source and internal modules through BitBake recipes and append files to ensure smooth integration of application via Yocto.</li>
          <li>Designed, developed, and delivered an OTA-SDK product compatible with various automotive operating systems, including Custom Linux, RHEL, QNX, and x86 (Ubuntu_16.04).</li>
          <li>Formulated scripts for installing OTA-SDK solutions on Boundary Device Images, including the configuration of init scripts, logrotate, rsyslog, and Cron jobs, ensuring it as a standalone application release.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
