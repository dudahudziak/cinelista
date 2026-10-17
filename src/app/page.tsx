import { getTrendingMovies } from "./lib/api/tmdb";
import Grid from "./components/Grid";
import Title from "./components/title";

export default async function Home(){
  const filmes = await getTrendingMovies();
  return (
    <>
      <Title title="Filmes em Destaque" />
      <Grid filmes={filmes} />
    </>
  );
}