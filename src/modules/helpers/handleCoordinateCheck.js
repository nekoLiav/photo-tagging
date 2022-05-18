const handleCoordinateCheck = (e) => {
  let found;
  if (e.target.classList.contains('current-map')) {
    const rect = e.target.getBoundingClientRect();
    const waldoX = 0.63;
    const waldoY = 0.33;
    const odlawX = 0.108;
    const odlawY = 0.43;

    if (
      e.x > (rect.width * waldoX + rect.x) * 0.95 &&
      e.x < (rect.width * waldoX + rect.x) * 1.05
    ) {
      if (
        e.y > (rect.height * waldoY + rect.y) * 0.8 &&
        e.y < (rect.height * waldoY + rect.y) * 1.2
      ) {
        found = 'Waldo';
      }
    } else if (
      e.x > (rect.width * odlawX + rect.x) * 0.95 &&
      e.x < (rect.width * odlawX + rect.x) * 1.05
    ) {
      if (
        e.y > (rect.height * odlawX + rect.y) * 0.8 &&
        e.y < (rect.height * odlawY + rect.y) * 1.2
      ) {
        found = 'Odlaw';
      }
    }
  }
  return found;
};

export default handleCoordinateCheck;
