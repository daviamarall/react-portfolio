import { FiSun, FiMoon } from 'react-icons/fi';

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`p-5 flex justify-end items-center ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className={`p-2 rounded-full transition 
          ${darkMode ? 'bg-zinc-700 text-white hover:bg-zinc-600' : 'bg-zinc-200 text-black hover:bg-zinc-300'}`}
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>
    </nav>
  );
}

export default Navbar;
