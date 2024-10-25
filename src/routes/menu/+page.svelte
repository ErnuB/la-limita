<script>
  import { base } from '$app/paths';
  import Navbar from "./Navbar.svelte";
  import Modal from "./Modal.svelte";
    
    let isOverlayOpen = false;
    let selectedImage = null;
    let alternativeText = null;
    let show = true;

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
/* 
.top-right-background {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url('/img/hojas-der.svg');
  z-index: 0;
}

.bottom-left-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url('/img/hojas-izq.svg');
  z-index: 0;
}
 */

</style>

<svelte:head>
  <title>Menú La Limita</title>
</svelte:head>

<Navbar />
<div class="{show? "fixed" : "hidden"} top-1/3 left-0 items-center justify-center z-40">
  <button class="fixed inset-0 bg-black opacity-90" on:click={() => show = false}></button>
  <div class="relative">
    <button class="absolute top-2 right-8 text-white" on:click={() => show = false}>
      <i class="fa-solid fa-times font-bold text-2xl"></i>
    </button>
      <img class="w-11/12 m-auto" src="{ base }/img/promo-frente.jpg" alt="promo"/>
  </div>
</div>
<div id="empezar" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-8 relative">
  <img src="{ base }/img/empezar.jpg" alt="Para Empezar">
  <img src="{ base }/img/hojas-izq.svg" alt="Hojas" class="absolute top-42 left-0"> 
  <img src="{ base }/img/hojas-der.svg" alt="Hojas" class="absolute bottom-0 right-0">
  <ul class="flex flex-col font-body font-medium py-4">
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <button on:click={() => openModal('/img/platillos/yogurt.jpg','Yogurt con fruta')}>
            Yogurt natural con frutas&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$98</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Manzana, papaya, melón y pera.</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <button on:click={() => openModal('/img/platillos/fruta.jpg','Fruta')}>
            Plato con frutas&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$98</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Manzana, papaya, melón y pera.</p>
      </li>
      <li class="flex font-bold gap-3 mx-3 relative my-2">
        <button on:click={() => openModal('/img/platillos/avena.jpg','Avena con plátano')}>
          Avena con plátano 🕦&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
          <div class="relative grow border-b-2 border-dotted border-black -top-2"></div>
          <span class="text-sm font-medium">$95</span>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center">
          <button on:click={() => openModal('/img/platillos/hot-cakes.jpg','Hot Cakes')}>
            Hot Cakes&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">Una pieza</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$34</span>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">Órden de 3 piezas</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$98</span>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">3 piezas con tocino y jamón</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$119</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex gap-1 items-center">
          <button on:click={() => openModal('/img/platillos/queso-fundido.jpg','Queso Fundido con Chorizo')}>
            Queso fundido (250g)&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$123</span>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">con Chorizo/chilorio</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$140</span>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">con Machaca/chicharrones</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$151</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex gap-1 items-center">
          <button on:click={() => openModal('/img/platillos/guacamole.jpg','Guacamole')}>
            Guacamole&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$114</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex gap-1 items-center">
          <button on:click={() => openModal('/img/platillos/chorreada-machaca.jpg','Chorreada con Chicharrón')}>
            Chorreada&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$92</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Sabroza pellizcada grande con asientos y queso gratinado con machaca o chicharrones o arrachera.</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center">
          <button on:click={() => openModal('/img/platillos/chorreada-chorizo.jpg','Chorreada con Chorizo')}>
            Chorreada&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$82</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Sabroza pellizcada grande con asientos y queso gratinado con chorizo o chilorio.</p>
      </li>
  </ul>
  <div class="my-14"></div>
