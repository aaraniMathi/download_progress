import { Component } from "react";

class Table1 extends Component{
    render(){
        let {team}=this.props
       let ans= team.map((s,e)=>{
                return(
                    <tr key={e}>
                    <td>{s.name}</td>
                    <td>{s.age}</td>
                    <td>{s.game}</td>
                </tr>
                )
               
        })
        return(
            <table>
                <thead>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Game</td>
                </thead>
                <tbody>
                        {ans}
                </tbody>
            </table>
        )
    }
}
export default Table1;