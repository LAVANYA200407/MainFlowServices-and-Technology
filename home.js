import  React from "react"
import {useLocation} from 'react-router-dom';

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">

            <h1>hello {location.state.id} and welcome</h1>
            
        </div>
    )
}
export default Home