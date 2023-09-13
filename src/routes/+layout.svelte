<script>
    import '../app.postcss'

    import { AppShell, AppBar } from '@skeletonlabs/skeleton'

    // Highlight JS
    import hljs from 'highlight.js'
    import 'highlight.js/styles/github-dark.css'
    import { storeHighlightJs } from '@skeletonlabs/skeleton'
    storeHighlightJs.set(hljs)

    // Floating UI for Popups
    import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom'
    import { storePopup } from '@skeletonlabs/skeleton'
    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })
</script>

<!-- App Shell -->
<AppShell>
    <svelte:fragment slot="header">
        <!-- App Bar -->
        <AppBar class="gradient-heading">
            <svelte:fragment slot="lead">
                <a
                    class="btn btn-sm variant-ghost-surface"
                    href="https://datadash.cloud"
                    target="_self"
                    rel="noreferrer"
                >
                    <strong class="text-xl uppercase">datadash</strong>
                </a></svelte:fragment
            >
            <svelte:fragment slot="trail">
                <a
                    class="btn btn-sm variant-ghost-surface"
                    href="https://twitter.com/goodgreeff"
                    target="_blank"
                    rel="noreferrer"
                >
                    Twitter
                </a>
                <a
                    class="btn btn-sm variant-ghost-surface"
                    href="https://github.com/modster/barebones-skeleton"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <!-- Page Route Content -->
    <slot />
</AppShell>
