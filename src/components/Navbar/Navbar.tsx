import React, { useState } from 'react'
import { Link } from 'gatsby'
import { IoIosClose, IoIosSearch } from 'react-icons/io'
import { DrawerProvider } from 'components/Drawer/DrawerContext'
import Menu from './Menu'
import MobileMenu from './MobileMenu'
import SearchContainer from '../../containers/SearchContainer/SearchContainer'
import HeaderWrapper, {
  Logo,
  MenuWrapper,
  NavbarWrapper,
  NavSearchButton,
  NavSearchFromWrapper,
  NavSearchWrapper,
  SearchCloseButton,
} from './Navbar.style'
import LogoImage from '../../images/logo.png'
import KofiButton from '../Button/Kofi'

type NavbarProps = {
  className?: string
}

const MenuItems = [
  {
    label: <KofiButton />,
    url: 'https://ko-fi.com/hoang',
    external: true,
  },
  {
    label: 'About Me',
    url: '/me',
  },
  {
    label: 'Articles',
    url: '/blog',
  },
  {
    label: 'My Résumé',
    url: 'https://resume.hoangtrinhj.com',
    external: true,
  },
]

const Navbar: React.FunctionComponent<NavbarProps> = ({ className, ...props }) => {
  const [state, setState] = useState({
    toggle: false,
    search: '',
  })

  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    })
  }

  // Add all classs to an array
  const addAllClasses = ['header']

  // className prop checking
  if (className) {
    addAllClasses.push(className)
  }

  return (
    <HeaderWrapper className={addAllClasses.join(' ')} {...props}>
      <NavbarWrapper className="navbar">
        <DrawerProvider>
          <MobileMenu items={MenuItems} logo={LogoImage} />
        </DrawerProvider>
        <Logo>
          <Link to="/">
            <img src={LogoImage} alt="logo" />
          </Link>
        </Logo>
        <MenuWrapper>
          <Menu items={MenuItems} />
        </MenuWrapper>
        <NavSearchButton type="button" aria-label="search" onClick={toggleHandle}>
          <IoIosSearch size="23px" />
        </NavSearchButton>
      </NavbarWrapper>

      <NavSearchWrapper className={state.toggle === true ? 'expand' : ''}>
        <NavSearchFromWrapper>
          <SearchContainer />
          <SearchCloseButton type="submit" aria-label="close" onClick={toggleHandle}>
            <IoIosClose />
          </SearchCloseButton>
        </NavSearchFromWrapper>
      </NavSearchWrapper>
    </HeaderWrapper>
  )
}

export default Navbar
