import axios from 'axios'

import React, { Component } from 'react'
 class Axios1 extends Component {
     constructor(props){
         super(props)
         this.state={
             users:[]
         }
     }
     componentDidMount(){
         axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
             this.setState({
                 users:res.data
             })
         }).catch()
     }
    render() {
        return (
            <>
               <div className="container">
                   <div className="row">
                       <div className="col">
                          
                               <table className="table table-hover">
                   <thead className="thead ">
                       <tr>
                           <th>id</th>
                           <th>name</th>
                           <th>username</th>
                           <th>email</th>
                           <th>address.suite</th>
                       </tr>
                   </thead>
                   <tbody>
                        {
                            this.state.users!=null?<>
                            {this.state.users.map((a)=>{
                                return(
                                    <tr>
                                        <td>{a.id}</td>
                                        <td>{a.name}</td>
                                        <td>{a.username}</td>
                                        <td>{a.email}</td>
                                        <td>{a.address.suite}</td>
                                    </tr>
                                    
                                )
                            })}
                            </>:null
                        }
                   </tbody>
               </table>
                           </div>
                       </div>
                   </div>
               
              
               
            </>
        )
    }
}

export default Axios1
