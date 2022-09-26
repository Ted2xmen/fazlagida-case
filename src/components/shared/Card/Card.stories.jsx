import React from 'react';

import Card from './Card';

export default {
  title: 'Shared/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};


const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};






