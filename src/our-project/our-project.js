import edinorog from './OUR-PROJECT-IMG/единорог 200х400мм   2000тр  .jpg';
import morojenoe from './OUR-PROJECT-IMG/морожено 200х400мм   2000тр.jpg';
import kolovorol from './OUR-PROJECT-IMG/20231106_224430.jpg';
import listok from './OUR-PROJECT-IMG/20240314_002108.jpg';
import pivo from './OUR-PROJECT-IMG/20231106_224847.jpg';
import gladkoct from './OUR-PROJECT-IMG/IMG_20231115_162512_239.jpg';
import malina from './OUR-PROJECT-IMG/20231202_160817.jpg';
import grilnay from './OUR-PROJECT-IMG/20231230_185204.jpg';
import jungle from './OUR-PROJECT-IMG/20240130_195457.jpg';
import kiki from './OUR-PROJECT-IMG/20240207_184254.jpg';
import matr from './OUR-PROJECT-IMG/20240225_132526.jpg';

// Список изображений
const images = [edinorog, morojenoe, kolovorol, listok, pivo, gladkoct, malina, grilnay, jungle, kiki, matr];

// Контейнер для сетки
const gridContainer = document.getElementById('grid-project');

// Создаем изображения и добавляем их в контейнер 
images.forEach((imageSrc) => {
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', imageSrc);
    imageElement.classList.add('grid-image');
    gridContainer.appendChild(imageElement);
});

