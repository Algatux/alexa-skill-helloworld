
import * as Alexa from 'ask-sdk-core'
import { Response } from 'ask-sdk-model';

export default class ErrorHandler implements Alexa.ErrorHandler {

    canHandle(handlerInput: Alexa.HandlerInput, error: Error): boolean {

        return true;
    }

    handle(handlerInput: Alexa.HandlerInput, error: Error): Response {
        console.log(handlerInput.requestEnvelope.request);
        console.log(error);

        const errorMsg: string = `Error (${error.name}) : ${error.message}`;

        return handlerInput.responseBuilder
            .speak(errorMsg)
            .getResponse()
    }

}