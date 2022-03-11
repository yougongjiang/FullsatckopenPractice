import React from "react";
import Header from "./Header";
import Content from "./Content";
const Course=({courses})=>{
    return(
        <div>
            {courses.map(course => 
            <li key={course.id}>
                <Header header={course.name} />
                <Content parts={course.parts} />
            </li>
            )}
            
            
        </div>
    )
}
export default Course