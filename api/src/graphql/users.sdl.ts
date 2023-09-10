export const schema = gql`
  type User {
    id: String!
    memberships: [OrganizationMember]!
  }
`
