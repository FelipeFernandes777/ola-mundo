import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/Photo.jpeg' 

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

            
                <p className={styles.paragrafo}>
                        Olá, me chamo Felipe Fernandes, sou Desenvolvedor Front-end. Este é um projeto de um blog em formato SPA <i className={styles.italicText}> "Single Page Application"</i> .
                        Usando <i className={styles.italicText}> Css Modules</i> e também o <i className={styles.italicText}>React Router Dom</i> para o gerenciamento de rotas
                </p>

            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            </div>
        </div>
    )
}