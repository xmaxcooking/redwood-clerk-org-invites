import clerk from '@clerk/clerk-sdk-node'
import type { MutationResolvers, QueryResolvers } from 'types/graphql'

import { ValidationError } from '@redwoodjs/graphql-server'

import { logger } from 'src/lib/logger'

export const organizations: QueryResolvers['organizations'] = async () => {
  try {
    const memberships = await clerk.users.getOrganizationMembershipList({
      userId: context.currentUser.id,
    })

    return memberships?.map((membership) => {
      const { organization } = membership
      const { id, name, slug } = organization
      return { id, name, slug }
    })
  } catch (error) {
    logger.error(error)
    throw new ValidationError('Unable to fetch organizations')
  }
}

export const organization: QueryResolvers['organization'] = async ({
  slug,
}) => {
  try {
    const organization = await clerk.organizations.getOrganization({
      slug: slug,
    })

    return {
      id: organization.id,
      name: organization.name,
      slug: organization.slug,
    }
  } catch (error) {
    logger.error(error)
    throw new ValidationError('Unable to fetch organization')
  }
}

export const createInvite: MutationResolvers['createInvite'] = async ({
  email,
  slug,
}) => {
  const organization = await clerk.organizations.getOrganization({
    slug: slug,
  })

  const invite = await clerk.organizations.createOrganizationInvitation({
    inviterUserId: context.currentUser.id,
    organizationId: organization.id,
    emailAddress: email,
    role: 'admin',
    redirectUrl: `${process.env.CLERK_REDIRECT_DOMAIN}/sign-up`,
  })

  return {
    id: invite.id,
  }
}

export const createOrganization: MutationResolvers['createOrganization'] =
  async () => {
    const organization = await clerk.organizations.createOrganization({
      name: 'test',
      createdBy: context.currentUser.id,
    })

    return {
      id: organization.id,
      name: organization.name,
      slug: organization.slug,
    }
  }