</section>
<div id="bebidas" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-16">
  <img src="{ base }/img/bebidas.jpg" alt="Bebidas">
  <img src="{ base }/img/hojas-izq.svg" alt="Hojas" class="absolute top-42 left-0"> 
  <img src="{ base }/img/hojas-der.svg" alt="Hojas" class="absolute bottom-0 right-0">
  <ul class="flex flex-col font-body font-medium py-4">
    <h2 class="mx-2 font-dk text-3xl text-red-800 z-10">Frescas o malteadas</h2>
    <h2 class="mx-2 mt-3 font-dk text-2xl text-orange-500 z-10">Jugos 100% naturales</h2>
    <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center">
          <h2>Naranja, zanahoria</h2>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">Chico</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$46</span>
          <p class="max-w-[16rem] text-xs mx-1">Grande</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$59</span>
          <p class="max-w-[16rem] text-xs mx-1">1 litro</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$118</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center">
          <button on:click={() => openModal('/img/platillos/jugo-verde.jpg','Jugo Verde')}>
            Jugo verde (nopal, naranja y apio)&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">Chico</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$49</span>
          <p class="max-w-[16rem] text-xs mx-1">Grande</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$62</span>
          <p class="max-w-[16rem] text-xs mx-1">1 litro</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$122</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Jarra de jugo de naranja</h2>
          <p class="max-w-[16rem] text-xs font-semibold mx-1">1.5 litros.</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$175</span>
        </div>
      </li>
      <h2 class="mx-2 mt-3 font-dk text-2xl text-orange-500 z-10">Licuados</h2>
      <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center">
            <h2>Chocomilk, fresa, plátano, papaya o melón</h2>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">Chico</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$49</span>
            <p class="max-w-[16rem] text-xs mx-1">Grande</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$62</span>
            <p class="max-w-[16rem] text-xs mx-1">1 litro</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$122</span>
          </div>
        </li>
        <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center gap-1">
            <h2>Vaso de leche fría</h2>
            <p class="max-w-[16rem] text-xs font-semibold mx-1">355 ml.</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$26</span>
          </div>
        </li>
      <h2 class="mx-2 mt-3 font-dk text-2xl text-orange-500 z-10">Refrescos y aguas de sabor</h2>
      <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center">
            <h2>Agua fresca: Jamaica, Tamarindo, naranjada, limonada</h2>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">473 ml.</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$39</span>
            <p class="max-w-[16rem] text-xs mx-1">1 litro</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$79</span>
            <p class="max-w-[16rem] text-xs mx-1">Jarra 1.5 litros</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$112</span>
          </div>
        </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center">
            <h2>Agua fresa-limón</h2>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">473 ml.</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$44</span>
            <p class="max-w-[16rem] text-xs mx-1">1 litro</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$86</span>
          </div>
        </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center">
            <h2>Agua jamaica-limón</h2>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">473 ml.</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$44</span>
            <p class="max-w-[16rem] text-xs mx-1">1 litro</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$86</span>
          </div>
        </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center">
            <h2>Limonada o naranjada en agua mineral</h2>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">500 ml.</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$58</span>
            <p class="max-w-[16rem] text-xs mx-1">1 litro</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$117</span>
          </div>
        </li>
        <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center gap-1">
            <h2>Jaztea</h2>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$40</span>
          </div>
        </li>
        <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center gap-1">
            <h2>Refrescos</h2>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$40</span>
          </div>
        </li>
        <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center gap-1">
            <h2>Agua embotellada</h2>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span class="text-sm font-medium">$25</span>
          </div>
        </li>
      <h2 class="mx-2 mt-3 font-dk text-2xl text-orange-500 z-10">Malteadas y frapés <span class="font-base text-xs">(500 ml.)</span></h2>    
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Frapuchino</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$69</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Con crema batida y chispitas</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <button on:click={() => openModal('/img/platillos/frapuchino-oreo.jpg','Frapuchino de Óreo')}>
            Frappé de óreo&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$64</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <button on:click={() => openModal('/img/platillos/frapuchino-moka.jpg','Frapuchino Moka')}>
            Frappé de moka&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$64</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Malteada de fresa</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$64</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <button on:click={() => openModal('/img/platillos/baby-mango.jpg','Baby Mango')}>
            Baby mango&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$64</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Frapé de mango con chamoy y miguelito</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Piña colada</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$64</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <button on:click={() => openModal('/img/platillos/pantera-rosa.jpg','Pantera Rosa')}>
            Pantera rosa&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$64</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Frapé de fresada con un toque de jugo de piña</p>
      </li>
      <h2 class="mx-2 font-dk text-3xl text-red-800 z-10">Calientes</h2>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <button class="text-left" on:click={() => openModal('/img/platillos/cafe-olla.jpg','Café')}>
            Café de olla, <br> americano o mixto&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$43</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Refill</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Agua para café</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$43</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Refill</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Té de querer (canela)</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$38</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">300 ml. no refill</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Té de adorar (manzanilla)</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$38</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">300 ml. no refill</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Leche para café</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span class="text-sm font-medium">$44</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">300 ml. no refill</p>
      </li>
  </ul>
  <div class="my-14"></div>
