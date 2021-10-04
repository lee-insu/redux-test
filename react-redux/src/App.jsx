import Detail from "./routes/detail";
import Home from "./routes/home";
const { BrowserRouter, Route } = require("react-router-dom");


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route  path='/:id' component={Detail}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
