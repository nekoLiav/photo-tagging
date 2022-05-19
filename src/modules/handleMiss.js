import { main } from './globals';

const handleMiss = (menuClickEvent) => {
  const miss = document.createElement('p');
  miss.className = 'miss';
  miss.textContent = 'Keep looking!';

  miss.style.left = `${menuClickEvent.x.toString()}px`;
  miss.style.top = `${menuClickEvent.y.toString()}px`;

  main.append(miss);

  setTimeout(() => {
    miss.remove();
  }, 2000);
};

export default handleMiss;
