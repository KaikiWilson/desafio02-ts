import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import './Layout.css'

export const Layout = ({ children }: any) => {
  return(
    <>
      <body className="layoutBody">
        <Header />
        { children }
        <Footer />
      </body>
    </>
  )
}
