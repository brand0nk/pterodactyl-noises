import React, { Component } from 'react'

type Props = {
   id: number,
   userid: number,
   username: string,
   text: string
}

type State = {}

export class screech extends Component<Props, State> {
   state = {}

   render() {
      return (
         <div>
            <p>{this.props.username}</p>
            <p>{this.props.text}</p>
         </div>
      )
   }
}

export default screech