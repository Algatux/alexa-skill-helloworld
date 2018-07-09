
import * as Alexa from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export default class LaunchRequestHandler implements Alexa.RequestHandler {

    public canHandle(handlerInput: Alexa.HandlerInput): boolean | Promise<boolean> {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    }

    public handle(handlerInput: Alexa.HandlerInput): Response{

        return handlerInput
            .responseBuilder
                .speak('Ciao benvenuto in questa fantastica skill che non fa un pene!')
                .getResponse();
    }

}