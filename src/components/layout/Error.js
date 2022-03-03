import React from 'react'

import { ErrorStyled } from '../styles/ErrorStyled'

import { ReactComponent as MissingSvg } from "../../assets/shared/missing.svg";


export default function Error() {
  return (
    <ErrorStyled>
        <MissingSvg />
        <h2>There is no feedback for that tag yet.</h2>
        <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
    </ErrorStyled>
  )
}
