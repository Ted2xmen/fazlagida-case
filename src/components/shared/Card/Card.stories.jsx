import React from 'react';
import Card from './Card';

export default {
  title: 'Shared/Card',
  component: Card,
};


const Template = (args) => 
  <div className='flex'>
    <Card {...args} />
  </div>
;

export const TopArtists = Template.bind({});
TopArtists.args = {
  cardType: "TopArtists",
  item: {
    name: "The Beatles",
    listeners: "123456789",
    playcount: "123456789",
    image: "https://lastfm.freetls.fastly.net/i/u/174s/59b45d3fe84b94aa500ea8d7e3b0fc0c.png"
  }
};


export const InfoContainer = Template.bind({});
InfoContainer.args = {
  cardType: "InfoContainer",
    item: {
    name: "The Beatles",
    listeners: "123456789",
    playcount: "123456789",
    image: "https://lastfm.freetls.fastly.net/i/u/174s/c6d654cc1669f485a03c455f4fec9f87.png"

  }
};





