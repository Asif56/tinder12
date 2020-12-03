import React,{useState,useEffect} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import { SwipeableDrawer } from '@material-ui/core'
import database from './firebase'
import { Unsubscribe } from '@material-ui/icons'
// import axios  from './axios'
function TinderCards() {
  const [people, setPeople] = useState([
  ]);

  useEffect(() => {

const unsubscribe = database.collection('people').onSnapshot(snapshot=>(
     setPeople(snapshot.docs.map(doc=>doc.data()))
   ))
   return ()=>{
     unsubscribe();
   }
    // async function fetchData(){
    //   const req= await axios.get('/tinder/cards')
    //   setPeople(req.data)
    // }
    // fetchData();
  }, []);

console.log(people)
  const Swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  }
  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {
          people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => Swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
              >
              <div style={{ backgroundImage: `url(${person.imgUrl})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))
        }
      </div>
    </div>
  )
}

export default TinderCards
