import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm'

import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { transformationTypes } from '@/constants'
import { getUserById } from '@/actions/user.actions'
import { getImageById } from '@/actions/image.actions'

export default async function Page({ params: { id } }: SearchParamProps) {
	const { userId } = auth()

	if (!userId) redirect('/sign-in')

	const user = await getUserById(userId)
	const image = await getImageById(id)

	const transformation =
		transformationTypes[image.transformationType as TransformationTypeKey]

	return (
		<>
			<Header title={transformation.title} subtitle={transformation.subTitle} />

			<section className="mt-10">
				<TransformationForm
					action="Update"
					userId={user._id}
					type={image.transformationType as TransformationTypeKey}
					creditBalance={user.creditBalance}
					config={image.config}
					data={image}
				/>
			</section>
		</>
	)
}
