import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import React from 'react'
import AboutCard from '../components/cards/AboutCard'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { MDXComponents } from '../components/MDXComponents'
import { getFileBySlug, getFiles } from '../lib/md'

// wallerman
// marine hololive

export default function blog ({ source, frontmatter }) {
  return (
    <>

      <Head>
        <title>{frontmatter.title}</title>
      </Head>

      <Header background='#f1f5f9' />

      <div className='max-w-2xl px-5 md:px-10 mt-2 h-auto'>
        <div className='text-xl flex-col md:flex-row items-center justify-between'>

          <Layout metadata={frontmatter}>
            <MDXRemote {...source} components={MDXComponents} />

          </Layout>

          <AboutCard />
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths () {
  const posts = await getFiles('posts')
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const { source, frontmatter } = await getFileBySlug('posts', params.slug)

  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        ...frontmatter
      }
    }
  }
}
