import { Outlet } from "react-router-dom";
import styles from "./components/Site.module.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PATH } from "./routes/router";

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavWrapper>
                        <NavLink to={PATH.ADIDAS}>ADIDAS</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PUMA}>PUMA</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.NIKE}>NIKE</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PRICES}>PRICES</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PROTECTED}>PROTECTED PAGE</NavLink>
                    </NavWrapper>
                </div>
                <div className={styles.content}>
                    <Outlet />
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
