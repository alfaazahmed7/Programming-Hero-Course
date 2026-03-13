import './App.css'
import Counter from './counter';
import Batsman from './batsman';
import Bowler from './bowler';
import Friends from './friends';
import { Suspense } from 'react';
import Posts from './posts';
import Counters from './practice-task-01';
import ShowHideText from './practice-task-02';
import Users from './users';

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

const fethcPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}
function App() {
  const friendsPromise = fetchFriends();
  const postPromise = fethcPosts();
  const usersPromise = fetchUsers();

  const handleClick = () => {
    alert("button clicked");
  }

  const handleClick2 = (num) => {
    const newNum = num + 5
    alert(newNum);
  }

  return (
    <>
      <h3>Vite + React</h3>
      <Counters></Counters>
      <ShowHideText></ShowHideText>
      
      <Suspense fallback = {<h3>Users Data Are Loading...</h3>}>
        <Users usersPromise = {usersPromise}></Users>
      </Suspense>

      {/* <Counter></Counter>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={() => { handleClick2(10) }}>Click Here 2</button>

      <Batsman></Batsman>
      <Bowler></Bowler>

      <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback = {<h3>Posts are comming...</h3>}>
        <Posts postPromise = {postPromise}></Posts>
      </Suspense> */}
    </>
  )
}

export default App
