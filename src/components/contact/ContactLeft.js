import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ishmael Vieira</h3>
        <p className="text-lg font-normal text-gray-400">
          Empresario | Advogado | Músico
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Mestre em Direitos Sociais e Políticas Públicas pelo Programa de Pós-Graduação da Universidade de Santa Cruz do Sul (UNISC); Pós Graduado em Ciências Criminais pela Universidade Luterana do Brasil (ULBRA); Graduado em DIREITO pela Faculdade de Direito de Santa Maria - FADISMA. Advogado nas áreas Cíveis e Penais com ênfase em audiências e sustentações orais.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+55 55 32223708</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ishmaelvieira@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Encontre me</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft