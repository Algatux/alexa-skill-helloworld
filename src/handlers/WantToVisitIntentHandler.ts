
import * as Alexa from 'ask-sdk-core';
import { Response, IntentRequest } from 'ask-sdk-model';

export default class WantToVisitIntentHandler implements Alexa.RequestHandler {

    public canHandle(handlerInput: Alexa.HandlerInput): boolean {

        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
                && handlerInput.requestEnvelope.request.intent.name === 'SayYourNameIntent'
    }

    public handle(handlerInput: Alexa.HandlerInput): Response {

        const request: IntentRequest = handlerInput.requestEnvelope.request as IntentRequest;
        const city = request.intent.slots && request.intent.slots.city;

        const speak: string = `hai detto di voler visitare ${city}`;

        return handlerInput
            .responseBuilder
                .speak(speak)
                .withSimpleCard('Hello', speak)
                .getResponse();

    }
}