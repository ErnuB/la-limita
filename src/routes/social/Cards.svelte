<script>

  import Modal from './Modal.svelte';

  import Modal2 from './Modal2.svelte';
  let platilloToShow = { platillo: '', image: '', descripcion: '' };


  let items = [
    {
      nombre: 'Paquete 1',
      pyd: [
        {platillo:'Huevos divorciados o rancheros.', image:'/img/platillos/divorciados.jpg', descripcion:''},
        {platillo:'Huevos revueltos con Jamón ó chorizo ó tocino.', image:'/img/platillos/huevos-jamon.jpg', descripcion:''},
        {platillo:'Chilaquiles rojos y huevo revuelto.', image:'/img/platillos/chilaquiles-huevo-revuelto.jpg', descripcion:'Chilaquiles rojos con huevo.'},
        {platillo:'Huevos revueltos con nopales ó ejotes.', image:'/img/platillos/huevos-nopales.jpg', descripcion:'Huveos con nopal.'},
      ],
      precio: "$179",
    },
    {
      nombre: 'Paquete 2',
      pyd: [
        {platillo:'El Metate.', image:'/img/platillos/metate.jpg', descripcion:'Machaca con verdura, tamal de elote acompañado de un huevo o chilaquiles.'},
        {platillo:'El Arroyo.', image:'/img/platillos/arroyo.jpg', descripcion:'Tamal frito, chilaquiles rojos, rajas con crema.'},
        {platillo:'Chilaquiles rojos, verdes ó poblanos con pollo.', image:'/img/platillos/chilaquiles-poblanos.jpg', descripcion:'Chilaquiles poblanos con pollo.'},
        {platillo:'El Bule.', image:'/img/platillos/bule.jpg', descripcion:'Hot cakes (dos piezas), acompañados de 2 huevos con jamón o tocino.'},
        {platillo:'La Pingüica.', image:'/img/platillos/pinguica.jpg', descripcion:'Chicharrón a la mexicana o en salsa a elegir, chilaquiles acompañado de un huevo.'},
        {platillo:'Omelet Popeye.', image:'/img/platillos/popeye.jpg', descripcion:'Revuelto de espinacas, relleno de champiñón, jamón y mezcla de quesos, acompañado con ensalada. No incluye frijol.'},
        {platillo:'La Máscara.', image:'/img/platillos/mascara.jpg', descripcion:'Ejotes con verdura, nopales con verdura,colachi, aguacate, incluye queso fresco (25g).'},
      ],
      precio: "$209",
    },
    {
      nombre: 'Paquete 3',
      pyd: [
        {platillo:'Del Pueblo.', image:'/img/platillos/pueblo.jpg', descripcion:'Fajitas de pollo a la plancha, chilaquiles rojos y huevo revuelto.'},
        {platillo:'Huevos revueltos con machaca.', image:'/img/platillos/machaca-huevo.jpg', descripcion:'Huevos revueltos con machaca acompañados de frijol.'},
        {platillo:'La Limita.', image:'/img/platillos/limita.jpg', descripcion:'Machaca con verdura, colachi, chilorio, tamal frito y un huevo revuelto.'},
        {platillo:'Desayuno Vaquero.', image:'/img/platillos/vaquero.jpg', descripcion:'Puntas de top sirloin, un huevo y chilaquiles.'},
      ],
      precio: "$220",
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
    <p class="text-sm">Para 20 personas o más; Incluye café de olla o americano (refill) y jugo de naranja (sin refill). Selecciona hasta 3 opciones de platillos para tus invitados e incluirá una cortesía de casa(pellizcada con asientos y queso chihuahua).</p>
    <div class="self-end my-8">
      <button class="text-xs font-semibold border-2 border-red-800 p-2 rounded-full cursor-pointer" on:click={()=>openModal()}>Términos y condiciones</button>
    </div>
  </div>
  {/each}
</div>
<Modal show={showModal} closeModal={closeModal}/>
<Modal2 show2={showModal2} closeModal2={closeModal2} platillo={platilloToShow} />
