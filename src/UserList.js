import React from "react";
import ListComponent from "./ListComponent";

export default class UserList extends React.Component {
    state = {lists: [], loading:true};

    async componentDidMount() {
        const config = {
            headers:{
                'Content-Type': "application/json"
            }
        };
        config.headers["Authorization"] = "Token 12ea5ea3507d18837183de9b1c7e1c266ef96741";
        const url = "http://127.0.0.1:8000/list/";
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists:data, loading:false});
    };

    render() {

        const listsApi = this.state.lists;
        console.log(listsApi);
        return (
            <div>
                {listsApi.map( list => <ListComponent listName={list.name}/>)}
            </div>
        )
    }
}