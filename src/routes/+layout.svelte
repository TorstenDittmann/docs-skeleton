<script>
	import '@appwrite.io/pink';
	import '@appwrite.io/pink-icons';
	import '$lib/prismjs.scss';
	import { Header, Aside } from '$lib/layout';
</script>

<div class="grid-with-side">
	<Header />
	<Aside />
	<main class="main-content">
		<slot />
	</main>
</div>
