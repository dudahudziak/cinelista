import { filme } from "../../types/types";
import Card from "../Card";
import styles from "./Grid.module.css";

type Props = {
    filmes: filme[];
}

const Grid = ({filmes} : Props) => {
    return (
        <section className={styles.grid}>
           {filmes.map((filme) => <Card key={filme.id} filmes={filme} />)}
        </section>
    )
}
export default Grid;