'use strict';

const adverisementBlock = document.querySelector('.advertisement');

const fadeBottom = document.querySelector('.advertisement__fade-bottom');
const goblet = document.querySelector('.advertisement__goblet');
const decorBottom = document.querySelector('.advertisement__decor-bottom');
const decorTop = document.querySelector('.advertisement__decor-top');
const fansBlockLeft = document.querySelector('.advertisement__fans-block-left');
const fansBlockRight = document.querySelector('.advertisement__fans-block-right');
const textOne = document.querySelector('.advertisement__text-one');
const textGame = document.querySelector('.advertisement__text-game');
const textToGlory = document.querySelector('.advertisement__text-to-glory');
const textBlockOnegame = document.querySelector('.advertisement__text-block-one-game');
const teamEmblemLeft = document.querySelector('.advertisement__team-emblem-left');
const teamEmblemRight = document.querySelector('.advertisement__team-emblem-right');
const prevideoBackground = document.querySelector('.advertisement__prevideo-background');
const watchHotspot = document.querySelector('.advertisement__watch-hotspot-btn');
const hotspotButtonContainer = document.querySelector('.advertisement__hotspot-button-container');
const advertVideoContainer = document.querySelector('.advertisement__video-container');
const advertVideo = document.querySelector('.advertisement__video');
const playVideoButton = document.querySelector('.advertisement__play-video');
const closeAllButton = document.querySelector('.advertisement__close-all');

closeAllButton.addEventListener('click', () => {
  adverisementBlock.style.display = 'none';
});

playVideoButton.addEventListener('click', () => {
  advertVideo.play();
  playVideoButton.style.visibility = 'hidden';
});

watchHotspot.addEventListener('click', () => {
  hotspotButtonContainer
    .style.visibility = 'hidden';

  advertVideoContainer
    .style.visibility = 'visible';
});

const animationTimeLine = new TimelineLite();

const startAnimation = () => {
  document.querySelector('body').style.cssText += 'overflow: hidden;';
  adverisementBlock.style.display = 'flex';

  animationTimeLine
    .fromTo(fadeBottom, 2, { autoAlpha: 0 }, { autoAlpha: 1 })
    .fromTo(goblet, 2, {
      y: window.innerHeight,
    },
    {
      y: 63,
    })
    .fromTo(decorBottom, 1.8, {
      y: window.innerHeight,
    }, {
      y: window.innerHeight / 2 - window.innerHeight * 0.25,
    }, '-=0.6')
    .fromTo(decorTop, 1.8, {
      y: -window.innerHeight,
    }, {
      y: -100,

    }, '-=1.2')
    .fromTo(fansBlockLeft, 1, {
      xPercent: -100,
    }, {
      xPercent: 0,
      visibility: 'visible',

    })
    .fromTo(fansBlockRight, 1, {
      xPercent: 100,
    }, {
      xPercent: 0,
      visibility: 'visible',

    }, '-=1')

  // text one game to glory

    .to(textOne, 0, { visibility: 'visible' })
    .fromTo(textOne, 0.5, {
      scale: 5,

    }, {
      scale: 1,
    })
    .to(textGame, 0, { visibility: 'visible' })
    .fromTo(textGame, 0.5, {
      scale: 5,

    }, {
      scale: 1,
    })
    .to(textToGlory, 0, { visibility: 'visible' })
    .fromTo(textToGlory, 1.5, {
      scale: 5,

    }, {
      scale: 1,
    })

  // emblems of teams

    .to(teamEmblemLeft, 0, {
      autoAlpha: 0.6,

    }, '-=1.5')
    .fromTo(teamEmblemLeft, 1.5, {
      scale: 2,
    }, {
      scale: 1,
      autoAlpha: 1,
    }, '-=1.5')
    .to(teamEmblemLeft, 0, {
      autoAlpha: 0.6,

    }, '-=1.5')
    .fromTo(teamEmblemRight, 1.5, {
      scale: 2,
    }, {
      scale: 1,
      autoAlpha: 1,
    }, '-=1.5')

  // starting ff

    .fromTo(fansBlockLeft, 3, {
      xPercent: 0,
    }, {
      xPercent: -100,

    })
    .fromTo(fansBlockRight, 1, {
      xPercent: 0,
    }, {
      xPercent: 100,

    }, '-=3')
    .to(textBlockOnegame, 0.2, { display: 'none' }, '-=3')
    .to(prevideoBackground, 1, { opacity: 1 }, '-=3');
};

setTimeout(() => {
  startAnimation();
}, 2000);
