import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import OrganizationCell from 'src/components/OrganizationCell'

type OrganizationPageProps = {
  slug: string
}

const OrganizationPage = ({ slug }: OrganizationPageProps) => {
  return (
    <>
      <MetaTags title="Organization" description="Organization page" />
      <OrganizationCell slug={slug} />
      <button onClick={() => navigate(routes.home())}>
        Go back to organizations
      </button>
    </>
  )
}

export default OrganizationPage
