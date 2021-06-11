import React from 'react';

const Style = (props) => {
    return (
        <div>
            <div 
                const style= {
                    {width: "200px"},
                    {height: "200px"},
                    {backgroundColor: `${props.source}`}                   
                }
            ><table>
                <tr>
                    <td value={props.source}></td>
                </tr>
            </table> </div>
        </div>
    )
}

// const Style =  `
//     backgroundColor: ${props => props.source};
//     width: "200px";
//     height: "200px";
//     `;
export default Style