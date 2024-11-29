const apiKey = 'AIzaSyBbbs2BCwpGxotzbHMt0AHAm6yGkBfSwig'


//Query selectors
const h = document.querySelectorAll('.h');
const hFontLink = document.querySelector('#hFontLink');

const p = document.querySelectorAll('p');
const pFontLink = document.querySelector('#pFontLink');

const button = document.querySelectorAll('button');

setFonts()


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

async function setFonts() {
  const fonts = await fontSelection();

  const hFont = fonts.hFont
  const hFontUrl = hFont.family.replace(/\s/g, '+');
  hFontLink.setAttribute("href", `https://fonts.googleapis.com/css2?family=${hFontUrl}`)
  h.forEach(element => element.setAttribute('style', `font-family: '${hFont.family}'`))


  const pFont = fonts.pFont;
  const pFontUrl = pFont.family.replace(/\s/g, '+');

  pFontLink.setAttribute("href", `https://fonts.googleapis.com/css2?family=${pFontUrl}`);

  p.forEach(element => element.setAttribute('style', `font-family: '${pFont.family}'`));
  button.forEach(element => element.setAttribute('style', `font-family: '${pFont.family}'`));

}
