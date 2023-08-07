<script>  

  let items = [
    {
      nombre: 'Paquete 1',
      pyd: ['Huevos divorciados.', 'Huevos con jamón.','Chilaquiles rojos con huevo.'],
      precio: "$170"
    },
    {
      nombre: 'Paquete 2',
      pyd: ['El Arroyo.', 'El Sauce.', 'Chilaquiles poblanos con pollo.'],
      precio: "$199"
    },
    {
      nombre: 'Paquete 3',
      pyd: ['Del Pueblo.', 'Huevos revueltos con machaca.','Enchiladas rojas con pollo.', 'La Limita'],
      precio: "$210"
    },
  ];

  let containerWidth;
  let scrolledLeft = 0;

  $: if (containerWidth == scrolledLeft) {
    console.log('hit scroll snap');
  }

  function handleSlide(direction) {
    const container = document.querySelector('.tab-panels-container');
    const panelWidth = containerWidth;
    const numPanels = items.length;
    const maxScrollLeft = (panelWidth * numPanels) - containerWidth;

    if (direction === "left" && scrolledLeft < maxScrollLeft) {
      scrolledLeft += panelWidth;
      container.scroll({ left: scrolledLeft, behavior: 'smooth' });
    } else if (direction === "right" && scrolledLeft > 0) {
      scrolledLeft -= panelWidth;
      container.scroll({ left: scrolledLeft, behavior: 'smooth' });
    }
  }
</script>

<style>
  .tab-panels-container {
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    height: 100%;
    width: 100vw;
    display: flex;
  }

  .tab-panel {
    scroll-snap-align: start;
    /* only supported in Chrome */
    scroll-snap-stop: always;
    flex: 1 0 auto;
  }
</style>

<div class="tab-panels-container font-prompt scroll-p-4 snap-mandatory" bind:clientWidth={containerWidth} on:scroll={({ target }) => scrolledLeft = target.scrollLeft}>
  {#each items as item}
  <div class="relative tab-panel flex justify-around p-8 bg-white/50 flex-col w-11/12 m-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
    <div>
      <i class="fa-solid fa-chevron-left top-1/2 -left-4 mx-2 absolute text-3xl text-carta-primary cursor-pointer" style="
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            1px 1px 0 #000;
        " on:click={() => handleSlide("right")}></i>
      <i class="fa-solid fa-chevron-right top-1/2 -right-4 mx-2 absolute text-3xl text-carta-primary cursor-pointer" style="
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            1px 1px 0 #000;
        " on:click={() => handleSlide("left")}></i>
    </div>
    <div class="tab-panel-content text-carta-primary text-lg uppercase font-bold">
      {item.nombre}
    </div>
    <div class="flex font-light px-2">
      <p class="text-carta-primary text-4xl font-extrabold text-red-800">{item.precio} <span class="text-lg">(por persona)</span></p>
    </div>
    <div class="my-2">
      <div class="flex font-light px-2">
        <ul class="list-disc font-bold marker:text-red-800">
          {#each item.pyd as platillo}
            <li>{platillo}</li>
          {/each}
      </div>
    </div>
    <div class="self-end my-8">
      <p class="text-xs border-2 border-red-800 p-2 rounded-full">Términos y condiciones</p>
    </div>
  </div>
  {/each}
</div>
