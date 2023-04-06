import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='max-w-[1920px] mx-auto'>
      <Head />
      <body className='bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
