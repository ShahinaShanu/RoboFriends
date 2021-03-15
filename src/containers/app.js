import React,{Component} from 'react';
import Cardlist from '../components/cardlist';
import { robots } from '../robot'; //we can also use this local file of robolist array.
import Searchbox from '../components/searchbox';
import '../containers/app.css';
import Scroll from '../components/scroll';

class App extends Component
{

    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
   
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')//Using fetch API
        .then(response=>{
            return response.json();
        }).then(users=>this.setState({robots:users}));
    }

    onSearchChange =(event)=>{
            this.setState({searchfield:event.target.value})
    }

    render()
    {
        if(!robots.length){
            return <h1>Loading...</h1>
        }
        else{
            const {robots,searchfield}=this.state;
                const filteredrobos=robots.filter(robots=>{
                return robots.name.toLowerCase().includes(searchfield.toLowerCase());
               })
             return(
              <div className="tc">
             <h1 className="f1">Robofriends</h1>
              <Searchbox searchChange={this.onSearchChange}/>
              <Scroll>
              {/* Cardlist is a children of component scroll */}
             <Cardlist robots={filteredrobos}/>
             </Scroll>
             </div>);
            
            }
        }

    }
 export default App;