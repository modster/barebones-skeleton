    <script lang="ts">
        import { onMount } from 'svelte'
      import { T } from '@threlte/core'
        import { Align, Grid, OrbitControls } from '@threlte/extras'
        import type { Contributions } from '$lib/types'
    
        let contributions: Contributions[] = []

        onMount(async () => {
            const response = await fetch('https://gh-contributions-api.vercel.app/mattcroat/2022')
            contributions = await response.json()
        })
    </script>

<svelte:head>
	<title>GitHub API</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to Skeleton.</h2>
	</div>
    
    <Grid
        infiniteGrid
        sectionColor="#4a4b4a"
        sectionSize={20}
        cellSize={20}
        autorotate
        fadeDistance={400}
    />
    
    <T.PerspectiveCamera makeDefault position={[10, 100, 100]} fov={60}>
        <OrbitControls enableDamping autoRotate />
    </T.PerspectiveCamera>
    
    <T.AmbientLight intensity={0.4} />
    <T.DirectionalLight position={[0, 200, 200]} intensity={2} color={0xffffff} />
    <T.DirectionalLight position={[0, 200, -200]} color={0xffffff} intensity={2} />
    
    <Align auto position.y={100}>
        {#each contributions as row, i}
            {#each row as day, j}
                {#if day}
                    <T.Group position={[0, 0, 12 * i]}>
                        <T.Mesh position={[12 * j, day.count / 2, 0]}>
                            <T.BoxGeometry args={[10, day.count, 10]} />
                            <T.MeshStandardMaterial />
                        </T.Mesh>
                    </T.Group>
                {/if}
            {/each}
        {/each}
    </Align>
</div>

<style>
	:global(html, body) {
		height: 100%;
	}

	:global(body) {
		display: grid;
		place-content: center;
		font-family: sans-serif;
		color: hsl(220 10% 98%);
		background-color: hsl(220 10% 10%);
	}


	.text-center {
		text-align: center;
	}
</style>