</section>
<div id="huevos" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-16">
  <img src="{ base }/img/comal.jpg" alt="Del comal a su mesa">
  <img src="{ base }/img/hojas-izq.svg" alt="Hojas" class="absolute top-42 left-0"> 
  <img src="{ base }/img/hojas-der.svg" alt="Hojas" class="absolute bottom-0 right-0">
  <div class="flex flex-col relative justify-center items-center pt-2 z-0">
      <h3 class="mx-6 text-center text-sm">(Deliciosos huevos, incluyen frijolitos con queso espolvoreado y totopos.)</h3>
  </div>
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Estrellados</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$108</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/huevos-rancheros.jpg','Huevos Rancheros')}>
          Rancheros&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$116</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">2 huevos rancheros o a la mexicana o sopitas con huevo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/tocino-huevo.jpg','Huevo revuelto con tocino')}>
          Con jamón o tocino&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$120</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/divorciados.jpg','Huevos Divorciados')}>
          Divorciados&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$108</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con salsa roja y verde.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/estrellados-tocino.jpg','Huevos estrellados con tocino')}>
          Estrellados con tocino&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$118</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Acompañados con 2 tiras de tocino fritas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex items-center gap-1">
        <button on:click={() => openModal('/img/platillos/machaca-huevo.jpg','Huevos revueltos con Machaca')}>
          Revueltos con machaca&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$154</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/chorizo-huevo.jpg','Huevo revuelto con chorizo')}>
          Revueltos con chorizo&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$133</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/chilorio-huevo.jpg','Huevo revuelto con chilorio')}>
          Revueltos con chilorio&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$133</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-3">
        <button on:click={() => openModal('/img/platillos/huevos-nopales.jpg','Huevos revueltos con nopales')}>
          Revueltos con nopales&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$113</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/huevos-ejotes.jpg','Huevos revueltos con ejotes')}>
          Revueltos con ejotes&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$113</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura.</p>
    </li>
  </ul>
  <div class="my-14"></div>
</section>
<div id="omeletes" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-16">
  <img src="{ base }/img/omelette.jpg" alt="Omeletes">
  <img src="{ base }/img/hojas-izq.svg" alt="Hojas" class="absolute top-42 left-0"> 
  <img src="{ base }/img/hojas-der.svg" alt="Hojas" class="absolute bottom-0 right-0">
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/tradicional.jpg','Omelet Tradiconal')}>
          Tradicional&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$138</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con champiñones, jamón y mezcla de quesos acompañado con frijolitos con queso espolvoreado y totopos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/coronel.jpg','Omelet Coronel')}>
          Coronel🌶️&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$160</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">De machaca mochomo revuelta con papa y mezcla de quesos, bañado con salsa guajillo acompañado con frijolitos con queso espolvoreado y totopos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/omelet-rio.jpg','Omelet del río')}>
          del Río&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$175</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Relleno de top Sirloin (100g), cocinado con pimientos, cebolla blanca y mezcla de quesos acompañado con ensalada y papas sazonadas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/popeye.jpg','Omelet Popeye')}>
          Popeye&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$155</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Revuelto de acelgas relleno de champiñon, jamón y mezcla de quesos acompañado con ensalada.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/cuatro-claras.jpg','Omelet cuatro claras')}>
          Cuatro claras&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$137</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Por dentro mezcla de quesos, chiles en raja con elotitos y cebolla blanca, acompañado de colachito y frijolitos con queso espolvoreado y totopos.</p>
    </li>
  </ul>
  <div class="my-14"></div>
