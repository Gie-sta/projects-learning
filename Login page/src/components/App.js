
import Image from './Image';
import LoginForm from './LoginForm'
import './App.css'

const App = () => {

  return (
    <div className="container">
      <div id="image">
        <Image />
      </div>
      <img className='line-img' src="./line.jpg" alt="" />
      <div id="form-page">
        <LoginForm />
      </div>


    </div>
  );
}

export default App;
