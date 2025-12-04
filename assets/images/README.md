# Assets Images Folder

## Current Files

- `favicon.svg` - SVG favicon (works in modern browsers)

## Team Photos

The team section uses placeholder images from an external service. To add real team photos:

1. **Add your team photos** to this folder:
   - `team-sarah-johnson.jpg` (or .png)
   - `team-michael-chen.jpg`
   - `team-emily-rodriguez.jpg`
   - `team-david-kim.jpg`

2. **Recommended specifications:**
   - Format: JPG or PNG
   - Size: 240x240px minimum (will be displayed at 120x120px)
   - Aspect ratio: 1:1 (square)
   - Style: Professional headshot, centered face

3. **Update the image paths** in `pages/about.html`:
   - Replace the `src` attributes in the team section
   - Change from: `https://i.pravatar.cc/150?img=47`
   - Change to: `../assets/images/team-sarah-johnson.jpg`

## Optional: PNG Favicon

If you need a PNG version for older browser compatibility, you can:

1. **Generate from SVG**: Use an online tool like:
   - https://realfavicongenerator.net/
   - https://favicon.io/
   
2. **Create manually**: Export the SVG as PNG at multiple sizes:
   - 16x16px
   - 32x32px
   - 180x180px (for Apple touch icon)

3. **Place the PNG file** as `favicon.png` in this folder

The HTML files already have fallback references to `favicon.png` which will work once you add the file.

