import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import myPhoto from "assets/my-photo.jpg";

export default function Banner() {
	return (
		<div className={styles.banner}>
			<div className={styles.apresentacao}>
				<h1 className={styles.titulo}>Olá, Mundo!</h1>

				<p className={styles.paragrafo}>
					Boas vindas ao meu espaço pessoal! Eu sou Mayk Rhenderson,
					aluno de Front-end da Alura. Aqui compartilho vários
					conhecimentos, espero que aprenda algo novo :)
				</p>
			</div>

			<div className={styles.imagens}>
				<img
					className={styles.circuloColorido}
					src={circuloColorido}
					aria-hidden={true}
					alt=""
				/>

				<img
					className={styles.minhaFoto}
					src={myPhoto}
					alt="Foto do Mayk Rhenderson"
				/>
			</div>
		</div>
	);
}
