
import * as Alexa from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export default class GreetIntentHandler implements Alexa.RequestHandler {

    public canHandle(handlerInput: Alexa.HandlerInput): boolean | Promise<boolean> {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
                && handlerInput.requestEnvelope.request.intent.name === 'HelloIntent'
    }

    public handle(handlerInput: Alexa.HandlerInput): Response{

        return handlerInput
            .responseBuilder
                .speak(`Ciao sono alexa`)
                .getResponse();
    }

}