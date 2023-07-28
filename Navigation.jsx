
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div>
            <img src="/images/logo.png" alt="" />

        </div>
        <ul> 
            <li>home</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
    </nav>
  )
}

export default Navigation;
