//import React from 'react';
//import Movie from './Movie/Movie.js';
// import Time from './Clock';
//import Props from './props';
//import DynamicTime from './Lifecycle';
//import CoinTable from './component/coin-Table/Index.jsx';
//import data from './data/coins.json';
import React, { Component } from 'react'
//import GridExample from './index.jsx'
//import PostList from './component/postList'
//import File from './JsonTask/File';
// import Dest from './Destruction';
// import DestClass from './DestClass';
import Scroll from './Jason-ScrollTask/Scroll'
import Hoc from './Jason-ScrollTask/Hoc'
///function App() {
//return (
//<div className="App">
/* <Time text="look here" /> */
/* <DynamicTime /> */

//<CoinTable data={data} />

//</div>
//);
//}
class App extends Component {
    render() {
        return (
            <div className='App'>
                <Scroll />
                {/* <PostList /> */}
                {/* <File />  */}
                {/* <Dest name="John Cena" title="vinod" wish="good morning."
                json = "json code is a very complex." aggrid="Ag-grid is provide json file into a table format." />
                <DestClass title="this is a class." destructure="it is a convinent way to"
                //hai="wish a greeting," person=" to the person." */}
                />
                {/* <GridExample /> */}
            </div>
        )
    }
}
App = Hoc(App)
export default App


