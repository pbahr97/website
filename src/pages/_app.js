import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  
  const appTheme = {
    fontColor: 'black',
    backgroundColor: 'white'
  };

  // TODO: DYNAMIC THEMING
  // Add Context for each page: https://timellenberger.com/blog/dynamic-theming-with-styled-components-and-nextjs
  // Change theme per page
  
  return <Component {...pageProps} />
}

export default MyApp
