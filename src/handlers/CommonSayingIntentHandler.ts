
import * as Alexa from 'ask-sdk-core';
 import { Response as AskResponse } from 'ask-sdk-model';
// import AbstractClientRequestHandler from './AbstractClientRequestHandler';
import CommonSaying from '../CommonSaying';

export default class CommonSayingIntentHandler implements Alexa.RequestHandler {

    public canHandle(handlerInput: Alexa.HandlerInput): boolean {
 
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
                && handlerInput.requestEnvelope.request.intent.name === 'CommonSayingIntent'
    }

    public handle(handlerInput: Alexa.HandlerInput): AskResponse {

        const phrase: string = new CommonSaying().getPhrase();
        const speak: string = `Ecco qui il detto: ${phrase}`;        

        return handlerInput
            .responseBuilder
                .speak(speak)
                .withSimpleCard('Merlo (Detti Italiani)', speak)
                .getResponse();

    }
}