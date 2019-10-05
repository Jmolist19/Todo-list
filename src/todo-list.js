import React from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class TodoList extends React.Component {

state={
    count : 0,
    value: null,
    tasks: []

}
componentDidMount(){
    //axios.get('https://swapi.co/api/people.')
    axios.get('ws/rest/tasks')  // ME TRAE LO QUE TENGO EN LA CARPETA TASKS DE JAVA
    .then(res =>{
        this.setState({tasks: res.data});
    })

    .catch(err => {
        console.log(err);
    });
}
    render () {
        console.log('render');
        //const {classes} = this.props; // this.props.classes
        const {tasks} = this.state; //this.state.tasks
        console.log(tasks);
        return (

            <>
            <List>
                {tasks.map(p => { 
                    console.log(p);
                    return (
                        <ListItem key={p.name}>
                        <ListItemText
                        primary={p.name}
                        secondary={p.description}
                        />
                        </ListItem>
                    )
                })
                }
            </List>
            </>
        );
    }
}

export default TodoList ;