</section>
<div id="desvelados" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-16">
  <img src="{ base }/img/desvelados.jpg" alt="Para los desvelados">
  <img src="{ base }/img/hojas-izq.svg" alt="Hojas" class="absolute top-42 left-0"> 
  <img src="{ base }/img/hojas-der.svg" alt="Hojas" class="absolute bottom-0 right-0">
  <h2 class="text-center mt-3 font-dk text-2xl text-orange-500 z-10">Sólo sábados y domingos</h2>    
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/menudo.jpg','Menudo')}>
          Menudo&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$131</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">750ml.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/birria.jpg','Birria')}>
          Birria&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$159</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con el sazón de Doña Rafaela (750ml).</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/taco-birria.jpg','Taco de birria')}>
          Taco de Birria&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$45</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con sabroso consomé.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/chorreada-birria.jpg','Choreada de birria')}>
          Chorreada&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$87</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Sabrosa pellizcada con asientos, carne de birria y queso gratinado con sabroso consomé.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/quesabirria.jpg','Quesabirria')}>
          Quesabirria&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$76</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Quesadilla de tortilla de maíz o harina con carne de birria con sabroso consomé.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Consomé extra</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$27</span>
      </div>
    </li>
  </ul>
  <div class="my-14"></div>
</section>
<div id="combinaciones" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-16">
  <img src="{ base }/img/combinaciones.jpg" alt="Combinaciones">
  <img src="{ base }/img/hojas-izq.svg" alt="Hojas" class="absolute top-42 left-0"> 
  <img src="{ base }/img/hojas-der.svg" alt="Hojas" class="absolute bottom-0 right-0">
  <div class="flex flex-col relative justify-center items-center pt-2 z-0">
      <h3 class="mx-6 text-center text-sm">(Incluye frijolitos con queso espolvoreado y totopos.)</h3>
      <h3 class="mx-6 text-center text-sm">⭐= Favoritos</h3>
  </div>  
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/limita.jpg','La Limita')}>
          La Limita⭐&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$167</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Machaca con verdura, colachi, chilorio, tamal de elote acompañado de un huevo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/metate.jpg','El Metate')}>
          El Metate⭐&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$164</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Machaca con verdura, tamal de elote acompañado de un huevo o chilaquiles.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/avelino.jpg','Don Avelino')}>
          Don Avelino&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$124</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">2 huevos acompañados de chilaquiles.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/rancherito.jpg','Desayuno Vaquero')}>
          Desayuno Vaquero&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$183</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Puntas de top sirloin, un huevo y chilaquiles.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/pola.jpg','Tía Pola')}>
          Tía Pola&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$135</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">2 tamales de elote gratinados acompañados de rajas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/sinaloense.jpg','El Sinaloense')}>
          El Sinaloense⭐&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$125</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Taquito de machaca en tortilla de maíz acompañado de queso gratinado coronado con chorizo, un huevo y aguacate.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/de-la-abuela.jpg','De la Abuela')}>
          De la Abuela&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$137</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Papas con verdura, bañadas con queso chihuahua y queso fresco, acompañado de dos huevos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/don-nacho.jpg','Don Nacho')}>
          Don Nacho&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$141</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Dos ricos tamales de elote, bañados con frijoles puercos, cochinita pibil, queso amarillo y chiles jalapeños, acompañados de totopos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/bule.jpg','El Bule')}>
          El Bule&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$144</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Hot cakes (dos piezas), acompañados de dos huevos con jamón o tocino.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/sauce.jpg','Combinación El Sauce')}>
          El Sauce⭐&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$163</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Deliciosa machaca acompañada de un tamal de elote.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/arroyo.jpg','Combinación El Arroyo')}>
          El Arroyo&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$141</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Tamal de elote acompañado de rajas con crema y chilaquiles.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/pinguica.jpg','Pingüica')}>
          La Pingüica&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$152</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Chicharrón a la mexicana o en salsa a elegir, chilaquiles acompañado de un huevo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/molletes.jpg','Molletes')}>
          Molletes&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$135</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">2 mitades de pan bañadas con frijoles puercos y queso chihuahua, acompañados de tocino, chilaquiles y un huevo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>La Jícara</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$153</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Dos huevos acompañados con queso fresco, aguacate y dos salchichas fritas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/mochomita.jpg','La Mochomita')}>
          La Mochomita&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$175</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Machaca mochomo (con chile verde y cebollita) y dos huevos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/piedronas.jpg','Las Piedronas')}>
          Las Piedronas&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$152</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Chilorio con o sin verdura, un huevo y una quesadilla de maíz.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/vaquero.jpg','El Rancherito')}>
          El Rancherito&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$160</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Jugoso hígado ranchero, chilaquiles y un huevo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/pueblo.jpg','Del Pueblo')}>
          Del Pueblo&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$172</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Fajitas de pollo a la plancha, chilaquiles y un huevo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/tamazula.jpg','Tamazula')}>
          Tamazula&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$170</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Jugoso pollo a la plancha, montado en rajas con crema y elotitios, arroz rojo acompañado de ensalada fresca (no incluye frijol).</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/tabachin.jpg','Tabachín')}>
          Tabachín&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$175</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Bistec ranchero con quesadilla de maíz acompañado de un huevo o papas fritas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/don-rufino.jpg','Don Rufino')}>
          Don Rufino&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$142</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">2 Huevos acompañados de chilaquiles con pollo y salsa guajillo.</p>
    </li>
  </ul>
  <div class="my-14"></div>
