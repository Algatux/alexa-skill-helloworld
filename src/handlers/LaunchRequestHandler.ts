
import * as Alexa from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export default class LaunchRequestHandler implements Alexa.RequestHandler {

    public canHandle(handlerInput: Alexa.HandlerInput): boolean {
        
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    }

    public handle(handlerInput: Alexa.HandlerInput): Response{

        const speak: string = 'Ciao benvenuto in questa fantastica skill che non fa un pene!';

        return handlerInput
            .responseBuilder
                .speak(speak)
                .withSimpleCard('Hello', speak)
                .getResponse();
    }

}