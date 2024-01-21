import './App.css';

function App() {
  const name = "Hello World";
  const obj = {name: "Hello World Object"}
  const data = ['We', 'are', 'United']
  const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}]
  const complex = [{company: 'XYZ', jobs: ['Javascript','React']}, {company: 'ABC', jobs: ['AngularJs','Ionic']}]
  
  return (
    <div className="App">
      <h1>React Assignment 2</h1>      
      <h3>{name}</h3>
      <h3>{obj.name}</h3>
      <div>{data.map((v,i)=> <p key={i}>{v} </p>)}</div>
      <div>{list.map((v,i)=> <p key={i}>{v.name}</p>)}</div>
      <p>{complex.map((v,i)=> <p key={i}>{v.company}</p>)}</p>

    </div>
  );
}

export default App;
