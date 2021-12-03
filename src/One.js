
import React, { Component } from 'react'
import axios, { Axios } from "axios"
 class One extends Component {
     constructor(props){
         super(props)
         this.state={
             Users:[]
         }
     }
     componentDidMount(){
         axios.get("https://reqres.in/api/users?page=2")
         .then((respons)=>{
             this.setState({Users:respons.data})
         }).catch(()=>{})
     }
    render() {
        return (
            <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className='card'>
                        <div className="card-header">
                            <table className="table table-hover">
                                <thead className="thead">
                                    <tr>
                                        <th>id</th>
                                        <th>email</th>
                                        <th>first_name</th>
                                        <th>last_name</th>
                                        <th>avatar</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.Users!==0?
                                        <>
                                       {/*  {
                                            this.State.Users.map((A)=>{
                                                return(<tr key={A.id}>
                                                   <th>{A.id}</th>
                                                   <th>{A.email}</th>
                                                   <th>{A.first_name}</th>
                                                   <th>{A.last_name}</th>
                                                   <th>{A.avatar}</th>
                                                </tr>)
                                            })
                                        } */}
                                        {this.state.Users.map((ele)=>{
                                            return(<tr>
                                                    <td>{ele.id}</td>
                                                   <td>{ele.email}</td>
                                                   <td>{ele.first_name}</td>
                                                   <td>{ele.last_name}</td>
                                                   <td>{ele.avatar}</td>
                                            </tr>)
                                        })}

                                        </>:null
    }
                                </tbody>
                            </table>

                        </div>
                            <div className="card-body"></div>
                        
                    </div>
                </div>
            </div>
        </div>
            </>
        )
    }
}

export default One
