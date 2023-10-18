<script>
  import { base } from '$app/paths';
	import Carrusel from "../Carrusel.svelte";
</script>

<section class="my-6">
    <div class="w-4/5 m-auto p-2 flex relative">
        <img src="{ base }/img/logo.png" alt="La Limita" class="w-auto object-contain z-10">
        <img src="{ base }/img/sra.png" alt="" class="absolute top-0 -right-5 z-0 object-scale-down w-1/2">
    </div>
</section>
<div class="p-1">
    <Carrusel />
</div>
<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-4 relative z-20">
    <div class="p-4">
      <h2 class="text-center text-3xl">Facturación:</h2>
      <div class="flex justify-around items-center">
        <div class="flex flex-col">
          <a href="https://goo.gl/maps/8GktgZhxGzMXABzV8" target="_blank" class="grow text-lg font-semibold text-center">Itaje</a><a href="https://wa.me/5216671058274" target="_blank" class="text-lg"><i class="fa-brands text-green-600 text-xl fa-whatsapp"></i>&thinsp;667 105 8274</a>
        </div>
            <hr>
        <div class="flex flex-col">
          <a href="https://goo.gl/maps/8spSZ96hJYvy4bKBA" target="_blank" class="grow text-lg font-semibold text-center">Rectoría</a><a href="https://wa.me/5216672023842" target="_blank" class="text-lg"><i class="fa-brands text-green-600 text-xl fa-whatsapp"></i>&thinsp;667 202 3842</a>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-4">
    <div class="text-sm py-4">
      <h2 class="text-center text-3xl">¡Síguenos!</h2>
      <div class="flex justify-around text-4xl p-4">
        <a href="https://www.facebook.com/RestauranteLaLimita/"><i class="fa-brands text-blue-800 fa-facebook-f p-2"></i></a>
        <a href="https://www.tiktok.com/@lalimitacln"><i class="fa-brands fa-tiktok p-2"></i></a>
        <a href="https://www.instagram.com/restaurantelalimita/"><i class="fa-brands text-violet-700 fa-instagram p-2"></i></a>
      </div>
    </div>
  </section>
  <div class="">
    <a href="/"><h2 class="text-2xl font-bold font-mont border-red-800 border-2 rounded-xl bg-tan-limita  p-1 m-6 text-center shadow-[0px_10px_10px_5px_#1a202c]">Menú Principal</h2></a>
  </div>