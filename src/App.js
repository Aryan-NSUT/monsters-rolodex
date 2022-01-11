import React, {Component} from 'react';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component';
// class App extends React.Component{
//   state = {
//     name:"Aryan",
//     age:21,
//     learning:"React"
//   }
//   change(){

//     this.setState({
//       name:"Suhail",
//       age:22,
//       learning:"NodeJs"
//     });
//   }
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>{this.state.name}</p>
//           <p>{this.state.age}</p>
//           <p>{this.state.learning}</p>
//           <button onClick={()=>{this.change()}}>
//             Change Details
//           </button>
//         </header>
//       </div>
//     );
//   };

  
// }

// class App extends React.Component{
//   state = {
//     people : []
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users=>this.setState({people:users}));
//   }

//   render(){
//     return(
//       <div className='App'>
//         {
//           this.state.people.map(human =>(
//           <h1 key={human.id}>{human.name}</h1>
//         ))}
//       </div>
//     )
//   }
// }

// class App extends React.Component{
//   state = {
//     people:[
//     ]
//   };

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response=>response.json())
//     .then(user=>this.setState({people:user}));
//   }

//   render(){
//     return(
//       <div className='App'>
//         {
//           this.state.people.map(human=>(
//             <h1 key={human.id}>{human.name}</h1>
//           ))
//         }
//       </div>
//     )
//   }
// }

// class App extends React.Component{
//   state = {
//     people:[]
//   };

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response=>response.json())
//     .then(user=>this.setState({people:user}))
//   }

//   render(){
//     return(
//       <div className='App'>
//         <Cardlist people = {this.state.people}/>
//       </div>
//     )
//   }
// }

// export default App;

export default class App extends Component{

  state = {
    people:[],
    searchField:''
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(resposne=>resposne.json())
    .then(user=>this.setState({people:user}))
  }

  render(){
    const {people,searchField}=this.state
    const filterPeople = people.filter(user=>
      user.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className='App'>
        <h1>Missing Humans</h1>
        <SearchBox placeholder={"Search Humans"} searchChange={e=>this.setState({searchField:e.target.value})}/>
        <Cardlist people={filterPeople}/>
      </div>
    )
  }
}
