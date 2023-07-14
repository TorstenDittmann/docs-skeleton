import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { getHighlighter } from 'shiki';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: {
		_: './src/lib/markdown/module.svelte'
	},

	remarkPlugins: [],
	rehypePlugins: [],
	highlight: {
		highlighter: async (code, lang) => {
			const highlighter = await getHighlighter({ theme: 'css-variables' });

			try {
				const result = highlighter.codeToHtml(code, {
					lang
				});
				return `<section class="box u-overflow-hidden common-section"><div class="controls u-position-absolute u-inset-inline-end-8 u-inset-block-start-8 u-flex u-gap-8"></div><pre class="language-${lang}"><code>${result}</code></pre></section>`;
			} catch (error) {
				return `<section class="box u-overflow-hidden common-section"><div class="controls u-position-absolute u-inset-inline-end-8 u-inset-block-start-8 u-flex u-gap-8"></div><pre><code>${code}</code></pre></section>`;
			}
		}
	}
});

export default config;
