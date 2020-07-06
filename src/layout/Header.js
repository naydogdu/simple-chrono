import React from "react"
import Container from "./Container"
import { appDatas } from './../data/Data'

const Logo = () => {
  return (
    <div>
      <a className="block font-bold py-2 uppercase" title={appDatas.intro} href="/">{appDatas.title}</a>
    </div>
  )
}

const Nav = () => {
  return (
    <nav className="app-nav ml-auto">
      <ul className="flex space-x-8">
        { appDatas.nav.map( item => <li key={item.name.toString()}><a href={item.url}>{item.name}</a></li> ) }
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header role="banner" className="bg-white shadow-lg py-2 px-4">
      <Container>
        <div className="flex items-center">
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  )
}

export default Header;
