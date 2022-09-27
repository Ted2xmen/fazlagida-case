import React from 'react';

import Button from './Button';

export default {
  title: 'Shared/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};


const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  shadow: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  shadow: true,
  label: 'Button',
};






