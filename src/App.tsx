import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
    return(
        <div className="overflow-hidden">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                
            </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App;