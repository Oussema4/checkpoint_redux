import './App.css';
import Add from './components/Addtask';
import List from './components/Listatsk';

function App() {
  return (
    <div className="App">
     <h1 className="center">Todo Application</h1>
     
     <Add ></Add>
     <List></List>
     
    </div>
  );
}

export default App;
