
import Head from 'next/head'
import React from 'react'
import Header from '../../components/Header'


import { Container, Flex } from '@chakra-ui/react'
import Layout from '../../components/Layout'
import { MDXRemote } from 'next-mdx-remote'
import { MDXComponents } from '../../components/MDXComponents'
import { getFileBySlug, getFiles } from '../../lib/md'

export default function page({source, frontmatter}) {
  
  return (
    <>

      <Head>
        <title>{frontmatter.title}</title>
      </Head>

      <Header background="#f1f5f9" />

      <Container maxW="container.2xl" paddingX={[5,10,10,10]} marginTop="10" height="auto">
        <Layout metadata={frontmatter}>
          <MDXRemote {...source} components={MDXComponents}/>
          
        </Layout>

      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const pages = await getFiles("pages");
  const paths = pages.map((page) => ({
    params: {
      slug: page.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug("pages", params.slug);

  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        ...frontmatter,
      },
    },
  };
}