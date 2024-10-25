<script>

  import Modal from './Modal.svelte';

  import Modal2 from './Modal2.svelte';
  let platilloToShow = { platillo: '', image: '', descripcion: '' };


  let items = [
    {
      nombre: 'Paquete 4',
      pyd: [
        {platillo:'Dos tostadas y una gordita de res.', image:'/img/platillos/tostadas-gorditas.jpg', descripcion:'2 tostadas y 1 gordita de res incluye consomé.'},
        {platillo:'Asado a la plaza.', image:'/img/platillos/asado.jpg', descripcion:'Asado a la plaza de res, incluye consomé.'},
        {platillo:'Chile relleno.', image:'/img/platillos/chile-relleno.jpg', descripcion:'Chile rellono.'},
        {platillo:'Tabachín.', image:'/img/platillos/tabachin.jpg', descripcion:'Bistec ranchero con quesadilla de maíz acompañado de un huevo o papas fritas.'},
        {platillo:'Torta ahogada de cochinita.', image:'/img/platillos/torta-ahogada.jpg', descripcion:'Torta ahogada de cochinita.'},
        {platillo:'Hamburguesa tradicional.', image:'/img/platillos/hamburguesa.jpg', descripcion:'De res (130g) jamón, lechuga, tomate, aguacate, chiles jalapeños y papas fritas.'},
      ],
      precio: "$200"
    },
    {
      nombre: 'Paquete 5',
      pyd: [
        {platillo:'Pozole.', image:'/img/platillos/pozole.jpg', descripcion:'Pozole acompañado de tostadas y verdura.'},
        {platillo:'Lomo de cerdo en salsa de tamarindo ó de champiñones.', image:'/img/platillos/lomo.jpg', descripcion:'Lomo de cerdo en salsa de tamarindo ó de champiñones, acompañado de ensalada fresca y espaguetti.'},
        {platillo:'Rib eye de cerdo.', image:'/img/platillos/ribeye-cerdo.jpg', descripcion:'Rib eye de cerdo, acompañado de papa gratinada y ensalada fresca.'},
        {platillo:'Camarones salteados.', image:'/img/platillos/camarones.jpg', descripcion:'Camarones salteados, acompañados de ensalada fresca y arroz a la mantequilla.'},
      ],
      precio: "$223"
    },
    {
      nombre: 'Paquete 6',
      pyd: [
        {platillo:'Barbacoa.', image:'/img/platillos/barbacoa.jpg', descripcion:'Barbacoa, frijoles puercos y sopa fría.'},
        {platillo:'Rib eye de res.', image:'/img/platillos/ribeye-res.jpg', descripcion:'Rib eye de res acompañado de papa gratinada y espárragos envueltos en tocino.'},
      ],
      precio: "$280"
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

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  let containerWidth;
  let scrolledLeft = 0;


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
      <button class="fa-solid fa-arrow-left top-1/2 text-red-800 drop-shadow-2xl -left-4 mx-2 absolute text-3xl text-carta-primary cursor-pointer" on:click={() => handleSlide("right")}></button>
      <button class="fa-solid fa-arrow-right top-1/2 text-red-800 -right-4 mx-2 absolute text-3xl text-carta-primary cursor-pointer" on:click={() => handleSlide("left")}></button>
    </div>
    {#if item.nombre === "Paquete 5" || item.nombre === "Paquete 6"}
    <div class="tab-panel-content text-carta-primary text-lg uppercase font-bold">
      {item.nombre}
    </div>
    <div class="flex font-light px-2">
      <p class="text-carta-primary text-4xl font-extrabold text-red-800">{item.precio} <span class="text-lg">(por persona)</span></p>
    </div>
    <p class="text-xl">Sobre pedido:</p>
    {:else}
    <div class="tab-panel-content text-carta-primary text-lg uppercase font-bold">
      {item.nombre}
    </div>
    <div class="flex font-light px-2">
      <p class="text-carta-primary text-4xl font-extrabold text-red-800">{item.precio} <span class="text-lg">(por persona)</span></p>
    </div>
    {/if}
    <div class="my-2">
      <div class="flex font-light px-2">
        <ul class="list-disc text-lg marker:text-red-800">
          {#each item.pyd as platillo}
            <li class="my-2">
              <button
                class="cursor-pointer text-left"
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
    <p class="text-sm"><span class="text-red-800 font-extrabold">Comidas</span>&thinsp;(Horario de 1 a 4 pm) Para 20 personas o más; Incluye café americano (refill) y agua fresca. Selecciona hasta 2 opciones de platillos para tus invitados. No incluye cortesía de casa.</p>
    <p class="text-sm"><span class="text-red-800 font-extrabold">Cenas</span>&thinsp;(Para 50 personas o más) Incluye agua fresca y café americano. Selecciona hasta 1 opcion de platillo para tus invitados. No incluye cortesía de casa.</p>
    <div class="self-end my-8">
      <button class="text-xs font-semibold border-2 border-red-800 p-2 rounded-full cursor-pointer" on:click={()=>openModal()}>Términos y condiciones</button>
    </div>
  </div>
  {/each}
</div>
<Modal show={showModal} closeModal={closeModal}/>
<Modal2 show2={showModal2} closeModal2={closeModal2} platillo={platilloToShow} />
