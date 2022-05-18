import renderClickCircle from './renderClickCircle';

const handleCoordinateCheck = (e) => {
  if (e.target.classList.contains('current-map')) {
    const rect = e.target.getBoundingClientRect();
    renderClickCircle(rect.width * 0.633 + rect.x, rect.height * 0.33 + rect.y);
  }
};

export default handleCoordinateCheck;
