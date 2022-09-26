import React from 'react';
import Title from './Title';

export default {
  title: 'Shared/Title',
  component: Title,
};


const Template = (args) => <Title {...args} />;

export const HeroTitle = Template.bind({});
HeroTitle.args = {
  size: 'hero',
  position: 'center',
  children: "Hero Title"
};

export const LargeTitle = Template.bind({});
LargeTitle.args = {
  size: 'large',
  position: 'center',
  children: "Large Title"
};

export const MediumTitle = Template.bind({});
MediumTitle.args = {
  size: 'medium',
  position: 'center',
  children: "Medium Title"
};

export const DefaultTitle = Template.bind({});
DefaultTitle.args = {
  size: '',
  children: "Default Title"
};





