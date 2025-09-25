# Tagr

**Tagr** is a lightweight Chrome extension that displays a hostname overlay on any webpage. It's designed for kiosk environments, digital signage, or any system where a visual hostname indicator is needed.

## Features

- Displays a configurable hostname in the corner of every webpage
- Customizable overlay position (top-left, top-right, bottom-left, bottom-right)
- Lightweight and unobtrusive
- Ideal for identifying devices in kiosk or fleet setups

## Installation

To install manually from source:

1. Clone this repository:
   ```bash
   git clone https://github.com/mwing-dev/Tagr.git
   ```
2. Visit `chrome://extensions/` in your Chrome browser
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the `tagr/` directory

## Usage

1. Click on the Tagr icon in your Chrome toolbar
2. Enter the hostname you want displayed
3. Choose the overlay position (top-left, top-right, etc.)
4. Save your settings — the overlay will appear on the specified URL

## Permissions

Tagr uses minimal permissions:

- `storage`: to save your hostname and overlay position
- `tabs`: to inject the overlay on open pages
- `scripting`: to dynamically insert the overlay into webpage content

No user data is collected or transmitted.

## Development

To build or modify Tagr:

- All extension files are located in the root directory
- Modify `content.js` to change how the overlay is injected
- Update `manifest.json` to adjust permissions or extension behavior

## License

This project is licensed under the [MIT License](LICENSE).
