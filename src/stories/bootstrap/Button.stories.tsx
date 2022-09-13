// import * as btn from './Button';
import  * as BootstrapButton from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const { default: Btn } = BootstrapButton;


export default {
  title: 'Button',
  component: Btn,
  argTypes: {
    className: {
      options: ['btn btn-primary', 'btn btn-secondary', 'btn btn-danger', 'btn btn-info', 'btn btn-dark', 'btn btn-warning'],
      control: {type: 'select'}
    }
  }
} as ComponentMeta<typeof Btn>

const Template: ComponentStory<typeof Btn> = ({ children, ...args }) => <Btn {...args}>{children}</Btn>

export const Button = Template.bind({})

Button.args = {
  children: 'Click it',
  className: 'btn btn-primary'
}

