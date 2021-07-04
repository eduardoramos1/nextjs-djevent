import styles from "./../styles/Footer.module.css"

import Link from "next/dist/client/link"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; DJ eventos 2021</p>
            <p>
                <Link href="/about">Sobre este projeto</Link>
            </p>
        </footer>
    )
}
