import React from 'react';

function Resume() {
  return (
    <section id="resume" className="resume-section reveal">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">MY RESUME</span>
          <h2 className="heading">Education & Project Experience</h2>
          <div className="line line-centered"></div>
        </div>

        <div className="resume-grid">
          {/* Left Column: Education */}
          <div className="timeline-column">
            <h3 className="column-title">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="title-icon"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
              </svg>
              Education
            </h3>
            <div className="timeline-wrapper">
              <div className="liner"></div>

              <div className="timeline-item reveal">
                <div className="timeline-badge">2024 - 2028</div>
                <h4 className="timeline-title">B.Tech in Computer Science</h4>
                <span className="timeline-org">Shri Mata Vaishno Devi University</span>
                <p className="timeline-detail">Current CGPA: 8.22</p>
                <span className="dot-node"></span>
              </div>

              <div className="timeline-item reveal">
                <div className="timeline-badge">2023 - 2024</div>
                <h4 className="timeline-title">Senior Secondary (Class XII)</h4>
                <span className="timeline-org">Woodland Academy</span>
                <p className="timeline-detail">
                  CBSE Board. Focus fields: Physics, Chemistry, Mathematics.
                  <br />
                  Score: 82.6%
                </p>
                <span className="dot-node"></span>
              </div>

              <div className="timeline-item reveal">
                <div className="timeline-badge">2021 - 2022</div>
                <h4 className="timeline-title">Secondary (Class X)</h4>
                <span className="timeline-org">Laxmi Prasad Memorial Public School</span>
                <p className="timeline-detail">
                  CBSE Board. Standard secondary curriculum with IT specializations. <br />
                  Score: 81.8%
                </p>
                <span className="dot-node"></span>
              </div>
            </div>
          </div>

          {/* Right Column: Projects/Experience */}
          <div className="timeline-column">
            <h3 className="column-title">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="title-icon"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Key Engineering Work
            </h3>
            <div className="timeline-wrapper">
              <div className="liner"></div>

              <div className="timeline-item reveal">
                <h4 className="timeline-title">Creator & Lead Developer</h4>
                <span className="timeline-org">
                  <a
                    href="https://www.podiumaiinterviewer.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'underline' }}
                  >
                    Podium (AI Mock Interview Coach)
                  </a>
                </span>
                <p className="timeline-detail">
                  Engineered an AI-powered mock interview simulator using React, Node.js, and Gemini API.
                  Reduced prompt latency by 35%, integrated browser-native Web Speech API for real-time speech
                  processing, and developed a resume parser with 98% accuracy.
                </p>
                <span className="dot-node"></span>
              </div>

              <div className="timeline-item reveal">
                <h4 className="timeline-title">Creator & Lead Developer</h4>
                <span className="timeline-org">CodeMerge (AI Profile Reviewer)</span>
                <p className="timeline-detail">
                  Designed and built a unified developer dashboard aggregating metrics from LeetCode,
                  GeeksforGeeks, HackerRank, and Codeforces. Integrated the Gemini API to evaluate combined
                  problem-solving metrics (Easy/Medium/Hard) and render live coding profile analysis.
                </p>
                <span className="dot-node"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
