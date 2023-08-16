<script>  

  import Modal from './Modal.svelte';
  import Modal2 from './Modal2.svelte';
  let platilloToShow = { platillo: '', image: '', descripcion: '' };

  let items = [
    {
      nombre: 'Paquete 4',
      pyd: [
        {platillo:'2 tostadas y 1 gordita.', image:'', descripcion:'2 tostadas y 1 gordita de res incluye consomé.'},
        {platillo:'Torta ahogada.', image:'/img/platillos/torta-ahogada.jpg', descripcion:'Torta ahogada de cochinita.'},
        {platillo:'Hamburguesa.', image:'/img/platillos/limiburger.jpg', descripcion:'Hamburguesa con queso y papas fritas.'},
        {platillo:'Chilaquiles rojos.', image:'/img/platillos/chilaquiles-rojos-pollo.jpg', descripcion:'Chilaquiles rojos con pollo, incluye frijol con queso espolvoreado y totops'},
      ],
      precio: "$191"
    },
    {
      nombre: 'Paquete 5',
      pyd: [
        {platillo:'Asado a la plaza.', image:'', descripcion:'Asado a la plaza de res, incluye consomé.'},
        {platillo:'El Danzante.', image:'/img/platillos/torta-ahogada.jpg', descripcion:'Pellizcada grande con asientos, encima 130g de arrachera, sabroso queso fundido coronado con chorizo, acompañado con guacamole y frijoles de la olla.'},
        {platillo:'Pozole.', image:'/img/platillos/hamburguesa.jpg', descripcion:'Sobrepedido'},
      ],
      precio: "$212"
    },
    {
      nombre: 'Paquete 6',
      pyd: [
        {platillo:'Torta mexicana.', image:'/img/platillos/torta-mexicana.jpg', descripcion:' Rellena con top sirloin al carbón, guacamole, cebollita asada, queso gratinado con consomé y papas fritas.'},
        {platillo:'La Noria.', image:'', descripcion:'Carne asada, frijoles en agua y sal, cebollitas cambray y salsa bandera.'},
        {platillo:'Tabachín.', image:'', descripcion:'Bistec ranchero con quesadilla de maíz y papas fritas.'},
        {platillo:'Limiburguer.', image:'/img/platillos/limiburger.jpg', descripcion:'Sabrosa hamburguesa de res (130g) al carbón con queso chihuahua, cebollita crispy, tocino, champiñones salteados, acompañados con BBQ, guacamole y papas fritas.'},
      ],
      precio: "$232"
    },
    {
      nombre: 'Paquete 7',
      pyd: [
        {platillo:'Barbacoa.', image:'', descripcion:'Barbacoa acompañada de sopa fría y frijoles puercos, se sirve con tortillas al comal. Sobrepedido.'},
        {platillo:'Lomo relleno.', image:'', descripcion:'Lomo relleno con gravy de ciruela, acompañado de puré de papa y verduras al vapor, se sirve con pan de mesa. Sobrepedido'},
      ],
      precio: "$303"
    },
  ];
  
  let showModal2 = false;

  function openModal2() {
    showModal2 = true;
  }

  function closeModal2() {
  showModal2 = false;
  }
  let showModal = false;
  let containerWidth;
  let scrolledLeft = 0;

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }


  function handleSlide(direction) {
  const container = document.querySelector('.tab-panels-container2');
  const panelWidth = containerWidth;
  const numPanels = items.length;

  if (direction === "left") {
    scrolledLeft = (scrolledLeft + panelWidth) % (panelWidth * numPanels);
  } else if (direction === "right") {
    scrolledLeft = (scrolledLeft - panelWidth + panelWidth * numPanels) % (panelWidth * numPanels);
  }

  container.scroll({ left: scrolledLeft, behavior: 'smooth' });
}

</script>

<style>
  .tab-panels-container2 {
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    height: 100%;
    width: 100vw;
    display: flex;
  }

  .tab-panel {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    flex: 1 0 auto;
  }
</style>

<div class="tab-panels-container2 font-prompt scroll-p-4 snap-mandatory" bind:clientWidth={containerWidth} on:scroll={({ target }) => scrolledLeft = target.scrollLeft}>
  {#each items as item}
  <div class="relative tab-panel flex justify-around p-8 bg-white/50 flex-col w-11/12 m-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
    <div>
      <button class="fa-solid fa-chevron-left top-1/2 -left-4 mx-2 absolute text-3xl text-carta-primary cursor-pointer" on:click={() => handleSlide("right")}></button>
      <button class="fa-solid fa-chevron-right top-1/2 -right-4 mx-2 absolute text-3xl text-carta-primary cursor-pointer" on:click={() => handleSlide("left")}></button>
    </div>
    <div class="tab-panel-content text-carta-primary text-lg uppercase font-bold">
      {item.nombre}
    </div>
    <div class="flex font-light px-2">
      <p class="text-carta-primary text-4xl font-extrabold text-red-800">{item.precio} <span class="text-lg">(por persona)</span></p>
    </div>
    <div class="my-2">
      <div class="flex font-light px-2">
        <ul class="list-disc text-lg marker:text-red-800">
          {#each item.pyd as platillo}
          <li class="my-2">
            <button
              class="cursor-pointer"
              on:click={() => {
                platilloToShow = platillo;
                openModal2();
              }}
            >
            {platillo.platillo}&thinsp;<i class="text-sm fa-regular fa-image"></i>
            </button>
          </li>
          {/each}
        </ul>
      </div>
    </div>
    <div class="self-end my-8">
      <button class="text-xs font-semibold border-2 border-red-800 p-2 rounded-full cursor-pointer" on:click={() => openModal()}>Términos y condiciones</button>
      <Modal show={showModal} closeModal={closeModal} />
    </div>
  </div>
  {/each}
</div>
<Modal2 show={showModal2} closeModal2={closeModal2} platillo={platilloToShow} />
