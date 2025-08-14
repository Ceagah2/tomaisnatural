export { render }
export const passToClient = ['pageProps', 'urlPathname']

import ReactDOMServer from 'react-dom/server'
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr/server'
import Icon from '../assets/icons/favicon.ico'
import { PageShell } from './PageShell'
import type { PageContextServer } from './types'

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  const title = 'To + Natural || Produtos Naturais e Orgânicos'
  const desc = "Descubra o melhor da natureza com To + Natural, sua loja de produtos naturais e orgânicos. Oferecemos uma seleção cuidadosa de alimentos saudáveis, cosméticos sustentáveis e muito mais. Experimente a pureza e qualidade dos nossos produtos, feitos para cuidar de você e do planeta. Navegue pelo nosso site e transforme sua rotina com escolhas conscientes e saudáveis."

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${Icon}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {}
  }
}
