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
                </div>
                <div className={styles.content}>
                    <Outlet />
                    {/* <Routes>
                        <Route path={PATH.MAIN} element={<Navigate to={PATH.ADIDAS} />} />
                        <Route path={PATH.ADIDAS} element={<Adidas />} />
                        <Route path={PATH.PUMA} element={<PageTwo />} />
                        <Route path={PATH.NIKE} element={<PageThree />} />
                        <Route path={PATH.ERROR} element={<Error404 />} />
                        <Route path={PATH.PRICES} element={<Prices />} />

                        <Route path='/:model/:id' element={<Model items={adidasArr} />} />

                        <Route path="/*" element={<Navigate to={PATH.ERROR} />} />
                    </Routes> */}
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
