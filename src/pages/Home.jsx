import React from 'react'
import Container from '../components/Container'
import PageLayout from '../components/layouts/PageLayout'
import Title from '../components/shared/Title/Title'

const Home = () => {

  return (
    <PageLayout title="Home">
      <Title size="hero">
        hero Title Componenti
      </Title>
      <Title size="large">
        large  Title Componenti
      </Title>
      <Title size="medium">
        medium  Title Componenti
      </Title>
      <Title>
        Title no size Componenti
      </Title>
      <Container />
    </PageLayout>
  )
}

export default Home