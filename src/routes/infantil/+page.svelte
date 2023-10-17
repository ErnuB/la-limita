<script>
    import Modal from "./Modal.svelte";
    

    let isOverlayOpen = false;
    let selectedImage = null;
    let alternativeText = null;

    function openModal(imagen, altText) {
        selectedImage = imagen;
        alternativeText = altText;
        isOverlayOpen = true;
    };

    function closeModal() {
        selectedImage = null;
        alternativeText = null;
        isOverlayOpen = false;
    };

</script>

<style>
  .background-section {
  position: relative;
  overflow: hidden;
  background-image: url(/img/fondo.jpg);
}

</style>

<svelte:head>
  <title>Menú La Limita</title>
</svelte:head>

<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-16">
  <img src="/img/peques.jpg" alt="Menú peques">
  <img src="/img/hojas-izq.svg" alt="Hojas" class="absolute top-42 left-0"> 
  <img src="/img/hojas-der.svg" alt="Hojas" class="absolute bottom-0 right-0">
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/papalote.jpg','Sopita con fideos')}>
          Papalote&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$55</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Sopita de pollo con fideos, acompañada de galleta salada.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/trompo.jpg','Quequis y huevito con jamón')}>
          Trompo&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$93</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">1 huevo revuelto con jamón, 2 mini panquequis y tarrito de fruta.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/yoyo.jpg','Hamburguesa')}>
          Yoyo&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$104</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Hamburguesa con queso y papas fritas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/arcoiris.jpg','Quequis, huevito, salchipulpo y fruta')}>
          Arcoiris&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$112</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">3 ricos panquequis, un huevito revuelto, 2 pulpitos de salchicha y tarro de fruta.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/matatena.jpg','Papas fritas con salchipapas')}>
          Matatena&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$60</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Órden de papas fritas con 2 pulpitos de salchicha y tarrito de queso amarillo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/balero.jpg','Sandwich con huevito')}>
          Balero&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$104</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Rica combinacón de sandwich a la plancha con queso, un huevito revuelto, tarrito de fruta y papas fritas con catsup.</p>
    </li>
  </ul>
  <div class="my-14"></div>
</section>
<div id="bebidas" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-16">
  <img src="/img/bebidas.jpg" alt="Bebidas">
  <img src="/img/hojas-izq.svg" alt="Hojas" class="absolute top-0 left-0"> 
  <img src="/img/hojas-der.svg" alt="Hojas" class="absolute bottom-0 right-0">
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Jugo de naranja</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$44</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Chico.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex items-center gap-1">
        <h2>Vaso de leche fría</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$25</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">355 ml.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex items-center gap-1">
        <h2>Chocomilk</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$47</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex items-center gap-1">
        <h2>Licuado de fresa</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$47</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex items-center gap-1">
        <h2>Licuado de fresa</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$47</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex items-center gap-1">
        <h2>Frapuccino con chispitas</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$63</span>
      </div>
    </li>
  </ul>
  <div class="my-14"></div>
</section>
<div class="">
  <a href="/"><h2 class="text-2xl font-bold font-mont border-red-800 border-2 rounded-xl bg-tan-limita  p-1 m-6 text-center shadow-[0px_10px_10px_5px_#1a202c]">Menú Principal</h2></a>
</div>

{#if isOverlayOpen}
  <Modal imageUrl={selectedImage} altText={alternativeText} closeModal={closeModal} hasImage={selectedImage !== null} />
{/if}