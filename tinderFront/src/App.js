// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButton from './SwipeButton'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chats from './Chats'
import ChatScreen from './ChatScreen'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/chat/:person'>
            <Header backbutton='/chat'/>
            {/* <Chats/> */}
            <ChatScreen/>
            {/* <h1>I am a chat page</h1> */}
          </Route>
          <Route path='/chat'>
            <Header backbutton='/'/>
            <Chats/>
            {/* <h1>I am a chat page</h1> */}
          </Route>
          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeButton />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
