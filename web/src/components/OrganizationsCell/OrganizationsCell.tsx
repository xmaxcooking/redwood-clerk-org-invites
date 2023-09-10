import type { OrganizationsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query OrganizationsQuery {
    organizations {
      id
      name
      slug
    }
  }
`

export const Loading = () => <div>Loading list...</div>

export const Empty = () => <div>Not a member of any organizations.</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  organizations,
}: CellSuccessProps<OrganizationsQuery>) => {
  return (
    <ul>
      {organizations.map((item) => {
        return (
          <Link key={item.id} to={routes.organization({ slug: item.slug })}>
            {JSON.stringify(item)}
          </Link>
        )
      })}
    </ul>
  )
}
