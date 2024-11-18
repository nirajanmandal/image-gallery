'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MenuIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-transparent/20 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link className="text-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm font-medium" href="/">
                  Image Gallery
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:gap-x-3">
            <Button className='bg-primary/60' size="sm" aria-label="Login">
              Login
            </Button>
            <Button className='bg-primary/60' size="sm" aria-label="Login">
              Register
            </Button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-expanded={isMobileMenuOpen} aria-label="Open menu">
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-violet-200 to-pink-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link className="text-foreground text-center hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-base font-medium" href="/">
              Image Gallery
            </Link>
            <div className='flex flex-col gap-y-3'>
              <Button className='bg-primary/60' size="sm" aria-label="Login">
                Login
              </Button>
              <Button className='bg-primary/60' size="sm" aria-label="Login">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}