<script>
    import Component from "../src/Component.svelte"
    import Boundary from "./Boundary.js"
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props & { [key: string]: any }} */
  let { ...props } = $props();
</script>

<Boundary>
  <Component {...props}>
    {@render props.children?.()}
  </Component>
</Boundary>