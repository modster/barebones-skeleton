<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { Theatre } from '@threlte/theatre';
	import Scene1 from '$lib/components/Scene1.svelte';

	// import Scene2 from '$lib/components/Scene2.svelte'
</script>

<div class="container mx-auto flex h-full items-center justify-center">
	<section class="img-bg">
		<!-- <figure>
            <Canvas>
                <Theatre>
                    <Scene1 />
                </Theatre>
            </Canvas>
            
             -->
		<!-- rocket -->
		<figure>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
				/>
			</svg>
		</figure>
	</section>
	<h1 class="h1">
		<span
			class="bg-gradient-to-br from-blue-500 to-cyan-300 box-decoration-clone bg-clip-text text-transparent"
			>Design.</span
		>
	</h1>
	<h1 class="h1">
		<span
			class="bg-gradient-to-br from-red-500 to-yellow-500 box-decoration-clone bg-clip-text text-transparent"
			>Build.</span
		>
	</h1>
	<h1 class="h1">
		<span
			class="bg-gradient-to-br from-pink-500 to-violet-500 box-decoration-clone bg-clip-text text-transparent"
			>Deploy.</span
		>
	</h1>
	<!-- </figure> -->
	<!-- </section> -->
</div>

<style lang="postcss">
	figure {
		@apply relative flex flex-col;
	}
	figure svg,
	.img-bg {
		@apply h-64 w-64 md:h-80 md:w-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation:
			pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
