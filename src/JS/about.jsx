
import History from "./Subinfo/history";
import Experience from "./Subinfo/experience";
import Skills from "./Subinfo/skills";
import Volunteer from "./Subinfo/volunteer";

let pic = <img src="" alt="" />
let Introduction = 
    <>
        <h1>Hi, I am Aaditya Singh</h1>
        <p> I'm a dedicated and adaptable technologist driven by a profound passion for software development and engineering.   </p>
    </>

/* 
    Problem stmt: write up a function that would fetch resume according to domain.
    introducing concept of active questioning about purpose of visit to my portfolio 
    as recruitement. if, it specify other. then a genric resume should be provided.
*/

function purpose(){
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

function getResume(){
    // sending mail and loading file
    
    if (document.getElementById('#Web')) {
        console.alert("Got your WebD Resume ");
    } else if(document.getElementById('#SDE')){
        console.alert("Got your SDE Resume ");
    }else{
        console.alert("Got your DA Resume ");
    }
}

const resume = <button onClick={purpose}>EXPLORE MY CREDENTIALS</button>

function profile(){
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