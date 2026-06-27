'use client'

import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const languagePhrases = ['Bienvenue', 'Bienvenidos', 'Welcome', '欢迎', 'Willkommen', 'ようこそ']

const Header = () => {
  const [activeLanguage, setActiveLanguage] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveLanguage((current) => (current + 1) % languagePhrases.length)
    }, 2000)

    return () => window.clearInterval(intervalId)
  }, [])

  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
          </div>
          <div className="relative hidden h-6 overflow-hidden text-2xl font-semibold sm:block">
            <span
              key={activeLanguage}
              className="absolute inset-0 block text-gray-900 transition-all duration-700 ease-out dark:text-gray-100"
              style={{ animation: 'slotMachine 0.7s ease-out' }}
            >
              {languagePhrases[activeLanguage]}
            </span>
          </div>
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
      <style jsx>{`
        @keyframes slotMachine {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.96);
          }
          40% {
            opacity: 1;
            transform: translateY(-2px) scale(1.01);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </header>
  )
}

export default Header
