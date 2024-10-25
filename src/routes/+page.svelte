<script>
    import Carrusel from "./Carrusel.svelte";
    import { base } from '$app/paths';
    import Modal from "./Modal.svelte";
    
    let isOverlayOpen = false;
    let selectedImage = null;
    let alternativeText = null;
    let show = false;

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

    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '441959758733405');
    fbq('track', 'PageView');
</script>

<noscript>
  <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=441959758733405&ev=PageView&noscript=1"/>
</noscript>

<style>
  /* .background-section {
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
} */

</style>

<svelte:head>
  <title>Menú La Limita</title>
</svelte:head>
<!-- <div class="{show? "fixed" : "hidden"} top-1/3 left-0 items-center justify-center z-40">
  <button class="fixed inset-0 bg-black opacity-90" on:click={() => show = false}></button>
  <div class="relative">
    <button class="absolute top-2 right-8 text-white" on:click={() => show = false}>
      <i class="fa-solid fa-times font-bold text-2xl"></i>
    </button>
      <img class="w-11/12 m-auto" src="{ base }/img/posada.jpg" alt="Festeja tu posada con nosotros"/>
  </div>
</div> -->

<section class="my-2">
  <div class="w-4/5 m-auto p-2 flex relative">
    <img src="{ base }/img/logo.png" alt="La Limita" class="w-auto object-contain z-10">
    <img src="{ base }/img/sra.png" alt="" class="absolute top-0 -right-5 z-0 object-scale-down w-1/2">
  </div>
  <div class="p-1">
    <Carrusel />
  </div>
</section>
<div class="flex justify-center flex-col items-center font-mont px-4 pt-1 mb-20">
  <p class="text-center font-dk text-red-800 text-4xl">¡Descubre nuestros paquetes de eventos!</p>
  <div class="p-1 m-2 w-4/5 text-center border-red-800 border-2 font-bold text-xl rounded-xl bg-tan-limita shadow-[2px_2px_4px_2px_#666666]">
    <a href="{ base }/empresas">Eventos Empresariales</a>
  </div>
  <div class="p-1 m-2 w-4/5 text-center border-red-800 border-2 font-bold text-xl rounded-xl bg-tan-limita shadow-[2px_2px_4px_2px_#666666]">
    <a href="{ base }/social">Eventos Sociales</a>
  </div>
  <div class="p-1 m-2 w-4/5 text-center border-red-800 border-2 font-bold text-xl rounded-xl bg-tan-limita shadow-[2px_2px_4px_2px_#666666]">
    <a href="{ base }/infantil">Menú Infantil</a>
  </div>
  <div class="p-1 m-2 w-4/5 text-center border-red-800 border-2 font-bold text-xl rounded-xl bg-tan-limita shadow-[2px_2px_4px_2px_#666666]">
    <a href="{ base }/menu">Menú La Limita</a>
  </div>
  <div class="p-1 m-2 w-4/5 text-center border-red-800 border-2 font-bold text-xl rounded-xl bg-tan-limita shadow-[2px_2px_4px_2px_#666666]">
    <a href="{ base }/nuevo">¡Lo Nuevo!</a>
  </div>
  <div class="p-1 m-2 w-4/5 text-center border-red-800 border-2 font-bold text-xl rounded-xl bg-tan-limita shadow-[2px_2px_4px_2px_#666666]">
    <a href="{ base }/factura">Facturación</a>
  </div>
  <div class="p-1 m-2 w-4/5 text-center border-red-800 border-2 font-bold text-xl rounded-xl bg-tan-limita shadow-[2px_2px_4px_2px_#666666]">
    <a href="https://lalimita.com/formulario">Bolsa de Trabajo</a>
  </div>
</div>
<footer class="fixed bottom-0 bg-amber-100 w-full p-4 z-30">
  <div class="flex justify-around items-center">
    <div class="flex flex-col">
      <a href="https://maps.app.goo.gl/N7ZLDXsUMdSQYW8s8" target="_blank" class="leading-3 grow text-lg font-semibold text-center"><i class="fa text-red-600 fa-location-dot"></i>&thinsp;Itaje</a><a href="https://wa.me/5216671058274" target="_blank" class="text-sm self-center"><i class="fa-brands text-green-600 text-lg fa-whatsapp"></i>&thinsp;667 105 82 74</a>
    </div>
    <hr>
    <div class="flex flex-col">
      <a href="https://maps.app.goo.gl/sZ9C4Yei9MofMoKJ8" target="_blank" class="leading-3 grow text-lg font-semibold text-center"><i class="fa text-red-600 fa-location-dot"></i>&thinsp;Rectoría</a><a href="https://wa.me/5216672023842" target="_blank" class="text-sm self-center"><i class="fa-brands text-green-600 text-lg fa-whatsapp"></i>&thinsp;667 202 38 42</a>
    </div>
  </div>
</footer>