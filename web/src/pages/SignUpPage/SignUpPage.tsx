import { SignedOut, SignUp, SignedIn } from '@clerk/clerk-react'

import { Redirect, routes, useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SignUpPage = () => {
  const { __clerk_ticket } = useParams()
  return (
    <>
      <MetaTags title="SignUp" description="SignUp page" />

      <SignedOut>
        <SignUp
          path="virtual"
          signInUrl={routes.signIn({ __clerk_ticket })}
          redirectUrl={routes.home()}
        />
      </SignedOut>

      <SignedIn>
        <Redirect to={routes.home()} />
      </SignedIn>
    </>
  )
}

export default SignUpPage
