import React from "react";
import styles from "./Card.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h2 className={styles["about-header"]}>
        RICK AND MORTY: Explorando los límites entre la ciencia y la programación
      </h2>
      <p className={styles.about}>
        Una serie de televisión que ha capturado la atención de millones de personas en todo el mundo es "Rick and Morty". Sigue las aventuras de un científico genio excéntrico y su nieto Morty. Juntos, exploran el multiverso y se encuentran con situaciones inverosímiles que desafían la lógica y la imaginación. Aunque la serie se enfoca principalmente en la ciencia ficción y la comedia, hay episodios que tocan temas relacionados con la programación y la tecnología avanzada.
      </p>
      <p className={styles.about}>
        Rick, como experto en ciencia y tecnología, muestra habilidades impresionantes para crear y manipular dispositivos y máquinas increíbles. Aunque no se profundiza en los detalles técnicos, se puede inferir que Rick posee conocimientos en programación y codificación para diseñar estas innovadoras invenciones. La serie juega con conceptos como la inteligencia artificial, la simulación de la realidad y la creación de universos virtuales, lo que ofrece un terreno fértil para que los amantes de la programación reflexionen sobre los límites de la tecnología y su impacto en nuestras vidas.
      </p>
      <p className={styles.about}>
        En nuestra página "Acerca de", exploramos las intersecciones entre la programación y la cultura popular, y "Rick and Morty" es una de esas joyas que demuestran cómo los conceptos científicos y tecnológicos pueden aparecer incluso en el entretenimiento más inesperado. Si eres un programador curioso o un entusiasta de la tecnología, ¡seguro encontrarás inspiración y diversión en los episodios de "Rick and Morty" mientras exploran mundos paralelos y desafían los límites de la realidad!
      </p>
      <p className={styles.about}>
        ¡Únete a nosotros en esta fascinante aventura en la que exploramos la conexión entre la programación, la ciencia y la cultura pop!
      </p>
    </div>
  );
}