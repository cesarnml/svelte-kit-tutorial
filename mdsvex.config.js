/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkAbbr from 'remark-abbr'
import remarkCodeTitles from 'remark-code-titles'
import remarkExternalLinks from 'remark-external-links'
import remarkGithub from 'remark-github'
import remarkReadingTime from 'remark-reading-time'
import highlighter from './src/lib/codeHighlighter.js'
import { repository } from './src/lib/config.js'

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool',
	},
	// @ts-ignore
	highlight: { highlighter },
	remarkPlugins: [
		[remarkAbbr, { expandFirst: true }],
		[remarkGithub, { repository }],
		remarkReadingTime(),
		remarkCodeTitles,
		[remarkExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }],
	],
	rehypePlugins: [
		// @ts-ignore
		rehypeSlug,
		[
			// @ts-ignore
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap',
			},
		],
	],
})

export default config
