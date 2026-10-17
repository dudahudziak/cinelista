import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <Link href="/" className={styles.header_logo}>
                    <h1>Cinelista</h1>
                </Link>
            </div>
            <nav className={styles.header_nav}>
                <Link href="/">Início</Link>
                <Link href="/filmes/em-alta">Em Alta</Link>
                <Link href="/filmes/populares">Populares</Link>
                <Link href="/filmes/favoritos">Favoritos</Link>
            </nav>
        </header>
    );
}