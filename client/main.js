// react side code 

import React,{Component}  from 'react';
import ReactDOM  from 'react-dom';
import axios from 'axios';
import { RingLoader,ClimbingBoxLoader } from "react-spinners";
import  ImageList from './components/ImageList';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { Images: [], loading: true };
    }
    componentWillMount(){
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0.json').then((res)=>
        
        this.setState({Images:res.data.data})
    )
    }
    render(){
        if(this.state.Images.length>0)
        {
            return (
                <div>
                    Metero React
            <ImageList images={this.state.Images} />
                </div>
            );
           
        }
        else
        {

            return <div style={{ alignContent: "center", width:" 200" ,marginToptop:' - 200px ',marginTop: '200px', marginLeft: "405px" }}>
                <RingLoader size={200} color={"#123abc"}  loading={this.state.loading} />
              </div>;
        }
      

    }
 
};


Meteor.startup( ()=>{
    ReactDOM.render(<App />, document.querySelector('.react'));
});
