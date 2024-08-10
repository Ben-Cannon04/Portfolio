function SkillsBox({title, content, skills}) {
    return (
        <div>
            <h2 className="text-3xl font-bold font-mono">{title}</h2>
            <p className="text-sm font-mono">{content}</p>
            <div className="px-6 pt-4 pb-2">
            {skills?.map((skill, index) => (
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {skill}
                </span>
            ))}
            </div>
      </div>
    );
  }
  
  export default SkillsBox;
  