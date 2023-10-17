<script>
    import Carrusel from "./Carrusel.svelte";
    

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
}

.top-background {
  position: absolute;
  left: .5rem;
  top: .5rem;
  width: 50%;
  height: 25%;
  background-size: 50%;
  background-repeat: no-repeat;
  background-image: url('/img/top-fondo.png');
  z-index: 0;
}

.top-right-background {
  position: absolute;
  top: .5rem;
  right: -5rem;
  width: 50%;
  height: 50%;
  background-size: 50%;
  background-repeat: no-repeat;
  background-image: url('/img/top-right-fondo.png');
  z-index: 0;
}

.bottom-background {
  position: absolute;
  right: -2rem;
  width: 50%;
  height: 50%;
  background-size: 50%;
  background-position: bottom;
  background-repeat: no-repeat;
  bottom: .5rem;
  background-image: url('/img/bot-fondo.png');
  z-index: 0;
}

.bottom-left-background {
  position: absolute;
  left: -2rem;
  width: 50%;
  height: 50%;
  background-size: 50%;
  background-position: bottom;
  background-repeat: no-repeat;
  bottom: .5rem;
  background-image: url('/img/bot-left-fondo.png');
  z-index: 0;
}

</style>

<svelte:head>
  <title>Menú La Limita</title>
</svelte:head>

<section class="my-2">
  <div class="w-4/5 m-auto p-2 flex relative">
    <img src="/img/logo.png" alt="La Limita" class="w-auto object-contain z-10">
    <img src="/img/sra.png" alt="" class="absolute top-0 -right-5 z-0 object-scale-down w-1/2">
  </div>
  <div class="p-1">
    <Carrusel />
  </div>
</section>
<div class="flex justify-center flex-col items-center font-mont px-4 pt-1 mb-20">
  <p class="text-center font-dk text-red-800 text-4xl">¡Descubre nuestros paquetes de eventos!</p>
  <div class="p-1 m-2 w-4/5 text-center border-red-800 border-2 font-bold text-xl rounded-xl bg-tan-limita shadow-[2px_2px_4px_2px_#666666]">
    <a href="/empresas">Eventos Empresariales</a>
  </div>
  <div class="p-1 m-2 w-4/5 text-center border-red-800 border-2 font-bold text-xl rounded-xl bg-tan-limita shadow-[2px_2px_4px_2px_#666666]">
    <a href="/social">Eventos Sociales</a>
  </div>
  <div class="p-1 m-2 w-4/5 text-center border-red-800 border-2 font-bold text-xl rounded-xl bg-tan-limita shadow-[2px_2px_4px_2px_#666666]">
    <a href="/infantil">Menú Infantil</a>
  </div>
  <div class="p-1 m-2 w-4/5 text-center border-red-800 border-2 font-bold text-xl rounded-xl bg-tan-limita shadow-[2px_2px_4px_2px_#666666]">
    <a href="/menu">Menú La Limita</a>
  </div>
  <div class="p-1 m-2 w-4/5 text-center border-red-800 border-2 font-bold text-xl rounded-xl bg-tan-limita shadow-[2px_2px_4px_2px_#666666]">
    <a href="/factura">Facturación</a>
  </div>
</div>
<footer class="fixed bottom-0 bg-amber-100 w-full p-4 z-30">
  <div class="flex justify-around items-center">
    <div class="flex flex-col">
      <a href="https://goo.gl/maps/8spSZ96hJYvy4bKBA" target="_blank" class="leading-3 grow text-lg font-semibold text-center"><i class="fa text-red-600 fa-location-dot"></i>&thinsp;Itaje</a><a href="https://wa.me/5216671058274" target="_blank" class="text-sm self-center"><i class="fa-brands text-green-600 text-lg fa-whatsapp"></i>&thinsp;667 105 82 74</a>
    </div>
    <hr>
    <div class="flex flex-col">
      <a href="https://goo.gl/maps/8spSZ96hJYvy4bKBA" target="_blank" class="leading-3 grow text-lg font-semibold text-center"><i class="fa text-red-600 fa-location-dot"></i>&thinsp;Rectoría</a><a href="https://wa.me/5216672023842" target="_blank" class="text-sm self-center"><i class="fa-brands text-green-600 text-lg fa-whatsapp"></i>&thinsp;667 202 38 42</a>
    </div>
  </div>
</footer>