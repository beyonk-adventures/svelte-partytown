<svelte:head>
  <script type="text/partytown">
    console.info('script loaded by partytown 🎉')
  </script>
</svelte:head>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div use:partytown={{ debug: true }}></div>

<script>
  import { partytown } from '$lib'
</script>