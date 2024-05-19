import './style.css';

let promiseArray = [];

promiseArray.push(import('./slider-popular/popular-slider'));
promiseArray.push(import('./slider-popular/pop-slider.css'));
promiseArray.push(import('./slider-popular/pop-slider-mobile.css'));
promiseArray.push(import('./feedback/feedback-send'));
promiseArray.push(import('./more-neon/more-neon'));
promiseArray.push(import('./more-neon/data_products'));
promiseArray.push(import('./Our advantages/advantagesImg'));
promiseArray.push(import('./social_block/social_block_img'));
promiseArray.push(import('./our-project/our-project'));
promiseArray.push(import('./about-us/about-us.js'));

Promise.all(promiseArray)
  .then(() => {
    console.log('All modules have been loaded.');
  })
  .catch((error) => {
    console.error('An error occurred while loading modules:', error);
  });