import type {
  OrganizationQuery,
  OrganizationQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import OrganizationInviteForm from 'src/components/OrganizationInviteForm/OrganizationInviteForm'

export const QUERY = gql`
  query OrganizationQuery($slug: String!) {
    organization: organization(slug: $slug) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<OrganizationQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  organization,
}: CellSuccessProps<OrganizationQuery, OrganizationQueryVariables>) => {
  return (
    <>
      <div>{JSON.stringify(organization)}</div>
      <OrganizationInviteForm />
    </>
  )
}
