function SkillsBox({title, content, skills}) {
    return (
        <div className="text-pretty">
            <h2 className="lg:text-3xl text-xl font-bold font-mono pt-4">
                {title}
            </h2>

            <p className="lg:text-sm text-xs font-mono pb-1">
                {content}
            </p>

            <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                {skills?.map((skill, index) => (
                    <span 
                     key={index} 
                     className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                       rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium 
                       shadow-sm hover:shadow-md transition hover:scale-105"
                    >
                        {skill}
                    </span>
                ))}
            </div>
      </div>
    );
  }
  
  export default SkillsBox;
  