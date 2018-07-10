
import * as Alexa from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export default class SayYourNameIntentHandler implements Alexa.RequestHandler {

    public canHandle(handlerInput: Alexa.HandlerInput): boolean {

        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
                && handlerInput.requestEnvelope.request.intent.name === 'SayYourNameIntent'
    }

    public handle(handlerInput: Alexa.HandlerInput): Response{

        const speak: string = `Ciao sono alexa`;

        return handlerInput
            .responseBuilder
                .speak(speak)
                .withSimpleCard('Hello', speak)
                .getResponse();
    }

}