import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="p-10">
      <h2 className="text-3xl mb-4 text-gray-900 dark:text-gray-200">Contato</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Entre em contato comigo pelo LinkedIn, GitHub ou pelo Cel/Whatsapp. Estou aberto a novas conexões e oportunidades!
      </p>
      <p className="flex items-center space-x-2 mt-4">
        <FaLinkedin className="text-blue-600 dark:text-blue-400" size={24} />
        <a
          href="https://www.linkedin.com/in/daviamarallz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          linkedin.com/in/daviamarallz
        </a>
      </p>
      <p className="flex items-center space-x-2 mt-2">
        <FaGithub className="text-gray-800 dark:text-gray-200" size={24} />
        <a
          href="https://github.com/daviamarall"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:underline"
        >
          github.com/daviamarall
        </a>
      </p>
      <p className="flex items-center space-x-2 mt-2">
        <FaWhatsapp className="text-green-600 dark:text-green-400" size={24} />
        <a href="https://api.whatsapp.com/send?phone=5534999900889" className="text-green-600 dark:text-green-400 hover:underline">
          +55 34 99990-0889
        </a>
      </p>
    </section>
  );
}

export default Contact;