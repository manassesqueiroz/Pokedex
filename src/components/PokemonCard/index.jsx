import styles from "../cssDAcoisa/Card.module.css"

function PokemonCard({ name , imagem , types}) {
  return ( 
    <div className={styles.card}>
    <div className={styles.imagem}>  <img src={imagem} height={80}  /></div>

        <div className={styles.propriet}><p>{name}</p>    {types[0].type.name} </div> 
        <div className={styles.propriet1}>   {types[0].type.name} </div> 
       
              

    </div>
   );
}

export default PokemonCard;
