import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    color: {
      control: 'select',
      // options: ['normal', 'h1'],
    },
    fontColor: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  label: 'Hello World',
  size: 'normal',
  allCap: false, // true: Capitalize all words, false: Capitalize first word
};

export const AllCap = Template.bind({});
AllCap.args = {
  size: 'normal',
  allCap: true, // true: Capitalize all words, false: Capitalize first word
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  color: 'tertiary',
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'h1',
  fontColor: '#2d35a6',
};
