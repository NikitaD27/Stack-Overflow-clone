import { BrowserRouter as Router } from 'react-router-dom' 
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import InjectedCheckoutForm from "./paymentcomponent/CheckoutForm";

const stripePromise = loadStripe("pk_test_XNq4QkMFplHnYo6HDBFFquEq00amRgeDq1");

const steps = [
  {
    id: '0',
    message: 'Hey!',

    // This calls the next id
    // i.e. id 1 in this case
    trigger: '1',
  }, {
    id: '1',

    // This message appears in
    // the bot chat bubble
    message: 'you can ask me anything',
    trigger: '2'
  }, {
    id: '2',

    // Here we want the user
    // to enter input
    user: true,
    trigger: '3',
  }, {
    id: '3',
    message: " hi {previousValue}, how can I help you?",
    trigger: 4
  }, {
    id: '4',
    options: [
      
      // When we need to show a number of
      // options to choose we create alist
      // like this
      { value: 1, label: 'View Courses' },
      { value: 2, label: 'Some Tags that might help you' },

    ],
    end: true
  }
];

// Creating your own theme
const theme = {
  background: '#C9FF8F',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  botAvatar: "botavtar.jpg",
  floating: true,
};



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
      <ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="ChatBot"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
      {
            <Elements stripe={stripePromise}>
              <InjectedCheckoutForm />
            </Elements>
          }
      </div>
    );
  }



export default App;



