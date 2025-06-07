import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SerachBar from './SerachBar'
import CartIcon from './CartIcon'
import FavoriteButton from './FavoriteButton'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu '
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, UserButton, SignedIn } from '@clerk/nextjs'

const Header = async() => {
  const user = await currentUser()

  return (
    <header className='bg-white py-5 border-b border-b-black/20'>
      <Container className='flex items-center justify-between'>
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
            <MobileMenu />
            <Logo />
        </div>
        <HeaderMenu />
        <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
          <SerachBar/>
          <CartIcon />
          <FavoriteButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton/>
            </SignedIn>
          {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
      
    </header>
  )
}

export default Header
