// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Screech from './Screech';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Screech',
    component: Screech,
} as ComponentMeta<typeof Screech>;

const Template: ComponentStory<typeof Screech> = (args) => <Screech {...args} />;

export const BasicScreech = Template.bind({});

BasicScreech.args = {
    id: 1,
    userid: 1,
    username: "test",
    text: "test text"
};