function Profile({ couleur, nom }) {
  return (
    <div className={`profile ${couleur}`}>
      {nom}
    </div>
  );
}

export default Profile;

// mobile: 1 signe par ligne
// tablet: 2 signe par lignes
// desktop: 4 signe par lignes
// 2022 = tigre
// 2021 = buffle
// 2020 = rat
