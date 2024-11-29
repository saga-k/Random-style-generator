const apiKey = 'AIzaSyBbbs2BCwpGxotzbHMt0AHAm6yGkBfSwig'


//Query selectors start---------------------------------------------------------

const h = document.querySelectorAll('.h');
const hFontLink = document.querySelector('#hFontLink');

const p = document.querySelectorAll('p');
const pFontLink = document.querySelector('#pFontLink');

const button = document.querySelectorAll('button');
const body = document.querySelector('body');
const card = document.querySelectorAll('.card');

//Query selectors end-----------------------------------------------------------



//Fonts start-------------------------------------------------------------------

//Fetch fonts from google api start------------------------------

async function getFonts() {
  try {
    const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&subset=latin`)
    const result = await response.json()
    const fontList = result.items;
    return fontList
  }
  catch (error) {
    console.error(error)
  };
}

//Fetch fonts from google api end--------------------------------


//Sort list and select random fonts start------------------------

async function fontSelection() {
  const fontList = await getFonts();

  const randomNumberOne = Math.floor(Math.random() * fontList.length);
  const hFont = fontList[randomNumberOne];

  const pFontList = fontList.filter((font) => font.category === 'serif' || font.category === 'sans-serif');
  const randomNumberTwo = Math.floor(Math.random() * pFontList.length);
  const pFont = pFontList[randomNumberTwo];

  return {
    hFont: hFont,
    pFont: pFont
  }
}

//Sort list and select random fonts end--------------------------


//Display selected fonts on page start---------------------------

async function setFonts() {
  const fonts = await fontSelection();

  const hFont = fonts.hFont
  const hFontUrl = hFont.family.replace(/\s/g, '+');
  hFontLink.setAttribute("href", `https://fonts.googleapis.com/css2?family=${hFontUrl}`)
  h.forEach(element => element.style.fontFamily = `${hFont.family}`);


  const pFont = fonts.pFont;
  const pFontUrl = pFont.family.replace(/\s/g, '+');

  pFontLink.setAttribute("href", `https://fonts.googleapis.com/css2?family=${pFontUrl}`);

  p.forEach(element => element.style.fontFamily = `${pFont.family}`);
  button.forEach(element => element.style.fontFamily = `${pFont.family}`);
}

//Display selected fonts on page end-----------------------------


setFonts() //Function call for fonts


//Fonts end---------------------------------------------------------------------



//Colors start------------------------------------------------------------------
let theme = '';
lightOrDark()

function lightOrDark() {
  if (Math.random() < 0.5) {
    theme = 'light'
  } else {
    theme = 'dark'
  }
}

class Colors {
  constructor(theme, h, s) {
    this.theme = theme
    this.h = h
    this.s = s
    if (this.theme = 'light') {
    }
  }
}
//Generate light palette start ----------------------------------

function generateLightPalette() {
  const palette = {
    bgOne: '',
    bgTwo: '',
    accent: '',
    hFont: '',
    pFont: '',
  };

  //Color one
  let h = Math.floor(Math.random() * 360);
  let s = Math.floor(Math.random() * 80);
  let l = 95;
  palette.bgOne = createColor(h, s, l);

  //Color two
  l = 85;
  palette.bgTwo = createColor(h, s, l);

  //Accent
  h = Math.floor(Math.random() * 360);
  s = Math.floor(Math.random() * (100 - 30) + 30);
  l = Math.floor(Math.random() * (60 - 40) + 40);;
  palette.accent = createColor(h, s, l);

  //FontColor
  h = Math.floor(Math.random() * 360);
  s = Math.floor(Math.random() * 101);
  l = Math.floor(Math.random() * (40 - 0) + 0);
  palette.hFont = createColor(h, s, l);

  l = Math.floor(Math.random() * (10 - 0) + 0);
  palette.pFont = createColor(h, s, l);

  return palette;
}

function createColor(h, s, l) {
  let hsl = `hsl(${h} ${s} ${l})`
  return hsl
}

//Generate light palette end-------------------------------------


//Generate dark palette start------------------------------------


function generateDarkPalette() {
  const palette = {
    bgOne: '',
    bgTwo: '',
    accent: '',
    hFont: '',
    pFont: '',
  };

  //Color one
  let h = Math.floor(Math.random() * 360);
  let s = Math.floor(Math.random() * 80);
  let l = 8;
  palette.bgOne = createColor(h, s, l);

  //Color two
  l = 10;
  palette.bgTwo = createColor(h, s, l);

  //Accent
  h = Math.floor(Math.random() * 360);
  s = Math.floor(Math.random() * (100 - 30) + 30);
  l = Math.floor(Math.random() * (60 - 40) + 40);;
  palette.accent = createColor(h, s, l);

  //FontColors
  h = Math.floor(Math.random() * 360);
  s = Math.floor(Math.random() * 101);
  l = Math.floor(Math.random() * (100 - 70) + 70);
  palette.hFont = createColor(h, s, l);

  l = Math.floor(Math.random() * (100 - 80) + 80);
  palette.pFont = createColor(h, s, l);

  return palette;
}





//Generate dark palette end--------------------------------------
let palette

if (theme === 'light') {
  palette = generateLightPalette();
} else {
  palette = generateDarkPalette();
}

applyColors()


function applyColors() {
  button.forEach(element => element.style.backgroundColor = `${palette.accent}`);
  body.style.backgroundColor = palette.bgOne
  card.forEach(element => element.style.backgroundColor = `${palette.bgTwo}`);
  h.forEach(element => element.style.color = `${palette.hFont}`)
  p.forEach(element => element.style.color = `${palette.pFont}`)
}
