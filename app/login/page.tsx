import styles from "./login.module.css"

export default function Login() {
    return (<div className={styles.main}>
        <div className={styles.loginContainer}>
            <h2>Code<span>X</span></h2>
            <div className="log">
                <h2 className={styles.login}>Login</h2>
                <h2 className={styles.sign}>Sign up</h2>

            </div>
            <form>
                <div className={styles.inputGroup}>
                    <span className={styles.icon}>📩</span>
                    <input type="email" placeholder="Email" required />
                </div>
                <div className={styles.inputGroup}>
                    <span className={styles.icon}>🔒</span>
                    <input type="password" placeholder="Password" required />
                </div>
                <div className={styles.options}>
                    <label><input type="checkbox" /> Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
            </form>
            <p className={styles.text}>Don't have an account? <a href="#">Register</a></p>
        </div>
    </div>)
}