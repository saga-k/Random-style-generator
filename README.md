# Random Style Guide Generator

This project explores whether a blueprint for crafting effective style guides—developed through years of design experience—can be translated into code. The result is a tool that randomly generates unique starting points for style guides, complete with fonts, colors, and theme variations. Each refresh reveals a new combination—some work great, others don't.

## Why I Created This Tool

As a graphic designer, I’ve spent years refining the process of building functional and cohesive style guides. When I began this project, I was curious to see if my approach could be distilled into code.  
The tool doesn't generate entire layouts but focuses on key foundational elements: fonts and colors. It serves as a demonstration of how design principles can inform development.  
The randomization isn’t arbitrary—it’s guided by principles I’ve used to create successful style guides. The goal was to ensure every combination feels intentional, even when generated programmatically.

## Behind the Generator

### Font Selection
**Using the Google Fonts API**  
Fonts are fetched from the Google Fonts API, which provides a complete list of the entire Google Fonts library.

- **Random Heading Font**: Since a heading font can have a bit more flair than a paragraph font and still be readable, I decided not to place any restrictions on which fonts could be used for the headings. The font is selected randomly from the entire font library.  
- **Filtered Paragraph Font**: Each paragraph font is selected from a filtered array containing only serif and sans-serif fonts. This ensures some level of readability. However, some of these work better than others. In my opinion, some of Google's serif and sans-serif fonts would be better categorized as display fonts.  

**Loading Fonts Dynamically**  
In my HTML document, I have 2 link elements without `src` values. Using a regex, I transformed the selected font names into a format that fits Google Fonts URLs and then set the `src` value for each link element.

### Color Palette

The generator creates color palettes using HSL values to control lightness and saturation while keeping the hues random:

- **Dark or Light Mode**: To avoid dark text on a dark background or vice versa, I first let the program decide whether to use a light or dark theme.  
- **Background Colors**: Two shades of the same hue but with different lightness are selected to create depth.  
- **Accent Color**: A bold, saturated color serves as the focal point of the design. The color has a min/max range in lightness and saturation, while the hue can be selected from the full range of values.  
- **Text Colors**: Text colors have the same hue values as the accent color but have a more narrow span in the lightness and saturation values. The heading elements range is a bit broader, while the paragraph elements are designed to be nearly white or nearly black.

## Features
- Randomly generates unique font combinations from Google Fonts.
- Creates custom color palettes using HSL values.
- Supports light and dark mode themes.
- Dynamic font loading via the Google Fonts API.
- Produces foundational design elements for style guides.

## Demo

You can try the Random Style Guide Generator live on GitHub Pages:  
[Live Demo](https://saga-k.github.io/Random-style-generator/)

## Challenges & Learnings

One of the key challenges was dynamically loading fonts. To address this, I used regular expressions to transform font names into URLs that fit Google Fonts' structure.  
Additionally, balancing readability between heading and paragraph fonts required careful filtering. Some fonts worked better than others in terms of functionality.

## Future Improvements
- Add a feature to generate a downloadable stylesheet in PDF format.
