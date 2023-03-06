import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import photo from "assets/Photo.jpeg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Felipe Fernandes!
            </h3>

            <img
                src={photo}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

        <p className={styles.paragrafo}>
                Olá tudo bem? Eu sou um desenvolvedor Front-end. E estou feliz de ter ver por aqui !!
            </p>
            <p className={styles.paragrafo}>
                Minha historia com a programação começou quando eu eu estava clicando aleatoriamente com o mouse pelo site, e abri a ferramenta do desenvolvedor. Foi ai que comecei a pesquisar sobre o assunto.
                Fiz logica de Programação na Alura, e comecei meus estudos lá mesmo, com <i> html, css, e javascript</i>.
            </p>
            <p className={styles.paragrafo}>
                Logo que completei o ensino médio, entrei em um curso tecnólogo de Analise e Desenvolvimento de Sistemas, através da Rede de Ensinos Doctum, e estou cursando até o presente momento <b>06/03/2023</b>
            </p>
            <p className={styles.paragrafo}>
                Ainda não tive nenhuma experiencia como <b><i>Desenvolvedor Front-End</i></b> , mas tenho feito vários projetos para consolidar o meu conhecimento em ReactJS. 
            </p>
        </PostModelo>
    )
}