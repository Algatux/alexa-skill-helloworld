
import * as Alexa from 'ask-sdk-core';
import LaunchRequestHandler from './handlers/LaunchRequestHandler';
import GreetIntentHandler from './handlers/GreetIntentHandler';

export const handler = Alexa
    .SkillBuilders
    .custom()
    .addRequestHandlers(
        new LaunchRequestHandler(),
        new GreetIntentHandler()
    )
    .lambda();