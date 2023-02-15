import { Link } from "react-router-dom";

const Home = () =>{
    return <>
    <div className="App">
      <header className="App-header">
        <h1>WELCOME TO THE CODING CHALLENGE</h1>
       <Link to='/register'><button className='mt-4 btn-reg'> Register here </button></Link>
      </header>
     
    </div>
    </>
}
export default Home;
