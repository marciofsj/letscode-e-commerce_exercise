import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";

import './global.css'
import { AppRoutes } from "./routes/Approutes";


export function App() {
    return (
      <BrowserRouter>
        <Header/>
        <Menu/>
        <AppRoutes/>
      </BrowserRouter>
    )
}
