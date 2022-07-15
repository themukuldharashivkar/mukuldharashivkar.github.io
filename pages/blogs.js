import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import Script from "next/script"
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import NavBar from '../components/NavBar';

const Blogs = ({blogs, profile}) => {
    const client = createClient({
        projectId: "sgx5nzu7",
        dataset: "production",
        useCdn: false
      });
      const builder = imageUrlBuilder(client)
      
      useEffect(() => {
        console.log("thsnks") 
        
      }, [])
  return (
    <div className='bg-zinc-900'>
        <NavBar profile={profile} />
         <div className="bg-zinc-900 my-12" id="blog">
        <div className="container mx-auto py-16 md:py-20 ">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-amber-500 sm:text-5xl lg:text-6xl">
            I also like to write
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">

            {blogs.map((item) => { 
              return <Link key={item.slug.current} href={"/blog/" + item.slug.current} className="shadow">
              <div><div style={{"backgroundImage": `url(${builder.image(item.blogimage).width(200).url() || '/assets/img/post-01.png'})`}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 bg-amber-500 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read
                  More</span>
              </div>
              <div className="bg-zinc-700 py-6 px-5 xl:py-8 cursor-pointer">
                <span className="block font-body text-lg font-semibold text-white"> {item.title}</span>
                <span className="block pt-2 font-body text-white">{item.metadesc}</span>
              </div></div>
            </Link>
             })}
            
          </div>
        </div>
      </div><div className="bg-amber-500">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-black md:text-center">
              © Copyright 2022. All right reserved, MD.
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              {/* <a href="/">
                <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
              </a> */}
              <a href="https://twitter.com/themukul_99" className="pl-4">
                <i className="bx bxl-twitter text-2xl text-black hover:text-white"></i>
              </a>
              <a href="https://github.com/themukuldharashivkar" className="pl-4">
                    <i className="bx bxl-github text-2xl text-black hover:text-white"></i>
              </a>
              <a href="https://www.linkedin.com/in/themukuldharashivkar" className="pl-4">
                <i className="bx bxl-linkedin text-2xl text-black hover:text-white"></i>
              </a>
              <a href="https://www.instagram.com/themukulraj" className="pl-4">
                <i className="bx bxl-instagram text-2xl text-black hover:text-white"></i>
              </a>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Blogs

export async function getServerSideProps(context) {
    const client = createClient({
      projectId: "sgx5nzu7",
      dataset: "production",
      useCdn: false
    });
    const query = `*[_type == "blog"]`;
    const blogs = await client.fetch(query); 
    const profileQuery = `*[_type == "profile"][0]`;
    const profile = await client.fetch(profileQuery);
    return {
      props: {
        blogs, profile
      }
    }
  }