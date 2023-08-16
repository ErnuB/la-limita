<script>

  import Modal from './Modal.svelte';
  import Modal2 from './Modal2.svelte';
  let platilloToShow = { platillo: '', image: '', descripcion: '' };


  let items = [
    {
      nombre: 'Paquete 1',
      pyd: [
        {platillo:'Huevos divorciados.', image:'', descripcion:''},
        {platillo:'Huevos con Jamón.', image:'', descripcion:''},
        {platillo:'Chilaquiles rojos.', image:'/img/platillos/chilaquiles-rojos.jpg', descripcion:'Chilaquiles rojos con huevo.'},
      ],
      precio: "$170",
    },
    {
      nombre: 'Paquete 2',
      pyd: [
        {platillo:'El Arroyo:', image:'/img/platillos/arroyo.jpg', descripcion:'Tamal frito, chilaquiles rojos, rajas con crema.'},
        {platillo:'El Sauce:', image:'/img/platillos/sauce.jpg', descripcion:'Tamal frito, machaca con verdura.'},
        {platillo:'Chilaquiles poblanos.', image:'', descripcion:'Chilaquiles poblanos con pollo.'},
      ],
      precio: "$199",
    },
    {
      nombre: 'Paquete 3',
      pyd: [
        {platillo:'Del Pueblo:', image:'/img/platillos/pueblo.jpg', descripcion:'Fajitas de pollo, chilaquiles rojos y huevo revuelto.'},
        {platillo:'Huevos con machaca.', image:'/img/platillos/machaca-huevo.jpg', descripcion:'Huevos revueltos con machaca acompañados de frijol.'},
        {platillo:'Enchiladas rojas.', image:'/img/platillos/enchiladas-rojas-pollo.jpg', descripcion:'Enchiladas rojas con pollo (orden de 3).'},
        {platillo:'La Limita:', image:'/img/platillos/limita.jpg', descripcion:'Machaca con verdura, colachi, chilorio, tamal frito y un huevo revuelto.'},
      ],
      precio: "$210",
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
  const container = document.querySelector('.tab-panels-container');
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
    scroll-snap-stop: always;
    flex: 1 0 auto;
  }
</style>

<div class="tab-panels-container font-prompt scroll-p-4 snap-mandatory" bind:clientWidth={containerWidth} on:scroll={({ target }) => scrolledLeft = target.scrollLeft}>
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
