import { gql } from "apollo-boost";

const UserLoginQuery = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      account {
        id
      }
      token
    }
  }
`;

export default UserLoginQuery