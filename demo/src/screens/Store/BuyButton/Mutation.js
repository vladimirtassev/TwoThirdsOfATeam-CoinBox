import gql from 'graphql-tag';
import Card from 'components/Card/Fragment';

export default gql`
  mutation TransferableBuy($input: TransferableBuyInput!) {
    response: transferableBuy(input: $input) {
      node {
        id
        consumables {
          amount
          consumable {
            id
          }
        }
        transferables {
          edges {
            node {
              ...Card
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
      errors {
        field
        messages
      }
    }
  }
  ${Card}
`;
