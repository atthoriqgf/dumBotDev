import { Text } from '@botonic/react'
import { RequestContext } from '@botonic/react/src/contexts'
import React from 'react'

export default class extends React.Component {
  static contextType = RequestContext;
  constructor(props){
    super(props);
    this.state = {
      guests: "",
    };
  }

  static async botonicInit({input, session, params, lastRoutePath, plugins}) {
    let {dialogflow} = plugins;
    await dialogflow.pre({input, session, lastRoutePath});
    const result = input.dialogflowResponse.queryResult.fulfillmentText;
    return {result};
  }

  render() {
    return <Text>{this.props.result}</Text>
  }
}
