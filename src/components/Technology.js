import React, { useState } from "react";
import "./Consulting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/logo.png"


const handleSubmitClick = () => {
  // Logic to handle form submission
};
const Consulting = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    applicantName: "",
    age: "",
    address: "",
    education: "",
    maritalStatus: "",
    imageFile: null,
    strength: "",
    weakness: "",
    emailId: "",
    contactNo: "",
    yearOfGraduation: "",
    about: "",
    PresentNameOfOrganization: "",
    PresentPlaceOfWork: "",
    PresentDesignation: "",
    PresentWorkingSince: "",
    PresentCTC: "",
    pastNameOfOrganization: "",
    PastPlaceOfWork: "",
    PastDesignation: "",
    PastWorkingSince: "",
    pastctc: "",
    ProfessionalSkills: "",
    subjectMattersExperience: "",
    nameOfProject1: "",
    locationProject1: "",
    durationProject1: "",
    RoleProject1: "",
    ClientProject1: "",
    nameOfProject2: "",
    locationProject2: "",
    durationProject2: "",
    RoleProject2: "",
    ClientProject2: "",
    nameOfProject3: "",
    locationProject3: "",
    durationProject3: "",
    RoleProject3: "",
    ClientProject3: "",
    branch: "",
    cvFile: null,
    salaryStatementFile: null,
  });

  const [section, setSection] = useState(1);

  const jobDescriptions = {
    Consultant: "Responsible for providing expert advice and solutions.",
    "Senior Consultant": "Leads projects and mentors junior consultants.",
    "Project Manager": "Oversees project timelines and deliverables.",
    "Business Analyst": "Analyzes business processes and requirements.",
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleNextClick = () => {
    setSection(section + 1);
  };

  return (
    <div className="consulting-container">
      <div className="short-div">
        <h1>Technology</h1>
        <p>Join our team and be part of something great.</p>
      </div>
      <h2>Technology</h2>
      <div className="main-content">
        <div className="sidebar">
          <h2>Current Openings</h2>
          <ul className="list">
            {Object.keys(jobDescriptions).map((job) => (
              <li key={job} onClick={() => handleJobClick(job)}>
                {job}
              </li>
            ))}
          </ul>
          {selectedJob && (
            <div className="job-description">
              <h3>{selectedJob}</h3>
              <p>{jobDescriptions[selectedJob]}</p>
            </div>
          )}
        </div>

        <div className="form-section">
          {section === 1 && (
            <div className="form-group">
              <div className="form-row">
                <div className="input-icon-wrapper">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input
                    type="text"
                    name="applicantName"
                    placeholder="Name"
                    value={formData.applicantName}
                    onChange={handleInputChange}
                  />
                </div>
                <div
                  className="input-icon-wrapper"
                  style={{ marginLeft: "70px" }}
                >
                  <input
                    type="file"
                    id="imageFile"
                    name="imageFile"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <br />
              <div>
                <div className="input-icon-wrapper">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input
                    type="text"
                    name="emailId"
                    placeholder="Email Id"
                    value={formData.emailId}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <div className="input-icon-wrapper">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input
                    type="text"
                    name="contactNo"
                    placeholder="Contact Number"
                    value={formData.contactNo}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              <div>
                <div className="input-icon-wrapper">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <div className="input-icon-wrapper">
                  <input
                    type="text"
                    name="maritalStatus"
                    placeholder="Marital status"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              <div className="input-icon-wrapper">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>
              <br />
              <div className="form-row">
                <div className="input-icon-wrapper">
                  <input
                    type="text"
                    name="education"
                    placeholder="Education"
                    value={formData.education}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="input-icon-wrapper">
                  <input
                    type="text"
                    name="yearOfGraduation"
                    placeholder="Year Of Graduation"
                    value={formData.yearOfGraduation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              <div className="input-box-box">
                <textarea
                  name="about"
                  placeholder="Tell me about yourself"
                  value={formData.about}
                  onChange={handleInputChange}
                  rows="4"
                  style={{
                    width: "100%",
                    border: "1px solid green",
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                />
              </div>
              <br />
              <div className="input-box-box">
                <textarea
                  name="strength"
                  placeholder="Strength & Weakness"
                  value={formData.strength}
                  onChange={handleInputChange}
                  rows="4"
                  style={{
                    width: "100%",
                    border: "1px solid green",
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                />
              </div>
              <br />

              {/* <div className="form-group"> */}
                {/* Your form inputs */}
                <center>
                <button onClick={handleNextClick} className="next-button">
                  Next
                </button>
                </center>
              </div>
            // </div>
          )}

          {section === 2 && (
            <div className="form-group">
              <h5>Work Experience</h5>
              <div className="form-row">
                <div className="input-icon-wrapper">
                  <input
                    type="text"
                    name="WorkExperience"
                    placeholder="Work Experience"
                    value={formData.WorkExperience}
                    onChange={handleInputChange}
                  />
                </div>
                <div
                  className="input-icon-wrapper"
                  style={{ marginLeft: "70px" }}
                >
                  <input
                    type="text"
                    name="CurrentEmployer"
                    placeholder="Current Employer"
                    value={formData.CurrentEmployer}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="input-icon-wrapper">
                  <input
                    type="text"
                    name="CurrentCTC"
                    placeholder="Current CTC"
                    value={formData.CurrentCTC}
                    onChange={handleInputChange}
                  />
                </div>
                <div
                  className="input-icon-wrapper"
                  style={{ marginLeft: "70px" }}
                >
                  <input
                    type="text"
                    name="ExpectedCTC"
                    placeholder="Expected CTC"
                    value={formData.ExpectedCTC}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="input-icon-wrapper">
                  <input
                    type="text"
                    name="NoticePeriod"
                    placeholder="Notice Period"
                    value={formData.NoticePeriod}
                    onChange={handleInputChange}
                  />
                </div>
                <div
                  className="input-icon-wrapper"
                  style={{ marginLeft: "70px" }}
                >
                  <input
                    type="text"
                    name="WorkLocation"
                    placeholder="Work Location"
                    value={formData.WorkLocation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="input-icon-wrapper">
                  <input
                    type="text"
                    name="RelevantYearsOfExperience"
                    placeholder="Relevant Years Of Experience"
                    value={formData.RelevantYearsOfExperience}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="input-icon-wrapper">
                  <textarea
                    name="Skillset"
                    placeholder="Relevant Skill Set"
                    value={formData.Skillset}
                    onChange={handleInputChange}
                    rows="4"
                    style={{
                      width: "400px",
                      border: "1px solid green",
                      borderRadius: "5px",
                      padding: "5px",
                    }}
                  />
                </div>
              </div>

              <div
                className="input-icon-wrapper"
                style={{ marginLeft: "70px" }}
              >
                <input
                  type="file"
                  id="cvFile"
                  name="cvFile"
                  onChange={handleFileChange}
                />
              </div>
              <br />
              {/* <div className="form-group"> */}
                {/* Your form inputs */}
                <center>
                  <button onClick={handleSubmitClick} className="submit-button">
                    Submit
                  </button>
                </center>
              </div>
            // </div>
          )}
        </div>
       
      </div>
      
      <div className="black-div">
     
      <div className="">
      <div className="log">
        <img src={logo} alt="Company Logo" className="log" />
      </div>
      <ul className="">
        <li className="na"><a href="#about">About</a></li>
        <li className="na"><a href="#press">Press</a></li>
        <li className="na"><a href="#developers">Developers</a></li>
        <li className="na"><a href="#channels">Channels</a></li>
        <li className="na"><a href="#privacy">Privacy</a></li>

        </ul>
      </div>
      <div className="address">
      <p>Head Office
Ekta Society, 202, Hem Opal, Plot No. 26, <br />
Wakadewadi, Pune, Maharashtra 411005 <br />
098817 85848 < br/>
admin@techknowgreen.com
</p>
     </div>

      </div>

    
      <div className='footer-consulting'>
        <div className='items'>
        <ul className="nav-list">
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#press">Press</a></li>
        <li className="nav-item"><a href="#developers">Developers</a></li>
        <li className="nav-item"><a href="#channels">Channels</a></li>
        <li className="nav-item"><a href="#privacy">Privacy</a></li>

        </ul>
        </div>
      </div>
    
   

   </div>
    
  );
};

export default Consulting;
