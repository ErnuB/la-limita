<script>

  import Modal from './Modal.svelte';

  import Modal2 from './Modal2.svelte';
  let platilloToShow = { platillo: '', image: '', descripcion: '' };


  let items = [
    {
      nombre: 'Paquete 4',
      pyd: [
        {platillo:'2 tostadas y 1 gordita.', image:'/img/platillos/tostadas-gorditas.jpg', descripcion:'2 tostadas y 1 gordita de res incluye consomé.'},
        {platillo:'Torta ahogada.', image:'/img/platillos/torta-ahogada.jpg', descripcion:'Torta ahogada de cochinita.'},
        {platillo:'Hamburguesa.', image:'/img/platillos/hamburguesa.jpg', descripcion:'Hamburguesa tradicional de res (130g), jamón, lechuga, tomate, aguacate, chiles jalapeños y papas fritas.'},
        {platillo:'Chilaquiles rojos.', image:'/img/platillos/chilaquiles-rojos-pollo.jpg', descripcion:'Chilaquiles rojos con pollo, incluye frijol con queso espolvoreado y totopos'},
      ],
      precio: "$200"
    },
    {
      nombre: 'Paquete 5',
      pyd: [
        {platillo:'Asado a la plaza.', image:'/img/platillos/asado.jpg', descripcion:'Asado a la plaza de res, incluye consomé.'},
        {platillo:'El Danzante.', image:'/img/platillos/danzante.jpg', descripcion:'Pellizcada grande con asientos, encima 100g de arrachera, sabroso queso fundido coronado con chorizo, acompañado con aguacate y frijoles de la olla.'},
        {platillo:'Pozole.', image:'/img/platillos/pozole.jpg', descripcion:'Sobrepedido'},
      ],
      precio: "$223"
    },
    {
      nombre: 'Paquete 6',
      pyd: [
        {platillo:'Torta mexicana.', image:'/img/platillos/torta-mexicana.jpg', descripcion:' Rellena con top sirloin al carbón, auguacate, cebollita asada, queso gratinado con consomé y papas fritas.'},
        {platillo:'La Noria.', image:'/img/platillos/noria.jpg', descripcion:'Carne asada (200g), frijoles de la olla, cebollitas cambray y salsa bandera.'},
        {platillo:'Tabachín.', image:'/img/platillos/tabachin.jpg', descripcion:'Bistec ranchero con quesadilla de maíz acompañado de un huevo o papas fritas.'},
        {platillo:'Limiburguer.', image:'/img/platillos/limiburger.jpg', descripcion:'Sabrosa hamburguesa de res (130g) al carbón con queso chihuahua, cebollita asada, tocino, champiñones salteados, acompañados con BBQ, guacamole y papas fritas.'},
      ],
      precio: "$244"
    },
    {
      nombre: 'Paquete 7',
      pyd: [
        {platillo:'Barbacoa.', image:'/img/platillos/barbacoa.jpg', descripcion:'Barbacoa acompañada de sopa fría y frijoles puercos, se sirve con tortillas al comal. Sobrepedido.'},
      ],
      precio: "$319"
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
    <p class="text-sm"><span class="text-red-800 font-extrabold">Comidas</span>&thinsp;(Horario de 1 a 4 pm) Para 20 personas o más; Incluye café de olla o americano (refill) y augua fresca. Selecciona hasta 2 opciones de platillos para tus invitados. No incluye cortesía de casa.</p>
    <p class="text-sm"><span class="text-red-800 font-extrabold">Cenas</span>&thinsp;(Para 50 personas o más) Incluye augua fresca. Selecciona hasta 1 opcion de platillo para tus invitados. No incluye cortesía de casa.</p>
    <div class="self-end my-8">
      <button class="text-xs font-semibold border-2 border-red-800 p-2 rounded-full cursor-pointer" on:click={()=>openModal()}>Términos y condiciones</button>
    </div>
  </div>
  {/each}
</div>
<Modal show={showModal} closeModal={closeModal}/>
<Modal2 show2={showModal2} closeModal2={closeModal2} platillo={platilloToShow} />
