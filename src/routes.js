import NotFound from './actions/404'
import Bye from './actions/bye'
import Hi from './actions/hi'

export const routes = [
  // Captures different intents (enable Dialogflow in src/plugins.js)
  // You can trigger your actions through an intent with 'input' or 'intent' rules
  // Make sure the name of the intent corresponds exactly with the one defined in your NLU service (case sensitive)
  {path: 'hi', intent:'Default Welcome Intent', action: Hi},
  { path: 'bye', intent: 'Bye', action: Bye },
  { path: 'not_found', intent: "Default Fallback Intent", type: /.*/, action: Hi },

  /* There's an implicit rule that captures any other input and maps it to
     the 404 action, it would be equivalent to:
     {type: /^.*$/, action: "404"}
  */
]
