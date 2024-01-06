import React, { useState } from 'react';

let sectionHeading = ['Languages', 'Web Development', 'Mobile App Development', 
'Database Management', 'Cross-Platform Development', 'Tools'];

const listSkill = [
    ['Java', 'JavaScript', 'Python'],
    ['React', 'Node', 'HTML','CSS'],
    ['Flutter'],
    ['MySql', 'MongoDb', 'Oracle'],
    ['Electron'],
    ['Git', 'Docker', 'Firebase', 'Apache Ant','Aws']
];

let items = [];

for (let i = 0; i < sectionHeading.length; i++) {
    const sectionItems = listSkill[i].map(skill => ({ head: sectionHeading[i], res: skill }));
    items = items.concat(sectionItems);
}

const SkillsList = items.map(item => (
    <div key={item.head}>
        <h3>{item.head}</h3>
        <div>
            <ul>
                <li>{item.res}</li>
            </ul>
        </div>
    </div>
));

function Skills() {
    const [showList, setShowList] = useState(false);

    const getDetails = () => {
        setShowList(!showList);
    };

    return (
        <div>
            <h2><button onClick={getDetails}>SKILLS</button></h2>
            {showList && (
                <div>
                    {SkillsList}
                </div>
            )}
            
        </div>
    );
}

export default Skills;
