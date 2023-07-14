<script lang="ts">
	export let href: string;
	export let rel: string | undefined = undefined;
	export let title: string | undefined = undefined;
</script>

<a class="link" {href} {rel} {title}><slot /></a>
