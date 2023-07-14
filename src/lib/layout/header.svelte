<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let theme: string = 'light';

	function getTheme() {
		const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)');
		const theme = localStorage.getItem('theme') ?? (defaultTheme.matches ? 'dark' : 'light');
		return theme;
	}

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		localStorage.setItem('theme', theme);
	}

	onMount(() => {
		theme = getTheme();
	});

	$: if (browser && theme) {
		document.body.setAttribute('class', theme === 'dark' ? 'theme-dark' : 'theme-light');
	}
</script>

<header class="main-header u-padding-inline-end-0">
	<button class="button is-text is-only-icon is-not-desktop nav-btn" aria-label="Open Menu">
		<span aria-hidden="true" class="icon-menu" />
	</button>
	<a class="logo" href="/">
		<img src="/logo.svg" width="140" height="30" alt="Appwrite Logo" />
	</a>
	<div class="main-header-end u-margin-inline-end-16">
		<ul class="buttons-list is-with-padding">
			<li class="buttons-list-item u-padding-inline-0 astro-I7CAYJX6">
				<button
					class="button is-only-icon is-text"
					aria-label="Replace to Dark Mode Theme"
					on:click={toggleTheme}
				>
					<span class="icon-sun" aria-hidden="true" />
				</button>
			</li>
		</ul>
	</div>
</header>