</section>
<div id="caldos" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-16">
  <img src="{ base }/img/calditos.jpg" alt="Caldos">
  <img src="{ base }/img/hojas-izq.svg" alt="Hojas" class="absolute top-42 left-0"> 
  <img src="{ base }/img/hojas-der.svg" alt="Hojas" class="absolute bottom-0 right-0">
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/cocido.jpg','Caldo de Cocido')}>
          Caldo de cocido&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$137</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">750 ml.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/tlalpeno.jpg','Caldo Tlalpeño')}>
          Caldo tlalpeño&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$125</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">750 ml.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/sopa-tortilla.jpg','Sopa de Tortilla')}>
          Sopa de Tortilla&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$125</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">750 ml.</p>
    </li>
  </ul>
  <div class="my-14"></div>
</section>
<div id="sandwich" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-16">
  <img src="{ base }/img/sandwich.jpg" alt="Sandwich, tortas y hamburguesas">
  <img src="{ base }/img/hojas-izq.svg" alt="Hojas" class="absolute top-42 left-0"> 
  <img src="{ base }/img/hojas-der.svg" alt="Hojas" class="absolute bottom-0 right-0">
  <div class="flex flex-col relative justify-center items-center pt-12 z-0">
      <h2 class="font-body text-3xl text-red-800 font-dk text-center z-10">Sándwich <br> tortas y hamburguesas</h2>
  </div>  
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Torta de cochinita</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$102</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/torta-ahogada.jpg','Torta de cochinita ahogada')}>
          Torta de cochinita&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$118</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Ahogada.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/torta-mexicana.jpg','Torta Mexicana')}>
          Torta Mexicana&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$168</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Rellena con top sirloin, aguacate, cebollita asada, queso gratinado, consomé y papas fritas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/limiburger.jpg','Limiburguer')}>
          Limiburguer&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$161</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Sabrosa hamburguesa de res (130g) al carbón con queso chihuahua, cebollita asada, tocino, champiñones salteados acompañados con BBQ aguacate y papas fritas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/hamburguesa.jpg','Hamburguesa Tradicional')}>
          Hamburguesa&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$133</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Sabrosa hamburguesa de res (130g), jamón, lechuga, tomate, aguacate, chiles jalapeños y papas fritas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/colibri.jpg','El Colibrí')}>
          El Colibrí&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$109</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Sandwich especial de jamón de pavo con queso americano, trocitos de tocino, lechuga, tomate, aguacate y chiles jalapeños. Acompañado de papas fritas.</p>
    </li>
  </ul>
  <div class="my-14"></div>
</section>
<div id="carne" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-16">
  <img src="{ base }/img/arroz.jpg" alt="Carnes">
  <img src="{ base }/img/hojas-izq.svg" alt="Hojas" class="absolute top-42 left-0"> 
  <img src="{ base }/img/hojas-der.svg" alt="Hojas" class="absolute bottom-0 right-0">
  <div class="flex flex-col relative justify-center items-center pt-2 z-0">
      <h3 class="mx-6 text-center text-sm">🕜= Pregunta por los tiempo de elaboración</h3>
  </div>  
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/encabritado.jpg','Encabritado')}>
          Encabritado🕜&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$209</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Filete de carne asada (200g) con 2 quesadillas de maíz, cebollita cambray, chile toreado, frijolitos de la olla y aguacate.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/noria.jpg','La Noria')}>
          La Noria🕜&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$188</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Carne asada (200g) frijolitos de la olla, cebollitas cambray y salsa bandera.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/sinaloa-encanta.jpg','Sinaloa Encanta')}>
          Sinaloa Encanta&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$217</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Machaca, chorizo, chicharrón con salsa a elegir, chilorio, quesadilla de harina y chilaquiles.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/amapa.jpg','La Amapa')}>
          La Amapa&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$163</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Órden de 3 tacos de tortilla de maíz mediana con arrachera (150g) en tiritas con queso fundido, acompañados de aguacate y frijoles de la olla.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/higado.jpg','Hígado')}>
          Hígado&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$138</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Ranchero o encebollado acompañado con frijolitos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/chilorio-verdura.jpg','Chilorio')}>
          Chilorio&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$133</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/machaca-verdura.jpg','Machaca de Res')}>
          Machaca de res&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$154</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/danzante.jpg','El Danzante')}>
          El Danzante&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$163</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Pellizcada grande con asientos, ecima 100g de arrachera, sabroso queso fundido coronado con chorizo acompañado con aguacate y frijolitos.</p>
    </li>
  </ul>
  <div class="my-14"></div>
