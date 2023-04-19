import type { AppProps } from 'next/app'
import { RiPercentFill } from 'react-icons/ri'
import { Profile } from '@components'
import './styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex items-center justify-between px-5 py-1 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="flex">
          <a href="/">
            <img className="max-h-12" src="/logo.png" />
          </a>
          <a className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 duration-300 text-white p-3 rounded font-semibold" href="/dashboard">
            <RiPercentFill size={16} />
            Promoções
          </a>
        </div>
        <div>
          <Profile user={pageProps.user} />
        </div>
      </div>
      <div className="py-2">
        <Component {...pageProps} />
      </div>
    </>
  )
}