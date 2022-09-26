import React from 'react';
import Badge from './Badge';

export default {
  title: 'Shared/Badge',
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};

const Template = (args) => <Badge {...args} />;

export const Listeners = Template.bind({});
Listeners.args = {
  type: "listeners",
  children: "123456"
};

export const Playcount = Template.bind({});
Playcount.args = {
  type: "playcount",
  children: "123456"
};
