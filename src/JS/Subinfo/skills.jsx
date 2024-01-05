let sectionHeading = ['Languages', 'Web Development', 'Mobile App Development', 
'Database Management', 'Cross-Platform Development', 'Tools'];

const listSkill = [
    ['Java', 'JavaScript', 'Python'],
    ['React', 'Node', 'HTML','CSS'],
    ['Flutter'],
    ['MySqL', 'MongoDb', 'Oracle'],
    ['Electron'],
    ['Git', 'Docker', 'Firebase', 'Apache Ant','Aws']
];
let items;

// I wanted to list seperate listskills as every items.

// build it recursive to optimise.
for (let i = 0; i < sectionHeading.length; i++) {
    for (let j = 0; j < listSkill.length; j++) {
        items = [
            {head:sectionHeading[i],res:listSkill[j]}
        ];
    } 
}

const listItem = items.map(items=>{
    <div>
        <h3>{items.head}</h3>
        <div>
            <ul>
                <li>
                    {
                       items.res 
                    }
                </li>
            </ul>
        </div>
    </div>
})

/*
    Problem stmt: write a function that on clicking Skills section,
    it will open my paragraph section!
 */

function getDetails(){

}

export default function Skills(){
    return(
    <div>
            <h2><button onClick={getDetails}>SKILLS</button> </h2>
        <div>
            {listItem}
        </div>
    </div>
    )
}