function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="p-5 flex justify-between items-center bg-zinc-800">
      <h1 className="text-xl font-bold">Meu Portfólio</h1>
      <div className="flex gap-4">
        <button onClick={() => setDarkMode(!darkMode)} className="bg-zinc-700 px-3 py-1 rounded">
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;