import Grid from "../../components/Grid"
import Title from "../../components/title"
import { getPopularMovies } from "../../lib/api/tmdb"

export const dynamic = "force-static"

const Favoritos = async () => {
  const filmes = await getPopularMovies()
  return (
    <>
    <Title title="Filmes Favoritos" />
    <Grid filmes={filmes}/>
    </>
  )
}

export default Favoritos