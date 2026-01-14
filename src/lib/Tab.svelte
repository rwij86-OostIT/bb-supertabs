<script>
    import { run } from 'svelte/legacy';

    import { getContext , createEventDispatcher, onMount } from "svelte"
    const dispatch = createEventDispatcher();

    const tabStore = getContext ("tabStore")

    let container = $state()
    let {
        id,
        title,
        emphasized,
        isSelected
    } = $props();


    function handleClick () {
        $tabStore.id = id
        $tabStore.boundingBox = container?.getBoundingClientRect();
        dispatch("tabSelect", {"tabID": id, "tabName": title } )
    }
    function init() {
      if (isSelected)
        $tabStore.boundingBox = container?.getBoundingClientRect();
    }

    onMount( () => init() )

    run(() => {
        init (id, title, emphasized, $tabStore.id, isSelected)
    });
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div 
    bind:this={container}
    class="spectrum-Tabs-item"
    class:is-selected={isSelected}
    class:emphasized={isSelected && emphasized}
    tabindex="0"
    onclick={handleClick}>
        <span class="spectrum-Tabs-itemLabel"> {title} </span>
</div>

<style>
    .emphasized {
      color: var(--emphasizedColor) !important;
    }
    .spectrum-Tabs-item {
      color: var(--spectrum-global-color-gray-600);
    }
    .spectrum-Tabs-item.is-selected {
      color: var(--spectrum-global-color-gray-900);
    }
</style>