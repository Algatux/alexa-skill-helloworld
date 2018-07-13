
import App from './App';
import LaunchRequestHandler from './handlers/LaunchRequestHandler';
import ErrorHandler from './handlers/ErrorHandler';
import SayYourNameIntentHandler from './handlers/SayYourNameIntentHandler';
import HelpIntentHandler from './handlers/HelpIntentHandler';
// import WantToVisitIntentHandler from './handlers/WantToVisitIntentHandler';
import CommonSayingIntentHandler from './handlers/CommonSayingIntentHandler';

export const handler = new App()
    .addHandlers(
        new LaunchRequestHandler,
        new SayYourNameIntentHandler,
        // new WantToVisitIntentHandler,
        new CommonSayingIntentHandler,
        new HelpIntentHandler
    )
    .addErrorHandlers(new ErrorHandler)
    .lamdaHandler();
