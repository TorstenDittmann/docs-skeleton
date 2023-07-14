<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let code: string;
	export let language: string;

	const snippets = getContext<Writable<Set<string>>>('snippets');
	const active = getContext<Writable<string>>('active');

	snippets.update((snippets) => {
		snippets.add(language);
		return snippets;
	});
</script>

{#if $active === language}
	<pre class="code u-width-full-line"><code class="language-{language}">{code}</code></pre>
{/if}
