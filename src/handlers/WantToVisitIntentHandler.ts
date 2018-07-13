
import * as Alexa from 'ask-sdk-core';
 import { Response as AskResponse } from 'ask-sdk-model';
import AbstractClientRequestHandler from './AbstractClientRequestHandler';

export default class WantToVisitIntentHandler extends AbstractClientRequestHandler implements Alexa.RequestHandler {

    public canHandle(handlerInput: Alexa.HandlerInput): boolean {
 
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
                && handlerInput.requestEnvelope.request.intent.name === 'WantToVisitIntent'
    }

    public handle(handlerInput: Alexa.HandlerInput): AskResponse {

        const speak: string = `hai detto di voler visitare stocazzo`;        

        return handlerInput
            .responseBuilder
                .speak(speak)
                .withSimpleCard('Hello', speak)
                .getResponse();

    }
}