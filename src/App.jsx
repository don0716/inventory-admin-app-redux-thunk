import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Inventory from "./pages/Inventory";
import RemainingItems from "./pages/RemainingItems";
import RemovedItems from "./pages/RemovedItems";
import AddNewItems from "./pages/AddNewItems";

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
              <li>
                <Link to="/removed">Removed Items</Link>
              </li>
              <li>
                <Link to="/remaining">Remaining Items</Link>
              </li>
              <li>
                <Link to="/">Add New Items</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/remaining" element={<RemainingItems />} />
            <Route path="/removed" element={<RemovedItems />} />
            <Route path="/" element={<AddNewItems />} />
          </Routes>


        </div>
      </Router>
    </div>
  );
}

export default App;
