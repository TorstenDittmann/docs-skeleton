<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let initial: string;

	const snippets = setContext('snippets', writable(new Set()));
	const active = setContext('active', writable(''));

	let value: string = initial;

	$: active.set(value);
</script>

<div class="select u-width-full-line">
	<select bind:value>
		{#each [...$snippets] as snippet}
			<option value={snippet}>{snippet}</option>
		{/each}
	</select>
	<span class="icon-cheveron-down" aria-hidden="true" />
</div>

<div class="card">
	<slot />
</div>
