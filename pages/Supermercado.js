import styles from '../styles/page.module.css';
import Link from 'next/link';
import { BsFillTelephoneFill, BsFillEnvelopeOpenFill, BsTwitterX, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import React, { useState } from 'react';
import { App } from 'next/app';
import Head from 'next/head';


const SuperMercado = ({ Component, pageProps }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  

  return (
   

    <>
    <Head>
      <title>Supermercado</title>
    </Head>
    <div className={styles.bori}>



    {isModalOpen && (
  <div className={styles.modalOverlay} onClick={toggleModal}>
    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <span className={styles.closeButton} onClick={toggleModal}>&times;</span>
      <h2> Aplicativo homehelp em desenvolvimento!</h2>
      <p>Nosso aplicativo estará disponível em breve! <br /> Para acesso a versão beta entre em contato. </p>
    </div>
  </div>
)}
        <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        @media (prefers-color-scheme: dark) {
          body {
            background-color:#EEEFEF !important ;
              }
          }
        html {
          scroll-behavior: smooth;
        }
      `}</style>


        <header className={styles.header}>
          <nav className={styles.menupc}>
            <div className={styles.logo}>
              <img src="/image/logoverdenome.png" alt="logo" />
            </div>
            <ul>
              <li><a className={styles.am} href="#sobre">Sobre</a></li>
              <li><a className={styles.am} href="#contato">Contato</a></li>
              <li><Link className={styles.am} href="/Construcao">Construção</Link></li>
              <li><a className={styles.am} href="#">Cadastrar minha loja</a></li>
            </ul>
          </nav>

          <div className={styles.logomobile}>
            <img className={styles.imglogo} src="/image/logoverdenome.png" alt="Logo" />
          </div>
          <div className={styles.menumbicon}>
            <button onClick={toggleMenu}><img src="/image/menu_white_36dp.svg" alt="Menu" /></button>
          </div>
          <div className={`${styles.menumobile} ${menuOpen ? styles.open : ''}`}>
            <ul>
              <li className="nav-item"><a className={styles.aaa} href="#">Cadastrar minha loja</a></li>
              <li className="nav-item"><a className={styles.aaa} href="#sobre">Sobre</a></li>
              <li className="nav-item"><a className={styles.aaa} href="#contato">Contato</a></li>
              <li className="nav-item"><Link className={styles.aaa} href="/Construcao">Construção</Link></li>
            </ul>
          </div>
        </header>
        <main>
          <section className={styles.inicio}>
            <div className={styles.colunadois}>

              <img className={styles.img} src="image/celular.png" alt="Celular" />

            </div>
            <div className={styles.colunaum}>
              <div className={styles.txtinicio}>
                <h2 className={styles.h2}>Abasteça sua casa
                  <span className={styles.spanmerca}> com praticidade!</span></h2>

                <div className={styles.pe}>
                  <p>Somos uma plataforma inovadora de delivery e temos como propósito conectar você aos melhores
                    supermercados e materiais de construção da região. </p>
                </div>
              </div>
              <div className={styles.linkes}>
                <div className={styles.linkplaymerca}>
                  <a href="#" className="link-googleplay"> <button onClick={toggleModal}>
                    <img className={styles.img} src="image/gugou.png" alt="Google Play" />
                  </button></a>
                </div>
                <div className={styles.linkapplemerca}>
                  <a href="#" className="link-applestore"> <button onClick={toggleModal}>

                    <img className={styles.img} src="image/Apple_Store.png" alt="Apple store" />
                  </button></a>
                </div>
              </div>
            </div>


          </section>
          <section id='sobre'>
            <section className={styles.sobre}>
              <div className={styles.linha1}>
                <h4 className={styles.h4merca}>Por que escolher a HomeHelp?</h4>
              </div>
              <div className={styles.linha2}>
                <div className={styles.colunatwo}>
                  <div className={styles.icon1merca}><svg className={styles.svg} width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 10H5M7 14H5M13 6H5M17 5.8V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H5.8C4.11984 21 3.27976 21 2.63803 20.673C2.07354 20.3854 1.6146 19.9265 1.32698 19.362C1 18.7202 1 17.8802 1 16.2V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H12.2C13.8802 1 14.7202 1 15.362 1.32698C15.9265 1.6146 16.3854 2.07354 16.673 2.63803C17 3.27976 17 4.11984 17 5.8Z" stroke="#0CAC1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </div>
                  <div className={styles.escrito1}>
                    <h3>Listas de compras <br />personalizadas</h3>
                    <p>Impulsionadas por Inteligência Artificial, que se adaptam às suas preferências.</p>
                  </div>
                  <div className={styles.icon2merca}><svg className={styles.svg} width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.52 1.64L1.96 3.72C1.65102 4.13198 1.49652 4.33797 1.50011 4.51039C1.50323 4.66044 1.57358 4.80115 1.69175 4.89368C1.82754 5 2.08503 5 2.6 5H17.4C17.915 5 18.1725 5 18.3083 4.89368C18.4264 4.80115 18.4968 4.66044 18.4999 4.51039C18.5035 4.33797 18.349 4.13198 18.04 3.72L16.48 1.64M3.52 1.64C3.696 1.40533 3.784 1.288 3.89552 1.20338C3.9943 1.12842 4.10616 1.0725 4.22539 1.03845C4.36 1 4.50667 1 4.8 1H15.2C15.4933 1 15.64 1 15.7746 1.03845C15.8938 1.0725 16.0057 1.12842 16.1045 1.20338C16.216 1.288 16.304 1.40533 16.48 1.64M3.52 1.64L1.64 4.14666C1.40254 4.46328 1.28381 4.62159 1.1995 4.79592C1.12469 4.95062 1.07012 5.11431 1.03715 5.28296C1 5.47301 1 5.6709 1 6.06666L1 17.8C1 18.9201 1 19.4802 1.21799 19.908C1.40973 20.2843 1.71569 20.5903 2.09202 20.782C2.51984 21 3.07989 21 4.2 21L15.8 21C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V6.06667C19 5.6709 19 5.47301 18.9628 5.28296C18.9299 5.11431 18.8753 4.95062 18.8005 4.79592C18.7162 4.62159 18.5975 4.46328 18.36 4.14667L16.48 1.64M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9" stroke="#0CAC1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  </div>
                  <div className={styles.escrito2}>
                    <h3>Aumento significativo da <br />percepção de variedade</h3>
                    <p>Ampliando as ofertas dos produtos e garantindo uma experiência de compra diversificada.</p>
                  </div>
                </div>
                <div className={styles.colunaone}>

                  <img src="image/celular.png" alt="Ilustração de compras" />
                </div>
                <div className={styles.colunatre}>
                  <div className={styles.icon3merca}><svg className={styles.svg} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 19.0871H7.61029C7.95063 19.0871 8.28888 19.1276 8.61881 19.2086L11.3769 19.8789C11.9753 20.0247 12.5988 20.0388 13.2035 19.9214L16.253 19.3281C17.0585 19.1712 17.7996 18.7854 18.3803 18.2205L20.5379 16.1217C21.154 15.5233 21.154 14.5524 20.5379 13.9531C19.9832 13.4134 19.1047 13.3527 18.4771 13.8103L15.9626 15.6448C15.6025 15.9081 15.1643 16.0498 14.7137 16.0498H12.2855L13.8311 16.0497C14.7022 16.0497 15.4079 15.3633 15.4079 14.5159V14.2091C15.4079 13.5055 14.9156 12.8919 14.2141 12.7219L11.8286 12.1417C11.4404 12.0476 11.0428 12 10.6431 12C9.67833 12 7.93189 12.7988 7.93189 12.7988L5 14.0249M1 13.6L1 19.4C1 19.96 1 20.2401 1.10899 20.454C1.20487 20.6421 1.35785 20.7951 1.54601 20.891C1.75992 21 2.03995 21 2.6 21H3.4C3.96005 21 4.24008 21 4.45399 20.891C4.64215 20.7951 4.79513 20.6421 4.89101 20.454C5 20.2401 5 19.96 5 19.4V13.6C5 13.0399 5 12.7599 4.89101 12.546C4.79513 12.3578 4.64215 12.2049 4.45399 12.109C4.24008 12 3.96005 12 3.4 12H2.6C2.03995 12 1.75992 12 1.54601 12.109C1.35785 12.2049 1.20487 12.3578 1.10899 12.546C1 12.7599 1 13.0399 1 13.6ZM16.1914 2.59224C15.5946 1.34338 14.2186 0.681771 12.8804 1.32036C11.5423 1.95895 10.9722 3.47337 11.5325 4.80281C11.8787 5.62445 12.8707 7.21999 13.5781 8.31902C13.8394 8.7251 13.9701 8.92814 14.161 9.04692C14.3247 9.1488 14.5297 9.20371 14.7224 9.19734C14.9471 9.18991 15.1618 9.07941 15.5911 8.85842C16.7532 8.2603 18.4101 7.37454 19.1208 6.83611C20.2707 5.9649 20.5556 4.36356 19.6947 3.14623C18.8337 1.92889 17.3327 1.80911 16.1914 2.59224Z" stroke="#0CAC1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  </div>
                  <div className={styles.escrito3}>
                    <h3>Sugestões de produtos <br />baseadas nas suas preferências</h3>
                    <p>Através de algoritmos inteligentes que armazenam dados de compras anteriores.</p>
                  </div>
                  <div className={styles.icon4merca}><svg className={styles.svg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 3.46776C17.4817 4.20411 18.5 5.73314 18.5 7.5C18.5 9.26686 17.4817 10.7959 16 11.5322M18 16.7664C19.5115 17.4503 20.8725 18.565 22 20M2 20C3.94649 17.5226 6.58918 16 9.5 16C12.4108 16 15.0535 17.5226 17 20M14 7.5C14 9.98528 11.9853 12 9.5 12C7.01472 12 5 9.98528 5 7.5C5 5.01472 7.01472 3 9.5 3C11.9853 3 14 5.01472 14 7.5Z" stroke="#0CAC1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  </div>
                  <div className={styles.escrito4}>
                    <h3>Parceiros locais e <br />logística eficiente</h3>
                    <p>Que valorizam a proximidade com a sua localização e garantem entregas rápidas e seguras.</p>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section id='contato'>
            <section className={styles.contato}>
              <div className={styles.txtfaixa}>
                <h1 className={styles.h1merca}>Entre em contato conosco!</h1>
                <h3><div className={styles.y}><BsFillTelephoneFill /></div> Ligue para nós no telefone:</h3>
                <h3 className={styles.classemerca}>(28)99257-2366</h3>
                <h3> <div className={styles.y}><BsFillEnvelopeOpenFill /></div>Mande um E-mail:</h3> <br></br>
                <h3 className={styles.classeemerca}>contato@homehelp.app</h3> <br></br>
                <h3 className={styles.classe3}>Fale diretamente com a gente:</h3>
                <a href="https://wa.me/5528992572366" target="_blank" rel="noopener noreferrer">
                  <button className={styles.mercabutton}>Entre em contato</button>
                </a>
              </div>


              <div className={styles.redes}>
                <p>Clique e siga-nos nas redes sociais:</p>

                <i><a className={styles.amerca} href="https://www.instagram.com/homehelp.app?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><div className={styles.x}><BsInstagram /></div><p>instagram</p></a></i>
                <i><a className={styles.amerca} href="https://www.facebook.com/profile.php?id=61556188940196"><div className={styles.x}><BsFacebook /></div><p>Facebook</p></a></i>
                <i><a className={styles.amerca} href="https://www.linkedin.com/company/homehelp-all-for-home/about/?viewAsMember=true"><div className={styles.x}><BsLinkedin /></div><p>Linkedin</p></a></i>
                <i><a className={styles.amerca} href="https://x.com/homehelpapp?s=11"><div className={styles.x}><BsTwitterX /></div><p>Twitter</p></a></i>
                <i><a className={styles.amerca} href="https://www.tiktok.com/@homehelp.app?_t=8jdVWiJLzIj&_r=1"><div className={styles.x}><FaTiktok /></div><p>TikTok</p></a></i>

              </div>


            </section>
          </section>

          <section className="rodape">
            <div className="container body-content">
              <footer className={styles.footer}>
                <p>HomeHelp 2024</p>
              </footer>
            </div>
          </section>
        </main>
      </div>
      </>
   
  );

};
export default SuperMercado;