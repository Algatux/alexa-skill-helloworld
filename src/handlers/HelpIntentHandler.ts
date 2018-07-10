
import * as Alexa from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export default class HelpIntentHandler implements Alexa.RequestHandler {

    public canHandle(handlerInput: Alexa.HandlerInput): boolean {

        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
                && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent'
    }

    public handle(handlerInput: Alexa.HandlerInput): Response{

        const speak: string = `posso dirti come mi chiamo`;

        return handlerInput
            .responseBuilder
                .speak(speak)
                .withSimpleCard('Hello', speak)
                .getResponse();
    }
}