
import History from "./Subinfo/history";
import Experience from "./Subinfo/experience";
import Skills from "./Subinfo/skills";
import Volunteer from "./Subinfo/volunteer";
import { getResume } from "../../Api/pdf";

let pic = <img src="" alt="" />
let Introduction = 
    <>
        <h1>Hi, I am Aaditya Singh</h1>
        <p> I'm a dedicated and adaptable technologist driven by a profound passion for software development and engineering.   </p>
    </>
    
export function purpose(){
    return(
        <>
          <form action="" method="GET">
            <div>
                <label htmlFor="email">Enter your mail id:</label>
                <input type="email" name="email" placeholder="Enter your mail id" required/>
            </div>
            <fieldset>
                <legend>Select Purpose of Visit:</legend>
                <div>
                    <input type="radio" id="Web" name="Resume" value="Web Development" />
                    <label for="Web Development">Web Development</label>
                </div>
                <div>
                    <input type="radio" id="SDE" name="Resume" value="Software Development" />
                    <label for="Software Development">Software Development</label>
                </div>
                <div>
                    <input type="radio" id="DA" name="Resume" value="Data Analyst" />
                    <label for="Data Analyst">Data Analyst</label>
                </div>
            </fieldset>
            <button onClick={getResume}>Submit</button>
          </form>
        </>
    )
}

const resume = <button onClick={purpose}>EXPLORE MY CREDENTIALS</button>

export default function profile(){
 return(
    <div>
        {pic}
        {Introduction}
        <History />
        <Experience />
        <Volunteer />
        <Skills />
        {resume}
    </div>
 );
}

