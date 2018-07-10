
import * as Alexa from 'ask-sdk-core';
import LaunchRequestHandler from './handlers/LaunchRequestHandler';
import ErrorHandler from './handlers/ErrorHandler';
import SayYourNameIntentHandler from './handlers/SayYourNameIntentHandler';
import HelpIntentHandler from './handlers/HelpIntentHandler';
import WantToVisitIntentHandler from './handlers/WantToVisitIntentHandler';

export const handler = Alexa
    .SkillBuilders
    .custom()
    .addRequestHandlers(
        new LaunchRequestHandler(),
        new HelpIntentHandler(),
        new SayYourNameIntentHandler(),
        new WantToVisitIntentHandler()
    )
    .addErrorHandlers(new ErrorHandler())
    .lambda();