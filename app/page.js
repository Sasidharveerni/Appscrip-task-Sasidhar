'use client'
import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import first_img from '../public/images/Frame_32.png';
import like from '../public/images/heart.png';
import Logo from '../public/images/Logo.png';
import profile from '../public/images/profile.png';
import search from '../public/images/search-normal.png';
import bag from '../public/images/shopping-bag.png';
import flag from '../public/images/United States of America (US).png';
import linkedin from '../public/images/LinkedInLogo.png';
import insta from '../public/images/Insta.png';
import gpay from '../public/images/google-pay.png';
import mastercard from '../public/images/card.png';
import amex from '../public/images/amex.png';
import applepay from '../public/images/apple-pay.png';
import paypal from '../public/images/paypal.png';
import ProductCard from './productCard';
import product1 from '../public/images/Front Pic.png';
import product2 from '../public/images/Image.png';
import product3 from '../public/images/Band.png';
import product4 from '../public/images/Cap.png';
import product5 from '../public/images/backpack.png';
import product6 from '../public/images/handbag.png';
import product7 from '../public/images/handbag_2.png';
import product8 from '../public/images/handbag_3.png';
import product9 from '../public/images/handbag_4.png';

import React, { useState } from 'react';
import Filter from './filter';




export default function Home() {

  const [showFilters, setShowFilters] = useState(false);
  const [numOfProductsInRow, setNumOfProductsInRow] = useState(3); // Default 3 products in a row

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    setNumOfProductsInRow(showFilters ? 4 : 3); // Toggle number of products in a row
  };
  return (
    <>
     <Head>
        <title>AppScrip</title>
        <meta name="description" content="Your website description" />
      </Head>
      <div className={styles.header_1}>
        <Image
          src={first_img}
          alt="Descriptive Alt Text"
          width={180}  // Adjust based on your image's aspect ratio
          height={20} // Adjust based on your image's aspect ratio

        />
        <Image
          src={first_img}
          alt="Descriptive Alt Text"
          width={180}  // Adjust based on your image's aspect ratio
          height={20} // Adjust based on your image's aspect ratio

        />
        <Image
          src={first_img}
          alt="Descriptive Alt Text"
          width={180}  // Adjust based on your image's aspect ratio
          height={20} // Adjust based on your image's aspect ratio

        />

      </div>
      <div className={styles.header_2}>
        <div>
          <Image
            className={styles.logo}
            src={Logo}
            alt="This is the company Logo"
            width={36}
            height={36}
          />
        </div>
        <div className={styles.logo}>

          <h2>LOGO</h2>
        </div>
        <div className={styles.icons}>
          <Image
            className={styles.icon}
            src={search}
            alt='Users can search the items here'
            width={18}
            height={18}
          />
          <Image
            className={styles.icon}
            src={like}
            alt='Users can see there wishlisted items here'
            width={18}
            height={18}
          />
          <Image
            className={styles.icon}
            src={bag}
            alt='Users can view there what does have there in the bag'
            width={18}
            height={18}
          />
          <Image
            className={styles.icon}
            src={profile}
            alt='Users can view/update the profile'
            width={18}
            height={18}
          />
          <h4>ENG</h4>
        </div>

      </div>

      <div className={styles.header_3}>
        <a href='#'>SHOP</a>
        <a href='#'>SKILLS</a>
        <a href='#'>STORIES</a>
        <a href='#'>ABOUT</a>
        <a href='#'>CONTACT US</a>
      </div>
      <hr></hr>

      <div className={styles.header_4}>
        <p className={styles.head}>DISCOVER OUR PRODUCTS</p>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br />scelerisque.
          Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
      <hr className={styles.margin}></hr>

      <div className={styles.header_5}>
        <div>3425 ITEMS</div>
        <div style={{ color: '#E5E5E5', cursor: 'pointer' }} onClick={toggleFilters}>
          {showFilters ? '< HIDE FILTERS' : 'SHOW FILTERS >'}
        </div>


        <div className={styles.dropdown}>
          <span>RECOMMENDED ▼</span>
          <div className={styles.dropdownContent}>
            <p style={{ fontWeight: 700 }}>✔ &nbsp; RECOMMENDED</p>
            <p>Newest first</p>
            <p>popular</p>
            <p>Price : high to low</p>
            <p>Price : low to high</p>
          </div>
        </div>
      </div>
      <hr className={styles.margin} />
      <input type="checkbox" id="customizable" style={{ marginLeft: 50, fontWeight: 400 }} />
      <label htmlFor="customizable" style={{ marginLeft: 10, fontWeight: 700, fontSize: 15 }}>CUSTOMIZABLE</label>
      <hr className={styles.margin} />

      <div className={styles.header_6}>
        {showFilters && (<>

          <div>
            <Filter text="IDEAL FOR" option1="MEN" option2="WOMEN" option3="BABY & KIDS" /> <hr></hr>
            <Filter text="OCCASSION" option1="Option 1" option2="Option 2" option3="Option 3" /> <hr></hr>
            <Filter text="WORK" option1="Option 1" option2="Option 2" option3="Option 3" /> <hr></hr>
            <Filter text="FABRIC" option1="Option 1" option2="Option 2" option3="Option 3" /> <hr></hr>
            <Filter text="SEGMENT" option1="Option 1" option2="Option 2" option3="Option 3" /> <hr></hr>
            <Filter text="SUITABLE FOR" option1="Option 1" option2="Option 2" option3="Option 3" /> <hr></hr>
            <Filter text="RAW MATERIALS" option1="Option 1" option2="Option 2" option3="Option 3" /> <hr></hr>
            <Filter text="PATTERN" option1="Option 1" option2="Option 2" option3="Option 3" /> <hr></hr>
          </div>

        </>)}

        <div className={showFilters ? styles.products : styles.products_2}>
          <ProductCard imageSrc={product1.src} productName="Product 1" />
          <ProductCard imageSrc={product2.src} productName="Product 2" />
          <ProductCard imageSrc={product3.src} productName="Product 3" />
          <ProductCard imageSrc={product4.src} productName="Product 4" />
          <ProductCard imageSrc={product5.src} productName="Product 5" />
          <ProductCard imageSrc={product6.src} productName="Product 1" />
          <ProductCard imageSrc={product7.src} productName="Product 2" />
          <ProductCard imageSrc={product8.src} productName="Product 3" />
          <ProductCard imageSrc={product3.src} productName="Product 4" />
          <ProductCard imageSrc={product9.src} productName="Product 5" />
          <ProductCard imageSrc={product3.src} productName="Product 1" />
          <ProductCard imageSrc={product5.src} productName="Product 2" />


        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.section0}>
          <div className={styles.section1}>
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettā muse.</p>
            <div>
              <input
                type="text"
                placeholder="Enter your email"
                style={{
                  height: '30px',
                  width: '200px',
                  marginRight: '20px',
                  border: '1px solid #ccc',
                  borderRadius: '0px',
                }}
              />
              <button
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  border: 'none',
                  height: '30px',
                  width: '100px',
                  borderRadius: '0px',
                  border: '1px solid #fff',
                  fontWeight: 200
                }}
              >
                SUBSCRIBE
              </button>
            </div>

          </div>
          <div className={styles.section2}>
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <div>
              <h3>CURRENCY</h3>
              <div style={{ display: 'flex' }}>
                <Image
                  src={flag}
                  alt='USA Flag'
                  height={16}
                  width={16}
                /> USD
              </div>
              <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
          </div>
        </div>

        <div>

        </div>
        <hr></hr>

        <div className={styles.footer1}>

          <div>
            <ul className={styles.lists}>
              <li> <h3>mettā muse</h3></li>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compilance Docs</li>
            </ul>
          </div>

          <div>
            <ul className={styles.lists}>
              <li><h4>QUICK LINKS</h4></li>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <div>
              <h4>FOLLOW US</h4>
              <Image
                src={insta}
                height={16}
                width={16}
                style={{ marginRight: 5 }}
              />
              <Image
                src={linkedin}
                height={16}
                width={16}
                style={{ marginLeft: 5 }}
              />

            </div>
            <h4>mettā muse Accepts</h4>
            <div className={styles.pay_icons}>
              <div className={styles.payments}>

                <Image
                  src={gpay}
                  width={20}
                  height={20}
                />
              </div>


              <div className={styles.payments}>

                <Image
                  src={mastercard}
                  width={24}
                  height={16}
                />
              </div>


              <div className={styles.payments}>

                <Image
                  src={amex}
                  width={24}
                  height={18}
                />
              </div>

              <div className={styles.payments}>

                <Image
                  src={applepay}
                  width={16}
                  height={18}
                />
              </div>

              <div className={styles.payments}>

                <Image
                  src={paypal}
                  width={20}
                  height={20}
                />
              </div>


            </div>
          </div>

        </div>
        <div className={styles.lastline}>Copyright © 2023 mettamuse. All rights reserved.</div>
      </div>


    </>
  )

}
