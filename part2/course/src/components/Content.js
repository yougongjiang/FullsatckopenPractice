import React from "react";
import Part from "./Part";
import Total from "./Total";
const Content = ({ parts }) => {
    //concat此方法不会更改现有数组，而是返回一个新数组。所以需要一个新数组来保存他。
    // const array=[0];
    // parts.forEach(part => 
    //     array.push(part.exercises)
    // );
    // console.log(array); 
    const total=parts.reduce(
        ( acc, cur ) => acc + cur.exercises,
        0
      );
    return (
        <>
        <ul>
            {parts.map(part => 
            <li key={part.id}>
                <Part part={part} />
            </li>
            )}
        </ul>
          <Total sum={total}/>   
        </>
    )
    
}
 


export default Content;