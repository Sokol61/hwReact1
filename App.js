import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App() {
  const username = 'Eugene';
  return (
    <div className="App">
 <h1>Hello {username}</h1>

 <Mesaga text ='learning'/>
 
 <Message text = 'Hello' />
 
 <Message text = 'How are you' />
 
 <Message text = 'would be nice to see you again' />
     </div>
  );
}

function Mesaga ({ text }) {

  return (
<div className="message">
    <h2>new message about {text}</h2>
    <p>New text for paragraph</p>
    <a href='####'>Read message</a>
</div>
  )
  
}









export default App;
