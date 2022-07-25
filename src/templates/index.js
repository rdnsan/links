const Config = require('../config');

// eslint-disable-next-line func-names
module.exports = function (templateParams) {
  const html = `
    <!DOCTYPE html>
    <html lang="en-US">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${templateParams.htmlWebpackPlugin.options.title}</title>
        <meta name="description" content="${Config.DESCRIPTION}" />
        <link rel="apple-touch-icon" href="/webpack-icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <noscript>You need to enable JavaScript!</noscript>
      </head>
      <body>
        <div id="__rdnsan"></div>
      </body>
    </html>
  `;

  return html;
};
