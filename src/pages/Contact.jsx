import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="p-10">
      <h2 className="text-3xl mb-4">Contato</h2>
      <p>
        Entre em contato comigo pelo LinkedIn ou pelo telefone. Estou aberto a novas conexões e oportunidades!
      </p>
      <p className="flex items-center space-x-2 mt-4">
        <FaLinkedin className="text-blue-600" size={24} />
        <a
          href="https://www.linkedin.com/in/daviamarallz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          linkedin.com/in/daviamarallz
        </a>
      </p>
      <p className="mt-2">
        📞{" "}
        <a href="tel:+5534999900889" className="hover:underline">
          +55 34 99990-0889
        </a>
      </p>
    </section>
  );
}

export default Contact;
