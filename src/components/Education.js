import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <h2>Education & Certifications</h2>
      
      <div className="education-item">
        <h3>Certifications</h3>
        <ul>
          <li><strong>Kubernetes and Cloud Native Associate (KCNA)</strong> – The Linux Foundation, Jun'25 – Jun'27</li>
          <li><strong>Embedded Systems and Design</strong> – CDAC Knowledge Park, Bangalore, Feb'17 – Aug'17</li>
          <li><strong>AWS Cloud Practitioner</strong> – KodeKloud, Jun'25</li>
          <li><strong>Ansible</strong> – KodeKloud, May'25</li>
          <li><strong>Docker Certified Associate</strong> – KodeKloud, May'25</li>
          <li><strong>Embedded Linux Using Yocto</strong> – Udemy, Feb'24</li>
        </ul>
      </div>
      
      <div className="education-item">
        <h3>Education</h3>
        <p><strong>B.Tech. In Electronic Instrumentation and Control System</strong></p>
        <p>Rajasthan Technical University, Kota, 2012-2016</p>
      </div>
    </section>
  );
};

export default Education;
