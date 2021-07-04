import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' }
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    children: 'default button'
};
DefaultButton.storyName = '默认 Button'

export const ButtonWithSize: ComponentStory<typeof Button> = (args) => (
  <>
    <Button size="lg" {...args}> large button </Button>
    <Button size="sm" {...args}> small button </Button>
  </>
)
ButtonWithSize.storyName = '不同尺寸的 Button'
ButtonWithSize.args = {}

export const ButtonWithType: ComponentStory<typeof Button> = (args) => (
  <>
    <Button btnType="primary" {...args}> primary button </Button>
    <Button btnType="danger" {...args}> danger button </Button>
    <Button btnType="link" href="https://google.com" {...args}> link button </Button>
  </>
)
ButtonWithType.storyName = '不同类型的 Button'
ButtonWithType.args = {}