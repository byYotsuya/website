import { Container, Flex } from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import React from 'react'
import AboutCard from '../components/cards/AboutCard';
import Header from '../components/Header';
import Layout from '../components/Layout'
import { MDXComponents } from '../components/MDXComponents';
import { getFileBySlug, getFiles } from '../lib/md'



export default function blog({source, frontmatter}) {
  
  return (
    <>

      <Head>
        <title>{frontmatter.title}</title>
      </Head>

      <Header background="#f1f5f9" />

      <Container maxW="container.2xl" paddingX={[5,10,10,10]} marginTop="10" height="auto">
          <Flex 
            fontSize="xl"
            direction={["column", "column", "column", "row"]}
            justify="space-between">
            
            <Layout metadata={frontmatter}>
              <MDXRemote {...source} components={MDXComponents}/>
              
            </Layout>

            <AboutCard />
          </Flex>
        </Container>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles("posts");
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug("posts", params.slug);

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