</section>
<div id="sinaloenses" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-16">
  <img src="{ base }/img/antojitos.jpg" alt="Antojitos sinaloenses">
  <img src="{ base }/img/hojas-izq.svg" alt="Hojas" class="absolute top-42 left-0"> 
  <img src="{ base }/img/hojas-der.svg" alt="Hojas" class="absolute bottom-0 right-0">
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/enchiladas-verdes.jpg','Enchiladas Verdes con Queso')}>
          Enchiladas con Queso&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$131</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Rojas o verdes, encima queso fresco y crema Órden de 3.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/enchiladas-rojas-pollo.jpg','Enchiladas Rojas con Pollo')}>
          Enchiladas con pollo&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$151</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Rojas o verdes, encima queso fresco y crema. Órden de 3.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Enchiladas poblanas</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$162</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con pollo, órden de 3.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/tostadas-gorditas.jpg','Tostadas y Gorditas')}>
          Tostadas ó Gorditas&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$137</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">De res o pollo con sabroso consomé. Órden de 3.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/chilaquiles-rojos.jpg','Chilaquiles Rojos')}>
          Chilaquiles&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$102</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Verdes o rojos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/chilaquiles-rojos-pollo.jpg','Chilaquiles Rojos con Pollo')}>
          Chilaquiles con pollo&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$139</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Verdes o rojos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/chilaquiles-poblanos.jpg','Chilaquiles Poblanos')}>
          Chilaquiles Poblanos&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$146</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con pollo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/nachos.jpg','Nachos con Cochinita')}>
          Nachos con cochinita&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$125</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Bañados con frijol puerco y queso amarillo coronado con chiles jalapeños y queso espolvoreado.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/chile-relleno.jpg','Chile Relleno')}>
          Chile Relleno🕜&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$133</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con queso oreado y chihuahua acompañado de sopa de arroz.</p>
    </li>
  </ul>
  <div class="my-14"></div>
</section>
<div id="ensaladas" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-16">
  <img src="{ base }/img/saludable.jpg" alt="Pa'la figura">
  <img src="{ base }/img/hojas-izq.svg" alt="Hojas" class="absolute top-42 left-0"> 
  <img src="{ base }/img/hojas-der.svg" alt="Hojas" class="absolute bottom-0 right-0">
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/peinada.jpg','¿A dónde tan peinada?')}>
          ¿A dónde tan peinada?&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$131</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Ensalada con pechuga de pollo a la plancha, lechuga, pepino, zanahoria, jitomate con aderezo mil islas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/cesar.jpg','Ensalada César')}>
          Al César lo del César&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$131</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Ensalada César con pechuga de pollo a la plancha, lechuga, aguacate, crutones con queso rallado y aderezo César.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/mascara.jpg','La Máscara')}>
          La máscara&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$133</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Ejotes con verdura y queso, nopales con verdura, colachi y aguacate.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/ejotes.jpg','Ejotes con verdura')}>
          Ejotes&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$113</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con verdura y queso, con frijoles y totopos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/nopales.jpg','Nopales con verdura')}>
          Nopales&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$113</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura y queso, con frijolitos y totopos.</p>
    </li>
  </ul>
  <div class="my-14"></div>
