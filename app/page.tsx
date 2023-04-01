'use client'

import { Inter } from 'next/font/google'
import styles from './page.module.css'
import AddPost from "./components/AddPost"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <AddPost/>
    </main>
  )
}
