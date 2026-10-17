import Link from "next/link";
import { filme } from "../../types/types";
import styles from "./Card.module.css";
type Props = {
    filmes: filme;
}

const Card = ({ filmes }: Props) => {
    const {id, title, overview, poster_path, vote_average} = filmes;
    const resume = overview.length > 100 ? `${overview.substring(0, 100)}...` : overview;
    return (
        <div className={styles.card}>
            <Link href={`/filmes/${id}`}>
                <img className={styles.card_poster} 
                src={`${process.env.NEXT_PUBLIC_TMDB_API_URL}${poster_path}`} 
                alt={`Poster do Filme ${title}`} width="300" height="200" />
                <div className={styles.card_info}>
                    <h3 className={styles.card_title}>{title}</h3>
                    <p className={styles.card_description}>{resume}</p>
                    <p className={styles.card_description}>Nota: {vote_average}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;