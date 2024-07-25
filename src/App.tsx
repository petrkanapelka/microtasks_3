import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageOne } from "./components/pages/Adidas";
import { PageThree } from "./components/pages/Nike";
import { PageTwo } from "./components/pages/Puma";
import styles from "./components/Site.module.css";
import { Error404 } from "./components/pages/Error404";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Model } from "./components/Model";
import { adidasArr } from "./components/pages/Adidas";
import { pumaArr } from "./components/pages/Puma";
import { nikeArr } from "./components/pages/Nike";

const PATH = {
    MAIN: '/',
    PATH1: '/adidas',
    PATH2: '/puma',
    PATH3: '/nike',
    ERROR: '/error404',
} as const



function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavWrapper>
                        <NavLink to={PATH.PATH1}>ADIDAS</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PATH2}>PUMA</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PATH3}>NIKE</NavLink>
                    </NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={PATH.MAIN} element={<Navigate to={PATH.PATH1} />} />
                        <Route path={PATH.PATH1} element={<PageOne />} />
                        <Route path={PATH.PATH2} element={<PageTwo />} />
                        <Route path={PATH.PATH3} element={<PageThree />} />
                        <Route path={PATH.ERROR} element={<Error404 />} />

                        <Route path='/:model/:id' element={<Model items={adidasArr} />} />

                        <Route path="/*" element={<Navigate to={PATH.ERROR} />} />
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}



const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;
    &>a{
        text-decoration: none;
        color: #1e3786;
    }
    &>a.active{
        text-decoration: none;
        color: #03eaff;
    }
    &>a:hover{
        color: steelblue;
    }
`

export default App;
