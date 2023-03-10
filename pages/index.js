import Footer from '@/comps/footer'
import Navbar from '@/comps/navbar'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Users | Home</title>
        <meta name="keyword" content="users"/>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of 
          type and scrambled it to make a type specimen book. It has 
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised
          in the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing 
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of 
          type and scrambled it to make a type specimen book. It has 
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised
          in the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing 
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <Link href="/list"><span className={styles.btn}>See user list</span></Link>
      </div>
    </>
  )
}
 