import React from "react";
import './ProjectContainer.css'
import {Element} from 'react-scroll'
import Project from "../Project/Project";


function ProjectContainer ( ) {

    const projects = [
        {
            img :'https://cdn1.iconfinder.com/data/icons/productivity-aesthetics-vol-2/256/To_Do_List-512.png',
            title : 'Todo-List App',
            description: ' To-Do List project is specially built to keep track of errands or tasks that need to be done. It will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove them from the list by using React Js',
            link: 'https://github.com/Kamaraaj/Todo-App'
        },
        
    ]
    return (
        <Element id="projects" className="projectcontainer">
            <h2>PROJECTS</h2>           
            <div className="projectcontainer__projects">
                {
                    projects.map((project,index)=> {
                        return (
                            <Project key={index} 
                            img={project.img} 
                            title={project.title} 
                            description={project.description} link={project.link}>
                            </Project>
                        )
                    })
                }
            </div>
        </Element>
    )
     
    
}
export default ProjectContainer;
