# AICTE ATAL VAANI Workshop — Large Language Models

Bilingual (English + Malayalam) static website for the 28–30 September 2026 workshop organized by the Department of Computer Applications, Cochin University of Science and Technology (CUSAT).

## Files

- `index.html` — complete webpage
- `style.css` — responsive styling
- `script.js` — English/Malayalam switch, mobile navigation and countdown
- `assets/brochure.png` — supplied workshop brochure
- `assets/registration-qr.png` — QR code extracted from the brochure

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will provide the published Pages URL.

## Registration

The brochure's QR code is displayed on the website. If you later obtain the registration Google Form URL, you can make the registration button directly open it by changing the `href` of the `#registration` button in `index.html`.

## Customization

The site intentionally uses the supplied brochure as a visual reference while presenting the information as a modern responsive webpage. Replace `assets/brochure.png` if you want to use a separate CUSAT campus photo.
