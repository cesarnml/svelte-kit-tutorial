<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton'
</script>

<button aria-label="nav menu">
	{#if $drawerStore.open}
		<iconify-icon
			on:click={drawerStore.close}
			on:keypress={drawerStore.close}
			class="flex text-3xl"
			icon="material-symbols:close-rounded"
			alt="close-sidebar-icon"
		/>
	{:else}
		<iconify-icon
			on:click={drawerStore.open}
			on:keypress={drawerStore.open}
			class="flex text-3xl"
			icon="material-symbols:menu-rounded"
			alt="open-sidebar-icon"
		/>
	{/if}
</button>
