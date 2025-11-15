
function SkillsSection() {
    const technicalSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Swift",
        "SwiftUI",
        "Xcode",
        "C#",
        "Godot Game Engine"
    ];

    const otherSkills = [
        "5+ years of Customer Service",
        "Building/Repairing PCs",
        "Active Directory",
        "Windows OS",
        "Linux (Fedora, Arch)",
        "Adobe Illustrator",
        "Adobe Premiere Pro"
    ];

    return (
        <section id="skills-section" className="skills-section"> 
            <h2>My Skills</h2>
            <p className="skills-intro">
                 The skills below are the ones I am proficient in. I continue to learn and improve my skills every day!
            </p>
            <ul>
                {technicalSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>

            <p className="skills-intro">
                Skills I am also proficient in that are unrelated to software development:
            </p>
            <ul>
                {otherSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );

}

export default SkillsSection;