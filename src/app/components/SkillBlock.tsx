interface SkillBlockProps {
    heading: string;
    skills: string[];
    color?: string;
}

const SkillBlock: React.FC<SkillBlockProps> = ({heading, skills, color="#f3f3f3"}) => {
    return (
        <div>
            <h5 className="font-bold text-wheat text-3xl">{heading}</h5>
            <div className="flex flex-wrap gap-2 mt-3">
                {skills.map((skill, index) => (
                    <div key={index} className="mr-2 p-4 rounded-lg text-darkgrey" style={{backgroundColor: color}}>{skill}</div>
                ))}
            </div>
        </div>
    )
}

export default SkillBlock;