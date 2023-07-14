<script>
	import { Content, Cover } from '$lib/layout';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Cover>
	<svelte:fragment slot="title">Title</svelte:fragment>
	Here can be the sub title.
</Cover>
<Content />
