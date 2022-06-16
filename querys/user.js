import { gql } from '@apollo/client'

export const AUTHENTICATE_USER = gql`
  mutation AuthenticateUser($input: AuthenticateUser) {
    authenticateUser(input: $input) {
      token
    }
  }
`

export const ADD_USER = gql`
  mutation AddUser($input: UserInput) {
    addUser(input: $input) {
      id
      duelist_name
      discord_username
      user
      is_active
      house
      created_at
    }
  }
`

export const GET_SESSION = gql`
  query Query {
    getSession {
      id
      duelist_name
      discord_username
      user
      is_active
      house
      created_at
    }
  }
`
