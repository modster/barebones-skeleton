import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	exclude: [
		'.notes',
		'.storybook',
		'.vscode',
		'./src/stories/**/*',
		'node_modules',
		'public',
		'.wrangler',
		'build',
		'dist'
	],
	ssr: {
		noExternal: ['three']
	}
});
