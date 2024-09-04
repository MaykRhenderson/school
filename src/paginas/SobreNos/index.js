import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMim() {
	return (
		<PostModelo fotoCapa={fotoCapa} titulo="Sobre nós">
			<h3 className={styles.subtitulo}>Olá, somos a School!</h3>

			<img src={"./school2.jpeg"} alt="Foto" className={styles.fotoSobreMim} />

			<p className={styles.paragrafo}>
				A "School" é uma plataforma dedicada ao ensino e à capacitação na área de
				desenvolvimento de software, criada com a missão de democratizar o acesso ao
				conhecimento técnico e promover o crescimento profissional de desenvolvedores de
				todos os níveis. Acreditamos que a educação é a chave para transformar carreiras e,
				por isso, nos comprometemos a fornecer conteúdos de alta qualidade, que vão desde o
				básico até temas avançados e emergentes no mundo da tecnologia.
			</p>
			<p className={styles.paragrafo}>
				Nossa equipe é composta por profissionais experientes e apaixonados por compartilhar
				conhecimento. Estamos constantemente atualizando e expandindo nosso conteúdo para
				garantir que nossos alunos tenham acesso às últimas tendências e melhores práticas
				da indústria. Seja você um iniciante buscando dar os primeiros passos na programação
				ou um profissional experiente desejando aprofundar seus conhecimentos em novas
				tecnologias, a "School" oferece recursos personalizados para atender às suas
				necessidades.
			</p>
			<p className={styles.paragrafo}>
				Acreditamos que o aprendizado deve ser uma experiência interativa e envolvente. Por
				isso, além de artigos e tutoriais detalhados, oferecemos projetos práticos,
				exercícios desafiadores e oportunidades de colaboração com outros alunos. Queremos
				que cada membro da nossa comunidade se sinta motivado e apoiado em sua jornada de
				aprendizado.
			</p>
			<p className={styles.paragrafo}>
				Na "School", também valorizamos a importância de uma educação acessível e inclusiva.
				Nossos materiais são projetados para serem compreensíveis por todos,
				independentemente do seu background ou nível de conhecimento prévio. Trabalhamos
				continuamente para criar um ambiente de aprendizado seguro e acolhedor, onde todos
				são bem-vindos para explorar, experimentar e crescer.
			</p>
			<p className={styles.paragrafo}>
				Além disso, entendemos que o desenvolvimento de software não é apenas sobre código,
				mas também sobre criatividade, resolução de problemas e trabalho em equipe. Por
				isso, nossos cursos e recursos vão além das linguagens de programação, abordando
				também metodologias ágeis, design de software, e habilidades interpessoais
				necessárias para se destacar no mercado de trabalho.
			</p>
		</PostModelo>
	);
}
