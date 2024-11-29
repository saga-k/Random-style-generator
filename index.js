const apiKey = 'AIzaSyBbbs2BCwpGxotzbHMt0AHAm6yGkBfSwig'


//Query selectors
const h1 = document.querySelector('h1');
const fontOneLink = document.querySelector('#fontOneLink');

setFonts()


async function getFonts() {
  try {
    const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`)
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
  console.log(fontList.length)
  const randomNumberOne = Math.floor(Math.random() * fontList.length);
  const randomNumberTwo = Math.floor(Math.random() * fontList.length);
  const fontOne = fontList[randomNumberOne];
  const fontTwo = fontList[randomNumberTwo];
  return {
    fontOne: fontOne,
    fontTwo: fontTwo
  }

}

async function setFonts() {
  const fonts = await fontSelection();
  const fontOne = fonts.fontOne
  const fontTwo = fonts.fontTwo;
  console.log(fontOne, 'fontOne');
  console.log(fontTwo, 'fontTwo');
  let fontOneUrl = fontOne.family.replace(/\s/g, '+');

  console.log(fontOneUrl);

  fontOneLink.setAttribute("href", `https://fonts.googleapis.com/css2?family=${fontOneUrl}`)

  console.log(`<link id="fontOneLink" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${fontOneUrl}"></link>`)

  h1.setAttribute('style', `font-family: '${fontOne.family}'`)
}

style = "font-family: 'Courier New', Courier, monospace;"