</section>
<div id="postres" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[2px_2px_4px_2px_#666666] mx-auto my-16">
  <img src="{ base }/img/postres.jpg" alt="Postres">
  <img src="{ base }/img/hojas-izq.svg" alt="Hojas" class="absolute top-42 left-0"> 
  <img src="{ base }/img/hojas-der.svg" alt="Hojas" class="absolute bottom-0 right-0">
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/telera-mantequilla.jpg','Pan con mantequilla')}>
          Telera con mantequilla&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$24</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/flan.jpg','Flan Casero')}>
          Flan casero&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$49</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/concha-mantequilla.jpg','Concha con mantequilla')}>
          Concha con mantequilla&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$23</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Concha La Limita</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$41</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Partida a la mitad, untada con un delicioso queso de la casa.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/concha.jpg','Pan recién horneado')}>
          Pan recién horneado&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$20</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">En horno de barro y leña.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/coricos.jpg','Caja de coricos')}>
          Coricos&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$45</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Deliciosa galleta típica sinaloense, hecha a base de maíz, son dulces, suaves y a la vez muy crujientes (1/4 de kilo).</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Pay de limón</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$51</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con costra de coricos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Galletas de maíz</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span class="text-sm font-medium">$43</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Libres de gluten.</p>
    </li>
  </ul>
  <div class="my-14"></div>
</section>
<div class="my-20">.</div>
  <!-- <div class="bg-white rounded-full w-12 h-12 text-center fixed z-50 top-24 right-2">
    <a href="https://wa.me/5216673718251" target="_blank"><i class="fa-brands fa-whatsapp text-4xl mt-1 text-green-600"></i></a>
  </div> -->
  <!-- <footer class="sticky bottom-0 z-50">
    <div class=" bg-white flex gap-1 items-center text-center p-2">
        <a href="https://goo.gl/maps/8GktgZhxGzMXABzV8" class="text-sm"><i class="fa text-red-600 fa-location-dot"></i>&thinsp;Constitución S/N La Limita de Itaje, &thinsp;Culiacán, Sinaloa.</a>
        <hr>
        <a href="https://goo.gl/maps/8spSZ96hJYvy4bKBA" class="text-sm"><i class="fa text-red-600 fa-location-dot"></i>&thinsp;San Juan #3253 Country del Río, &thinsp;Culiacán, Sinaloa.</a>
        <div class="text-sm">
            <p class="flex justify-center">Siguenos:</p>
            <div class="flex justify-around text-xl">
            <a href="https://www.facebook.com/RestauranteLaLimita/"><i class="fa-brands fa-facebook-f p-2"></i></a>
            <a href="https://www.instagram.com/restaurantelalimita/"><i class="fa-brands fa-instagram p-2"></i></a>
            <a href="tel:+526671058274"><i class="fa fa-phone p-2"></i></a>
            </div>
        </div>
    </div>
  </footer> -->
  <footer class="fixed bottom-0 bg-tan-limita w-full p-2 z-30">
    <div class="flex justify-around items-center">
      <div class="flex flex-col">
        <a href="https://goo.gl/maps/8spSZ96hJYvy4bKBA" target="_blank" class="leading-3 grow text-lg font-semibold text-center"><i class="fa text-red-600 fa-location-dot"></i>&thinsp;Itaje<span class="text-sm"><br>&thinsp;Constitución S/N La Limita de Itaje, &thinsp;Culiacán, Sinaloa.</span></a><a href="https://wa.me/5216671058274" target="_blank" class="text-sm self-center"><i class="fa-brands text-green-600 text-sm fa-whatsapp"></i>&thinsp;667 105 82 74</a>
      </div>
          <hr>
      <div class="flex flex-col">
        <a href="https://goo.gl/maps/8spSZ96hJYvy4bKBA" target="_blank" class="leading-3 grow text-lg font-semibold text-center"><i class="fa text-red-600 fa-location-dot"></i>&thinsp;Rectoría<span class="text-sm"><br>San Juan #3253 Country del Río, &thinsp;Culiacán, Sinaloa.</span></a><a href="https://wa.me/5216672023842" target="_blank" class="text-sm self-center"><i class="fa-brands text-green-600 text-sm fa-whatsapp"></i>&thinsp;667 202 38 42</a>
      </div>
    </div>
  </footer>
{#if isOverlayOpen}
  <Modal imageUrl={selectedImage} altText={alternativeText} closeModal={closeModal} hasImage={selectedImage !== null} />
{/if}