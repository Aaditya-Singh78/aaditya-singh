import React,{useState} from "react";

export default function Volunteer(){
    const [showVolunteer,setShowVolunteer] = useState(false);
    const GetDetails = () =>{
        setShowVolunteer(!showVolunteer);
    }
 return(
    <div>
        <h2>
            <button onClick={GetDetails}>VOLUNTEERING</button> 
        </h2>
        { showVolunteer && (
            <section>
                <p>
                    Embarking on my coding odyssey in 2019, I fervently pursued web development, transitioning from a self-taught enthusiast to a versatile software engineer. A pivotal moment arose when I crafted a full-fledged web application, propelling me into the realm of software development. Proficient in C, C++, Java, and Python, I mastered the intricacies of React and Bootstrap for front-end finesse. My technical acumen extends to backend frameworks, where I navigate effortlessly through Node, Express, and Django landscapes.
                    Venturing into cutting-edge technologies, I harnessed the potential of Flutter, dabbled in iOS development, and explored the realms of database management. Despite resource constraints during college, I stood resilient. Actively contributing to platforms like Devincept and guiding peers through workshops, my journey is a testament to perseverance and a hunger for innovation.
                </p>
            </section>
        )}
    </div>
 )
}