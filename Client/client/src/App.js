import { BrowserRouter as Router } from 'react-router-dom' 
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users'
import ChatBot from 'react-simple-chatbot';

const steps = [
	{
		id: '0',
		message: 'Hey,How may I help you?',
		end: true
	}
];

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div className="App">
      <Router >
        <Navbar />
        <AllRoutes />
      </Router >
    <h1>Welcome to Stack Overflow</h1>
    <ChatBot steps={steps} />
  </div>
);
}


export default App;
