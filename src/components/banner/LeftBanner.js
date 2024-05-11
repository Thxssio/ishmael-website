import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Empresário.", "Advogado.", "Músico."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">E ai, tchê</h4>
        <h1 className="text-6xl font-bold text-white">
          Ishmael <span className="text-designColor capitalize">Vieira</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          Sou <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Ishmael Vieira, de 36 anos, é natural de Santa Maria/RS e cristão. Casado há 16 anos com a psicóloga Gabriela Weissheimer, pai de três filhos. Advogado, empresário, músico e professor, Vieira tem uma carreira diversificada que abrange direito, negócios, música e ensino, todas interligadas em sua trajetória. Em 2022, concluiu seu mestrado em Direito pela UNISC. Residente em sua cidade natal, ele se lançou como pré-candidato a vereador para as eleições de 2024, buscando aliar suas habilidades e convicções.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner