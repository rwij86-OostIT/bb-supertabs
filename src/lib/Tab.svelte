<script>
  import { getContext, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const tabStore = getContext("tabStore");

  let container;
  let { id, title, emphasized, isSelected } = $props();

  function handleClick() {
    tabStore.id = id;
    tabStore.boundingBox = container?.getBoundingClientRect();
    dispatch("tabSelect", { tabID: id, tabName: title });
  }

  function syncBoundingBox() {
    if (isSelected && container) {
      tabStore.boundingBox = container.getBoundingClientRect();
    }
  }

  // rerun wanneer isSelected / container verandert
  $effect(syncBoundingBox);
</script>

<div
  bind:this={container}
  class="spectrum-Tabs-item"
  class:is-selected={isSelected}
  class:emphasized={isSelected && emphasized}
  tabindex="0"
  onclick={handleClick}
>
  <span class="spectrum-Tabs-itemLabel">{title}</span>
</div>
