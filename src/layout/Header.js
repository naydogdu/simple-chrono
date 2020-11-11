import React from "react"
import Container from "./Container"
import { appDatas } from './../data/Data'

const Logo = () => {
  return (
    <div>
      <a className="block font-bold py-2 uppercase"
         title={appDatas.intro}
         href="/"
      >
          {appDatas.title}
      </a>
    </div>
  )
}

const Nav = () => {
  return (
    <nav className="app-nav ml-auto">
      <ul className="flex space-x-8">
        { appDatas.nav.map(
            item => (
                <li key={item.name.toString()}>
                    <a className="hover:opacity-75" href={item.url}>{item.name}</a>
                </li>
            )
        ) }
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header role="banner"
            className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-indigo-100 shadow-lg py-2 px-4"
    >
      <Container>
        <div className="flex items-center">
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  )
}

export default Header
