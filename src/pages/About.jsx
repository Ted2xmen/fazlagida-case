import React from 'react'
import PageLayout from '../components/layouts/PageLayout'
import { useSelector } from 'react-redux'

const links = [ 
{ name: 'Storybook', path: 'https://fazlagida-case-jz8l.vercel.app/' },
{ name: 'Repository', path: 'https://github.com/Ted2xmen/fazlagida-case' },
{ name: 'Linkedin', path: 'https://www.linkedin.com/in/tugrulerdemdogru/' }

]

const About = () => {

  const theme = useSelector(state => state.main.theme)
  return (
    <PageLayout title="About">
      {theme ? "dark" : "light"}
      <div className='h-screen flex flex-col max-w-lg space-y-6 text-xl font-bold underline'>
           {links.map((item, i) => {
                return (
                 <a key={i} target="_blank" rel='noreferrer' href={item.path}>
                  {item.name}
                 </a>
                );
              })}
      </div>
    </PageLayout>
  )
}

export default About