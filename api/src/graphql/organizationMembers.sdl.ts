export const schema = gql`
  type OrganizationMember {
    id: String!
    organizationId: Int!
    organization: Organization!
    userId: Int!
    user: User!
  }
`
