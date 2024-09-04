import styles from "./Banner.module.css";

export default function Banner() {
	return (
		<div className={styles.banner}>
			<div className={styles.apresentacao}>
				<h1 className={styles.titulo}>Olá, Mundo!</h1>

				<p className={styles.paragrafo}>
					A School é um espaço dedicado ao aprendizado e desenvolvimento de
					software, focando em oferecer recursos e conteúdo de qualidade para aspirantes a
					desenvolvedores.
				</p>
			</div>

			<div className={styles.imagens}>
				<img
					className={styles.circuloColorido}
					src={"./school.jpeg"}
					aria-hidden={true}
					alt=""
				/>
			</div>
		</div>
	);
}
