<script>
  import Cards from "./Cards.svelte";
  import Cards2 from "./Cards2.svelte";
  import Carrusel from "./Carrusel.svelte";
</script>

<style>
  .page-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgb(246, 238, 204);
  }

  iframe {
    width: 100%;
    height: 250px;
  }

</style>

<div class="page-background"></div>
<section>
  <div class="w-4/5 m-auto p-5 flex relative">
    <img src="/img/logo.png" alt="La Limita" class="w-auto object-contain">
  </div>
</section>
<div class="p-2">
  <Carrusel />
</div>
<div class="relative flex items-end">
  <img src="/img/sra.png" alt="" class="absolute top-0 right-0 z-0 object-scale-down w-1/2">
  <h2 class="font-curse text-5xl mx-4 text-red-800 mt-20 self-end">Desayunos</h2>
</div>
<div>
  <Cards />
</div>
<div class="relative flex items-end">
  <img src="/img/venado.png" alt="" class="absolute top-14 right-0 z-0 object-scale-down w-1/2">
  <h2 class="font-curse text-5xl mx-4 text-red-800 mt-20 self-end">Comidas y <br>Cenas</h2>
</div>
<div>
  <Cards2 />
</div>
<div class="px-2 z-10 relative mt-10 mb-5">
  <iframe src="https://www.youtube.com/embed/B5vkD-3C72Y?si=NQUqC-P_S14lTU9q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<div class="ml-1 flex max-w-11/12">
  <img src="/img/top-fondo.png" alt="Greca" class="w-1/5 object-contain">
  <h2 class="font-curse text-5xl mx-4 text-orange-limita mt-10 self-end">Entradas</h2>
  <img src="/img/top-right-fondo.png" alt="Greca" class="w-1/5 object-contain">
</div>
<div class="w-11/12 bg-white/50 m-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
  <p class="text-orange-limita p-4 font-extrabold">Agrega opciones para compartir con tus invitados:</p>
  <ul class="px-4 pb-8 list-disc font-normal marker:text-red-800">
    <li class="flex gap-2"><span>Pan Horneado</span><span class="self-end p-1 grow border-t-2 border-black border-dotted"></span><span>$19</span></li>
    <li class="flex gap-2"><span>Jocoque con totopos</span><span class="self-end p-1 grow border-t-2 border-black border-dotted"></span><span>$72</span></li>
    <li class="flex gap-2"><span>Guacamole con totopos</span><span class="self-end p-1 grow border-t-2 border-black border-dotted"></span><span>$109</span></li>
    <li class="flex gap-2"><span>Jícama, zanahoria y  pepino</span><span class="self-end p-1 grow border-t-2 border-black border-dotted"></span><span>$68</span></li>
    <li class="flex gap-2"><span>Coricos 1kg.</span><span class="self-end p-1 grow border-t-2 border-black border-dotted"></span><span>$164</span></li>
    <li class="flex gap-2"><span>Queso fundido</span><span class="self-end p-1 grow border-t-2 border-black border-dotted"></span><span>$117</span></li>
    <li class="flex gap-2"><span>Queso fundido con chorizo</span><span class="self-end p-1 grow border-t-2 border-black border-dotted"></span><span>$133</span></li>
  </ul>
</div>
<div class="ml-1 flex justify-between max-w-11/12">
  <img src="/img/bot-left-fondo.png" alt="Greca" class="w-1/5 object-contain">
  <img src="/img/bot-fondo.png" alt="Greca" class="w-1/5 object-contain">
</div>
<div class="mb-32">
  <a href="/menu"><h2 class="text-2xl font-bold font-mont border-red-800 border-2 rounded-xl bg-tan-limita p-1 m-6 text-center shadow-[0px_10px_10px_5px_#1a202c]">Menú La Limita</h2></a>
</div>
<footer class="fixed bottom-0 bg-amber-100 w-full p-2 z-30">
  <h2 class="text-2xl font-semibold text-center">Reservaciones:</h2>
  <div class="flex justify-around items-center">
    <div class="flex flex-col">
      <a href="https://goo.gl/maps/8GktgZhxGzMXABzV8" target="_blank" class="grow text-lg font-semibold text-center"><i class="fa text-red-600 fa-location-dot"></i>&thinsp;Itaje</a><a href="https://wa.me/5216671058274" target="_blank" class="text-xl"><i class="fa-brands text-green-600 text-xl fa-whatsapp"></i>&thinsp;667 105 82 74</a>
    </div>
        <hr>
    <div class="flex flex-col">
      <a href="https://goo.gl/maps/8spSZ96hJYvy4bKBA" target="_blank" class="grow text-lg font-semibold text-center"><i class="fa text-red-600 fa-location-dot"></i>&thinsp;Rectoría</a><a href="https://wa.me/5216672023842" target="_blank" class="text-xl"><i class="fa-brands text-green-600 text-xl fa-whatsapp"></i>&thinsp;667 202 38 42</a>
    </div>
  </div>
</footer>