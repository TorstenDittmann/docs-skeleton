<script context="module">
	import strong from './strong.svelte';
	import h1 from './h1.svelte';
	import h2 from './h2.svelte';
	import h3 from './h3.svelte';
	import h4 from './h4.svelte';
	import h5 from './h5.svelte';
	import h6 from './h6.svelte';
	import a from './a.svelte';
	import em from './em.svelte';
	import ul from './ul.svelte';
	import ol from './ul.svelte';
	import li from './li.svelte';
	import code from './code.svelte';
	import pre from './pre.svelte';
	import p from './p.svelte';
	import { Cover, Content } from '$lib/layout';
	export { strong, h1, h2, h3, h4, h5, h6, a, em, ul, ol, li, code, pre, p };
</script>

<script>
	/**
	 * @type {string}
	 */
	export let title;
	/**
	 * @type {string}
	 */
	export let description;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<Cover>
	<svelte:fragment slot="title">{title}</svelte:fragment>
	{description}
</Cover>
<Content><slot /></Content>
