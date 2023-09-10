export const schema = gql`
  type Organization {
    id: String!
    name: String!
    slug: String!
  }

  type Query {
    organization(slug: String!): Organization @requireAuth
    organizations: [Organization!] @requireAuth
  }

  type OrganizationInvite {
    id: String!
  }

  type Mutation {
    createOrganization: Organization! @requireAuth
    createInvite(email: String!, slug: String!): OrganizationInvite!
      @requireAuth
  }
`
