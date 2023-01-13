import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { Builder } from '@builder.io/react'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) =>
                link.external ? (
                  <a
                    href={link.href}
                    key={link.href}
                    target="_blank"
                    onClick={() => {
                      // Allow opening this from the Builder.io editor
                      if (Builder.isEditing) {
                        open(link.href, '_blank')
                      }
                    }}
                    className="rounded-md p-1 py-0.5 px-0.5 font-medium text-primary-500 hover:bg-teal-500 hover:text-white sm:p-4"
                    rel="noreferrer"
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="rounded-md p-1 py-0.5 px-0.5 font-medium text-gray-900 hover:bg-teal-500 hover:text-white dark:text-gray-100 sm:p-4"
                  >
                    {link.title}
                  </Link>
                )
              )}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
