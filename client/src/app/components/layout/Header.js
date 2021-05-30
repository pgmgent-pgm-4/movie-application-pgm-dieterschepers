import MainNavigation from './MainNavigation';
import styles from './Header.module.scss';
import logo from '../../../assets/images/Logo.svg'
import {
    Link
} from "react-router-dom";
import * as Routes from '../../routes';
import { useAuth } from '../../contexts/firebase/auth.context';

const Header = () => {
    const { currentUser, signOut } = useAuth();

    return (
        <header className={styles.header}>
            <div className={styles.upperHeader}>
                <a href='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="260.094" height="61" viewBox="0 0 260.094 61">
                        <g id="Logo" transform="translate(1)">
                            <path id="iconfinder_video-record-film-movie_2205222" d="M37.88,3H0V34.567H37.88V25.1L50.507,31.41V3L37.88,12.47ZM9.47,25.1a6.313,6.313,0,1,1,6.313-6.313A6.312,6.312,0,0,1,9.47,25.1Zm15.783,0a6.313,6.313,0,1,1,6.313-6.313A6.312,6.312,0,0,1,25.253,25.1Z" transform="translate(208.587 2)" />
                            <text id="Videoland" transform="translate(0 33)" font-size="34" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="0">Videoland</tspan></text>
                            <text id="Lights_camera_action_" data-name="Lights, camera, action!" transform="translate(0 57)" font-size="16" font-family="Montserrat-Regular, Montserrat"><tspan x="0" y="0">Lights, camera, action!</tspan></text>
                        </g>
                    </svg>
                </a>
                <div className={styles.inputAndButtonWrap}>
                    <input type="text" placeholder='Search...' />
                    <div>
                        {/* <a className={styles.logInButton} href="#">Log in</a> */}
                        {!!currentUser
                            ? <button onClick={signOut}><img className={styles.user__avatar} src={currentUser.photoURL} alt={currentUser.email} />Logout</button>
                            : <Link to={Routes.AUTH_SIGN_IN}>Sign In</Link>
                        }
                        <a className={styles.signUpButton} href="#">Sign up</a>
                    </div>
                </div>
            </div>
            <MainNavigation />
        </header>
    );
};

export default Header;