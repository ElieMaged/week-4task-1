import type { InferGetStaticPropsType, GetStaticProps, getInitialProps } from 'next'
 
type Repo = {
  name: string
  stargazers_count: number
}
 
export const getInitialProps = (async (context) => {
  const res = await fetch('https://fakestoreapi.com/products?limit=6')
  const repo = await res.json()
  return { props: { repo } }
}) satisfies GetStaticProps<{
  repo: Repo
}>
 
export default function Page({
  repo,
}: InferGetStaticPropsType<typeof getInitialProps>) {
  return repo
}