import NavBar from "./App"
import {Route, Routes, Outlet, useParams } from 'react-router-dom'
import AnFooter from "./component-footer/an-footer"
import Main from "./component-info/anthony-main"
import InfoSm from "./component-info-symbols/info-symbols"
import BrdNotes from "./projects-info/brd-notes"
import Projects from "./projects-info/brd-notes"
import { ABout } from "./component-personal/about-an"

export default function App2() {

    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={ <Main/> }/>
            </Routes>
        </>
    )
}