import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./Detalhes.module.css";
import { getMoviesDetails } from "../../lib/api/tmdb";


type Props = {
    params: Promise<{
        id: number;
    }>
}

export const generateMetadata = async ({params}: Props) => {
    const {id} = await params;
    const details = await getMoviesDetails(id);

    if(!details){
        return;
    }
    return {
        title: '${details.title} | Cinelista',
        description: details.overview,
        openGraph: {
            title: '${details.title} | Cinelista',
            description: details.overview,
            images: ['${process.env.NEXT_PUBLIC_TMDB_API_URL}${details.poster_path}'],
        }
    }
}

const DetalheFilme = async ({params}: Props) => {
    const {id} = await params;
    
    const details = await getMoviesDetails(id);

    if(!details){
        return notFound();
    }

    const {title, overview, poster_path} = details;


    return (
        <div className={styles.detalhes}>
            <div className={styles.detalhes_container}>
            <Link className={styles.detalhes_voltar} href="/">
                Voltar
            </Link>
            <section>
                <figure>
                    <img className={styles.detalhes_image} 
                src={`${process.env.NEXT_PUBLIC_TMDB_API_URL}${poster_path}`} 
                    alt={`Poster do Filme: ${title}`} />
                </figure>
            </section>
            <article className={styles.detalhes_info}>
                <h2>{title}</h2>
                <p>{overview}</p>
            </article>
            </div>
        </div>
    )
}

export default DetalheFilme;