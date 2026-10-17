import Grid from "../../components/Grid";
import Title from "../../components/title"
import { getPopularMovies } from "../../lib/api/tmdb";

export const revalidate = 86400; 

const FilmesPopulares = async () => {
  const filmes = await getPopularMovies();
  return (
    <>
    <Title title="Filmes Populares" />
    <Grid filmes={filmes}/>
    </>
  )
}

export default FilmesPopulares