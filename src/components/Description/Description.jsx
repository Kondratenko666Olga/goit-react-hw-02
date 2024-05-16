import styles from "./Description.module.css";

const Description = ({
    name,
    description,
}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.naming}>{name}</h1>
            <p className={styles.descr}>{description}</p>
        </div>
    )
}

export default Description;