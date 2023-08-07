<script>
  import Cards from "./Cards.svelte";
  import Cards2 from "./Cards2.svelte";
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

<div class="page-background"></div>
<header>
  <div class="w-4/5 m-auto p-5 flex relative">
    <img src="/img/logo.png" alt="La Limita" class="w-auto object-contain">
  </div>
  <div class="px-10 z-30 relative">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SecZnw0lLKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</header>
<div class="relative flex items-end">
  <img src="/img/sra.png" alt="" class="absolute top-0 -right-5 z-0 object-scale-down w-1/2">
  <h2 class="font-curse text-5xl mx-4 text-red-800 mt-20 self-end">Desayunos</h2>
</div>
<div>
  <Cards />
</div>
<div class="relative flex items-end">
  <img src="/img/venado.png" alt="" class="absolute top-14 -right-5 z-0 object-scale-down w-1/2">
  <h2 class="font-curse text-5xl mx-4 text-red-800 mt-20 self-end">Comidas y <br>Cenas</h2>
</div>
<div>
  <Cards2 />
</div>
<a href="https://la-limita.alacarta.com.mx"><h2 class="text-2xl font-bold font-mont border-red-800 border-2 rounded-xl bg-tan-limita  p-1 m-6 text-center shadow-[0px_10px_10px_5px_#1a202c]">Menú La Limita</h2></a>