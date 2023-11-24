import type {Metadata} from 'next'
import {Inter, Nunito} from 'next/font/google'
import './globals.css'
import AppContainer from "src/components/container/appContainer";

const inter = Inter({subsets: ['latin'], variable: '--font-inter'})

export const metadata: Metadata = {
  title: 'ConnectEd',
  description: '',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <head/>
      <link rel="icon" href="/logo.svg" sizes="any" />
      <body className={"h-screen text-black"}>
      <AppContainer>{children}</AppContainer>
      </body>
      </html>
  )
}
