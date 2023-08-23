import {  Route, Routes } from "react-router";
import HomeContainer from "../containers/HomeContainer";
import AppContainer from "./AppContainer";


const AppRoutes= () => {
    return(
        <Routes> 
            <Route path="/" element={<AppContainer/>}>
                <Route index element={<HomeContainer/>}/>
            </Route>
        </Routes>
    )
}
export default AppRoutes;