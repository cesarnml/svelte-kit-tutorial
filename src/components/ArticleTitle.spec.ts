import { render, screen } from '@testing-library/svelte'

import ArticleTitle from './ArticleTitle.svelte'

describe('ArticleTitle', () => {
	const title = 'Test title'
	const slug = 'test-slug'

	test('if slug passed href contains slug', async () => {
		render(ArticleTitle, { title, slug })
		const titleLink = screen.getByRole('link', { name: title })
		await expect(titleLink).toHaveAttribute('href', expect.stringContaining(slug))
	})

	test('if slug not passed href contains id', async () => {
		const title = 'Test title'
		const id = title
			.toLowerCase()
			.replace(/[^a-zA-Z ]/g, '')
			.replace(/\s/g, '-')

		render(ArticleTitle, { title })

		const titleLink = screen.getByRole('link', { name: title })
		await expect(titleLink).toHaveAttribute('href', expect.stringContaining(`#${id}`))
	})
})
