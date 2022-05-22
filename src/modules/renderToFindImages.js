import waldo from '../assets/images-to-find/waldo.png';
import odlaw from '../assets/images-to-find/odlaw.png';
import wenda from '../assets/images-to-find/wenda.png';
import wizard from '../assets/images-to-find/wizard.png';

const renderToFindImages = (thing) => {
  let imgToFind;
  if (thing === 'waldo') {
    const waldoImg = new Image();
    waldoImg.src = waldo;
    imgToFind = waldoImg;
  } else if (thing === 'odlaw') {
    const odlawImg = new Image();
    odlawImg.src = odlaw;
    imgToFind = odlawImg;
  } else if (thing === 'wendy') {
    const wendaImg = new Image();
    wendaImg.src = wenda;
    imgToFind = wendaImg;
  } else if (thing === 'wizard') {
    const wizardImg = new Image();
    wizardImg.src = wizard;
    imgToFind = wizardImg;
  }
  return imgToFind;
};

export default renderToFindImages;
