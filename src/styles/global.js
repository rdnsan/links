const GlobalStyle = `
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: url('/bg-nature.jpg') repeat center center fixed;
    background-size: cover;
    color: #fff;
  }

  #bg-animated {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  main {
    position: relative;
    opacity: 0;
    filter: blur(10px);
    transition: opacity 2s ease-in-out, filter 2s ease-in-out;
  }

  header {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header > img {
    width: 6em;
    height: 6em;
    border-radius: 100%;
    background-color: #fff;
    border: 1px solid #fff;
    object-fit: cover;
    box-shadow: rgb(28 32 93 / 24%) 0 2px 8px 0;
  }

  header > h1 {
    display: inline-block;
    font-size: 0.8em;
    font-weight: bold;
    border-radius: 1em;
    background-color: #000a;
    color: #fff;
    padding: 0.3em 0.6em;
    border: 1px solid #fffa;
    backdrop-filter: blur(10px) saturate(160%) contrast(180%);
    -webkit-backdrop-filter: blur(10px) saturate(160%) contrast(180%); /* for safari */
  }

  ul {
    box-sizing: border-box;
    list-style: none;
    margin: 0 auto;
    padding: 2em;
    max-width: 480px;
  }

  ul > li {
    background-color: #fffa;
    backdrop-filter: blur(10px) saturate(160%) contrast(180%);
    -webkit-backdrop-filter: blur(10px) saturate(160%) contrast(180%); /* for safari */
    border-radius: 10em;
    padding: 1em;
    margin: 1.4em 0;
    box-shadow: rgb(28 32 93 / 24%) 0 2px 8px 0;
  }

  ul > li > a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

export default GlobalStyle;
