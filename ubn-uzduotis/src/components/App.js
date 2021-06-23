
import Image from './Image';
import LoginForm from './LoginForm'
import './App.css'

function App() {

  return (
    <div className="container">
      <div id="image">
        <Image />
      </div>
      {/* <hr id='v-line'></hr> */}
      <img className='line-img' src="./line.jpg" alt="" />
      <div id="formPage">
        <LoginForm />
      </div>


    </div>
  );
}

export default App;
