import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './assets/Todo'
import Actor from "./assets/actor"
import Singer from "./assets/singer"

function App() {
  const actors = ["bappaja", "omor sunny", "salman shah"];
  const singers = [
    {id: 1, name: "the weekend", age: 68},
    {id: 2, name: "tame impala", age: 28},
    {id: 3, name: "travis scott", age: 32}
  ];
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }

      {
        singers.map(singer => <singer singer = {singer}></singer>)
      }

      {/* <Sports></Sports>
      <Sports></Sports>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Developer name="robiul" tech="javascript"></Developer>
      <Developer name="kobiul" tech="python"></Developer>
      <Developer name="tabana" tech="c++"></Developer>
      <Laptop name="Macbook Air" processor="iphone processor"></Laptop>
      <Laptop name="samsung" processor="intel core i5"></Laptop>
      <Laptop name="oppo" processor="amd ryzen 5"></Laptop>
      <Player name="tamim" runs="5000"></Player>
      <ToDo task={"Learn React"} isDone = {true}></ToDo>
      <ToDo task={"revise js"} idDone = {false}></ToDo>
      <ToDo task={"Learn React"} idDone = {true}></ToDo> */}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function Developer(props) {
  console.log(props);
  return (
    <div style={{
      border: "2px solid green",
      borderRadius: "20px"
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Laptop(laptops) {
  return (
    <div style={{
      border: "3px solid red",
      borderRadius: "20px"
    }}>
      <h3>Laptop Name: {laptops.name}</h3>
      <p>Processor: {laptops.processor}</p>
    </div>
  )
}

// const {name, runs} = {name: "tamim", runs: "5000"}
function Player({ name, runs }) {
  return (
    <div style={{
      border: "3px solid yellow",
      borderRadius: "20px"
    }}>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

function Person() {
  const age = 17;
  const name = "jolil";
  return (
    <p>I am a person {name} {age}</p>
  )
}

function Sports() {
  return (
    <div>
      <h2>Cricket</h2>
      <p>Winning and Loosing</p>
    </div>
  )
}

export default App