<script>
    import { T } from '@threlte/core'
    import { DEG2RAD } from 'three/src/math/MathUtils'
</script>

<T.Group>
    <!-- 1x1x1 Cube -->
    <T.Mesh position.y={0.5}>
        <T.BoxGeometry />
        <T.MeshStandardMaterial />
    </T.Mesh>
    <!-- 2x2 Floor -->
    <T.Mesh rotation.x={-90 * DEG2RAD}>
        <T.PlaneGeometry args={[2, 2]} />
        <T.MeshStandardMaterial />
    </T.Mesh>
    <!-- A slot to nest objects in -->
    <slot />
</T.Group>
