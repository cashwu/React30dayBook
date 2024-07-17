import styles from "./Footer.module.css"
import reactLogo from "../images/logo192.png"

export default function Footer() {

    return (
        <footer className={ styles['app-footer'] }>
            Cash @ Copyright 2024
            <img src={reactLogo} className="footer-logo" alt="logo" />
        </footer>
    )
}