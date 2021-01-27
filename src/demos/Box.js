function FilmCategory({ children }) {
  return (
    <div>
      <h2 className="text-blue-700 text-xl">{props.titre}</h2>
      <div className="flex flex-wrap">
        {/* ici apparraissent mes items de films */}
        {children}
      </div>
    </div>
  );
}

export default FilmCategory;
