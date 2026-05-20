function SkillsSection() {
  const languages = [
    "TypeScript", "JavaScript", "Swift", "HTML", "CSS", "C#", "Selenium", "React", "SwiftUI",
  ];

  const tools = [
    "Vite", "Supabase", "Git","Xcode", "Godot", 
    "Adobe Illustrator", "Adobe Premiere Pro",
  ];

  return (
    <section id="skills-section" className="skills">
      <div className="skills-content">
        <h2 className="section-heading">Skills</h2>
        <div className="skills-groups">
          <div className="skills-group">
            <h3 className="skills-group-label">Languages & Frameworks</h3>
            <div className="skills-tags">
              {languages.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-group">
            <h3 className="skills-group-label">Tools & Other</h3>
            <div className="skills-tags">
              {tools.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;