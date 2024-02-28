import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { App } from 'next/app';


const Inicio = () => {

  
  

  return (

    <>
    <Head>
      <title>homehelp</title>
    </Head>

    <div className={styles.body}>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        @media (prefers-color-scheme: dark) {
          body {
            background-color:#EEEFEF ;
              }
          }
      `}
        </style>
      <section id="escolha" className={styles.escolha}>
        <div className={styles.bemvindo}>
          <Image src="/image/Component 2.png" alt="Logo" width={300} height={70}/>
        </div>
        <div>
          <h1 className={styles.h1}>Escolha sua loja :</h1>
        </div>
        <div className={styles.baixo}>
          <div className={styles.construbutton}>
            <button className={styles.button}>
              <Link href="/Construcao">
                <Image ClassName={styles.img} src="/image/Component 5.png" alt="Constru" width={290} height={35}/>
              </Link>
            </button>
          </div>
          <div>
            <button className={styles.button}>
              <Link href="/Supermercado">
                <Image ClassName={styles.img} src="/image/Component 5 (1).png" alt="Merca" width={280} height={35}/>
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
      };

export default Inicio;
