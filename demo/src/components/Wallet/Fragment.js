import gql from 'graphql-tag';

export default gql`
  fragment Wallet on Player {
    id
    wallet {
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
            id
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
