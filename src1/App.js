import logo from './logo.svg';
import Dogs from "./components/Dogs"
import './App.css';

function App() {
  return (
        <div>
          <Dogs name={"Runa"} age={4} breed={"pit"} caretaker={"Ryan"}/>
          <Dogs name={"Hunter"} age={3} breed={"bull"} caretaker={"Vic"}/>
          <Dogs name={"Skadi"} age={2} breed={"yorkshire"} caretaker={"Sarah"}/>
          <Dogs name={"Odie"} age={9} breed={"nice"} caretaker={"John"}/>
          <Dogs name={"Mickey"} age={4} breed={"pit"} caretaker={"Steve"}/>
          <h3>is hte best dog</h3>
        </div>
  );
}

export default App;
