<script>
    import Carrusel from "./Carrusel.svelte";
    import Navbar from "./Navbar.svelte";
    import Modal from "./Modal.svelte";
    export let toggleNav = false;

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
  <div class="w-4/5 m-auto p-5 flex relative">
    <img src="/img/logo.png" alt="La Limita" class="w-auto object-contain z-10">
    <img src="/img/sra.png" alt="" class="absolute top-0 -right-5 z-0 object-scale-down w-1/2">
  </div>
  <Carrusel />
  <div class="flex justify-center flex-col items-center font-mont font-bold text-xl">
    <div class="p-2 m-2 w-4/5 text-center border-red-800 border-2 rounded-3xl bg-tan-limita shadow-[0px_6px_6px_4px_#1a202c]">
      <a href="/empresas">Eventos Empresariales</a>
    </div>
    <div class="p-2 m-2 w-4/5 text-center border-red-800 border-2 rounded-3xl bg-tan-limita shadow-[0px_6px_6px_4px_#1a202c]">
      <a href="/sociales">Eventos Sociales</a>
    </div>
  </div>
</section>
<Navbar />
<div id="empezar" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[0px_20px_20px_10px_#1a202c] mx-auto my-16">
  <div class="top-background"></div>
  <div class="bottom-background"></div>
  <div class="top-right-background"></div>
  <div class="bottom-left-background"></div>
  <div class="flex flex-col relative justify-center items-center pt-12 z-0">
      <h2 class="font-body text-3xl text-red-800 font-dk z-10">Para empezar</h2>
  </div>
  <ul class="flex flex-col font-body font-medium py-4">
      <!-- <li class="flex font-bold gap-3 mx-3 relative my-2">
          <div class="flex gap-3">
              <h2 on:click={() => openModal('/img/frappe-mango.jpg','Mango')}>
              Mango (base leche)&thinsp;<i class="fa-regular fa-image font-normal"></i></h2>
          </div>
          <div class="relative grow border-b-2 border-dotted border-black -top-2"></div>
          <span>$75</span><span>$85</span>
      </li> -->
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Yogurt natural con frutas</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$89</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Manzana, papaya, melón y pera.</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Plato con frutas</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$89</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Manzana, papaya, melón y pera.</p>
      </li>
      <li class="flex font-bold gap-3 mx-3 relative my-2">
          <h2>Avena con plátano 🕦</h2>
          <div class="relative grow border-b-2 border-dotted border-black -top-2"></div>
          <span>$86</span>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center">
          <h2>Hot Cakes</h2>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">Una pieza</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$31</span>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">Órden de 3 piezas</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$89</span>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">3 piezas con tocino y jamón</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$108</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex gap-1 items-center">
          <button on:click={() => openModal('/img/platillos/queso-fundido.jpg','Queso Fundido con Chorizo')}>
            Queso fundido (250g)&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$112</span>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">con Chorizo/chilorio</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$127</span>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">con Machaca/chicharrones</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$137</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex gap-1 items-center">
          <button on:click={() => openModal('/img/platillos/guacamole.jpg','Guacamole')}>
            Guacamole&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$104</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center">
          <h2>Chorreada</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$84</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Sabroza pellizcada grande con asientos y queso gratinado con machaca o chicharrones o arrachera.</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center">
          <h2>Chorreada</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$75</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Sabroza pellizcada grande con asientos y queso gratinado con chorio o chilorio.</p>
      </li>
  </ul>
  <div class="my-12"></div>
</section>
<div id="bebidas" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[0px_20px_20px_10px_#1a202c] mx-auto my-16">
  <div class="top-background"></div>
  <div class="bottom-background"></div>
  <div class="top-right-background"></div>
  <div class="bottom-left-background"></div>
  <div class="flex flex-col relative justify-center items-center pt-12 z-0">
      <h2 class="text-4xl text-red-800 font-dk z-10">Bebidas</h2>
  </div>
  <ul class="flex flex-col font-body font-medium py-4">
    <h2 class="mx-2 font-base text-2xl text-red-800 font-bold z-10">Frescas o malteadas</h2>
    <h2 class="mx-2 mt-3 font-base text-lg text-red-500 font-bold z-10">Jugos 100% naturales</h2>
    <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center">
          <h2>Naranja, zanahoria</h2>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">Chico</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$42</span>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">Grande</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$53</span>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">1 litro</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$107</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center">
          <h2>Jugo verde (nopal, naranja y apio)</h2>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">Chico</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$45</span>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">Grande</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$56</span>
        </div>
        <div class="flex items-center gap-1">
          <p class="max-w-[16rem] text-xs mx-1">1 litro</p>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$111</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Jarra de jugo de naranja</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$159</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">1.5 litros.</p>
      </li>
      <h2 class="mx-2 mt-3 font-base text-lg text-red-500 font-bold z-10">Licuados</h2>
      <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center">
            <h2>Chocomilk, fresa, plátano, papaya o melón</h2>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">Chico</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$45</span>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">Grande</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$56</span>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">1 litro</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$111</span>
          </div>
        </li>
        <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center gap-1">
            <h2>Vaso de leche fría</h2>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$24</span>
          </div>
          <p class="max-w-[16rem] text-xs font-semibold mx-1">355 ml.</p>
        </li>
      <h2 class="mx-2 mt-3 font-base text-lg text-red-500 font-bold z-10">Refrescos y aguas de sabor</h2>
      <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center">
            <h2>Agua fresca: Jamaica, Tamarindo, naranjada, limonada</h2>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">473 ml.</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$35</span>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">1 litro</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$71</span>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">Jarra 1.5 litros</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$102</span>
          </div>
        </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center">
            <h2>Agua fresa-limón</h2>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">473 ml.</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$39</span>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">1 litro</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$78</span>
          </div>
        </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center">
            <h2>Agua jamaica-limón</h2>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">473 ml.</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$39</span>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">1 litro</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$78</span>
          </div>
        </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center">
            <h2>Limonada o naranjada en agua mineral</h2>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">500 ml.</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$52</span>
          </div>
          <div class="flex items-center gap-1">
            <p class="max-w-[16rem] text-xs mx-1">1 litro</p>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$103</span>
          </div>
        </li>
        <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center gap-1">
            <h2>Jaztea</h2>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$36</span>
          </div>
        </li>
        <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center gap-1">
            <h2>Refrescos</h2>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$36</span>
          </div>
        </li>
        <li class="font-bold gap-3 mx-3 relative my-2">
          <div class="flex  items-center gap-1">
            <h2>Agua embotellada</h2>
            <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
            <span>$23</span>
          </div>
        </li>
      <h2 class="mx-2 mt-3 font-base text-lg text-red-500 font-bold z-10">Malteadas y frapés (500 ml.)</h2>    
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Frapuchino</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$63</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Con crema batida y chispitas</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Frapuchino de óreo</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$59</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Frapuchino moka</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$59</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Malteada de fresa</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$59</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Baby mango</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$59</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Frapé de mango con chamoy y miguelito</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Piña colada</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$59</span>
        </div>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Pantera rosa</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$59</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Frapé de fresada con un toque de jugo de piña</p>
      </li>
      <h2 class="mx-2 font-base text-2xl text-red-800 font-bold z-10">Calientes</h2>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Café de olla, americano o mixto</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$39</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Refill</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Agua para café</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$39</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">Refill</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Té de querer (canela)</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$34</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">300 ml. no refill</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Té de adorar (manzanilla)</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$34</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">300 ml. no refill</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Chocolate caliente</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$45</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">300 ml. no refill</p>
      </li>
      <li class="font-bold gap-3 mx-3 relative my-2">
        <div class="flex  items-center gap-1">
          <h2>Leche para café</h2>
          <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
          <span>$40</span>
        </div>
        <p class="max-w-[16rem] text-xs font-semibold mx-1">300 ml. no refill</p>
      </li>
  </ul>
  <div class="my-12"></div>
</section>
<div id="huevos" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[0px_20px_20px_10px_#1a202c] mx-auto my-16">
  <div class="top-background"></div>
  <div class="bottom-background"></div>
  <div class="top-right-background"></div>
  <div class="bottom-left-background"></div>
  <div class="flex flex-col relative justify-center items-center pt-12 z-0">
      <h2 class="font-body text-4xl text-red-800 font-dk z-10">Del comal <br> a su mesa</h2>
      <h3 class="mx-6 text-center text-sm">(Incluye frijolitos con queso espolvoreado y totopos.)</h3>
  </div>
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Estrellados</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$99</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Rancheros</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$105</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">2 huevos rancheros o a la mexicana o sopitas con huevo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Con jamón o tocino</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$109</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Divorciados</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$99</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con salsa roja y verde.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Estrellados con tocino</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$107</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Acompañados con 2 tiras de tocino fritas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex items-center gap-1">
        <button on:click={() => openModal('/img/platillos/huevo-machaca.jpg','Huevos revueltos con Machaca')}>
          Revueltos con machaca&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$140</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Revueltos con chorizo</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$121</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Revueltos con chilorio</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$121</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-3">
        <h2>Revueltos con nopales</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$103</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Revueltos con ejotes</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$103</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura.</p>
    </li>
  </ul>
  <div class="my-12"></div>
</section>
<div id="omeletes" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[0px_20px_20px_10px_#1a202c] mx-auto my-16">
  <div class="top-background"></div>
  <div class="bottom-background"></div>
  <div class="top-right-background"></div>
  <div class="bottom-left-background"></div>
  <div class="flex flex-col relative justify-center items-center pt-12 z-0">
      <h2 class="font-body text-4xl text-red-800 font-dk z-10">Omeletes</h2>
  </div>
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Tradicional</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$125</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con champiñones, jamón y mezcla de quesos acompañado con frijolitos con queso espolvoreado y totopos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Coronel🌶️</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$145</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">De machaca mochomo revuelta con papa y mezcla de quesos, bañado con salsa guajillo acompañado con frijolitos con queso espolvoreado y totopos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>del Río</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$159</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Relleno de top Sirloin (100g), cocinado con pimientos, cebolla blanca y mezcla de quesos acompañado con ensalada y papas sazonadas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Popeye</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$141</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Revuelto de acelgas relleno de champiñon, jamón y mezcla de quesos acompañado con ensalada.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Cuatro claras</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$124</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Por dentro mezcla de quesos, chiles en raja con elotitos y cebolla blanca, acompañado de colachito y frijolitos con queso espolvoreado y totopos.</p>
    </li>
  </ul>
  <div class="my-12"></div>
</section>
<div id="desvelados" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[0px_20px_20px_10px_#1a202c] mx-auto my-16">
  <div class="top-background"></div>
  <div class="bottom-background"></div>
  <div class="top-right-background"></div>
  <div class="bottom-left-background"></div>
  <div class="flex flex-col relative justify-center items-center pt-12 z-0">
      <h2 class="font-body text-3xl text-red-800 font-dk text-center z-10">Para los cru... <br> Perdón Desvelados!</h2>
  </div>
  <h2 class="text-center mt-3 font-base text-lg text-red-500 font-bold z-10">Sólo sábados y domingos</h2>    
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Menudo</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$119</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">750ml.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Birria</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$144</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con el sazón de Doña Rafaela (750ml).</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Taco de birria</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$41</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con sabroso consomé.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Chorreada</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$79</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Sabrosa pellizcada con asientos, carne de birria y queso gratinado con sabroso consomé.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Consomé extra</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$25</span>
      </div>
    </li>
  </ul>
  <div class="my-12"></div>
</section>
<div id="combinaciones" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[0px_20px_20px_10px_#1a202c] mx-auto my-16">
  <div class="top-background"></div>
  <div class="bottom-background"></div>
  <div class="top-right-background"></div>
  <div class="bottom-left-background"></div>
  <div class="flex flex-col relative justify-center items-center pt-12 z-0">
      <h2 class="font-body text-3xl text-red-800 font-dk text-center z-10">Combinaciones:</h2>
      <h3 class="mx-6 text-center text-sm">(Incluye frijolitos con queso espolvoreado y totopos.)</h3>
  </div>  
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/limita.jpg','La Limita')}>
          La Limita⭐&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$152</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Machaca con verdura, colachi, chilorio, tamal de elote acompañado de un huevo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>El Metate⭐</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$149</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Machaca con verdura, tamal de elote acompañado de un huevo o chilaquiles.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Don Avelino</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$113</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">2 huevos acompañados de chilaquiles.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Desayuno Vaquero</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$163</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Puntas de top sirloin, un huevo y chilaquiles.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Tía Pola</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$123</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">2 tamales de elote gratinados acompañados de rajas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>El Sinaloense⭐</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$113</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Taquito de machaca en tortilla de maíz acompañado de queso gratinado coronado con chotizo, un huevo y aguacate.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>De la Abuela</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$124</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Papas con verdura, bañadas con queso chihuahua y queso fresco, acompañado de dos huevos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Don Nacho</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$128</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Dos ricos tamales de elote, bañados con frijoles puercos, cochinita pibil, queso amarillo y chiles jalapeños, acompañados de totopos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>El Bule</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$131</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Hot cakes (dos piezas), acompañados de dos huevos con jamón o tocino.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/sauce.jpg','Combinación El Sauce')}>
          El Sauce⭐&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$148</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Deliciosa machaca acompañada de un tamal de elote.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/arroyo.jpg','Combinación El Arroyo')}>
          El Arroyo&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$128</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Tamal de elote acompañado de rajas con crema y chilaquiles.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Pingüica</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$138</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Chicharrón a la mexicana o en salsa a elegir, chilaquiles acompañado de un huevo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Molletes</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$123</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">2 mitades de pan bañadas con frijoles puercos y queso chihuahua, acompañados de tocino, chilaquiles y un huevo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>La Jícara</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$139</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Dos huevos acompañados con queso fresco, aguacate y dos salchichas fritas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>La Mochomita</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$159</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Machaca mochomo (con chile verde y cebollita) y dos huevos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Las Piedronas</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$138</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Chilorio con o sin verdura, un huevo y una quesadilla de maíz.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>El Rancherito</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$145</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Jugoso hígado ranchero, chilaquiles y un huevo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/pueblo.jpg','Del Pueblo')}>
          Del Pueblo&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$156</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Fajitas de pollo a la plancha, chilaquiles y un huevo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Tamazula</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$154</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Jugoso pollo a la plancha, montado en rajas con crema y elotitios, arroz rojo acompañado de ensalada fresca (no incluye frijol).</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Tabachín</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$159</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Bistec ranchero con quesadilla de maíz acompañado de un huevo o papas fritas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Don Rufino🌶️</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$129</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">2 Huevos acompañados de chilaquiles con pollo y salsa guajillo.</p>
    </li>
  </ul>
  <div class="my-12"></div>
</section>
<div id="caldos" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[0px_20px_20px_10px_#1a202c] mx-auto my-16">
  <div class="top-background"></div>
  <div class="bottom-background"></div>
  <div class="top-right-background"></div>
  <div class="bottom-left-background"></div>
  <div class="flex flex-col relative justify-center items-center pt-12 z-0">
      <h2 class="font-body text-3xl text-red-800 font-dk text-center z-10">Calditos <br> pal corazón</h2>
  </div>  
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Caldo de cocido</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$124</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">750 ml.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Caldo tlalpeño</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$114</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">750 ml.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Sopa de tortilla</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$114</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">750 ml.</p>
    </li>
  </ul>
  <div class="my-12"></div>
</section>
<div id="sandwich" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[0px_20px_20px_10px_#1a202c] mx-auto my-16">
  <div class="top-background"></div>
  <div class="bottom-background"></div>
  <div class="top-right-background"></div>
  <div class="bottom-left-background"></div>
  <div class="flex flex-col relative justify-center items-center pt-12 z-0">
      <h2 class="font-body text-3xl text-red-800 font-dk text-center z-10">Sándwich <br> tortas y hamburguesas</h2>
  </div>  
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Trota de cochinita</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$92</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/torta-ahogada.jpg','Torta de cochinita ahogada')}>
          Torta de cochinita&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$107</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Ahogada.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/torta-mexicana.jpg','Torta Mexicana')}>
          Torta Mexicana&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$153</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Rellena con top sirloin, aguacate, cebollita asada, queso gratinado, consomé y papas fritas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/limiburguer.jpg','Limiburguer')}>
          Limiburguer&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$146</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Sabrosa hamburguesa de res (130g) al carbón con queso chihuahua, cebollita asada, tocino, champiñones salteados acompañados con BBQ aguacate y papas fritas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Hamburguesa tradicional</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$121</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Sabrosa hamburguesa de res (130g), jamón, lechuga, tomate, aguacate, chiles jalapeños y papas fritas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>El Colibrí</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$99</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Sandwich especial de jamón de pavo con queso americano, trocitos de tocino, lechuga, tomate, aguacate y chiles jalapeños. Acompañado de papas fritas.</p>
    </li>
  </ul>
  <div class="my-12"></div>
</section>
<div id="carne" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[0px_20px_20px_10px_#1a202c] mx-auto my-16">
  <div class="top-background"></div>
  <div class="bottom-background"></div>
  <div class="top-right-background"></div>
  <div class="bottom-left-background"></div>
  <div class="flex flex-col relative justify-center items-center pt-12 z-0">
      <h2 class="font-body text-3xl text-red-800 font-dk text-center z-10">Arrozzzzz <br> que carne hay!</h2>
  </div>  
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Encabritado🕦</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$190</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Filete de carne asada (200g) con 2 quesadillas de maíz, cebollita cambray, chile toreado, frijolitos de la olla y aguacate.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>La Noria🕦</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$171</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Carne asada (200g) frijolitos de la olla, cebollitas cambray y salsa bandera.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Sinaloa Encanta</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$197</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Machaca, chorizo, chicharrón con salsa a elegir, chilorio, quesadilla de harina y chilaquiles.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>La Amapa</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$148</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Órden de 3 tacos de tortilla de maíz mediana con arrachera (150g) en tiritas con queso fundido, acompañados de aguacate y frijoles de la olla.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Hígado</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$125</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Ranchero o encebollado acompañado con frijolitos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Chilorio</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$121</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Machaca de res</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$140</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/danzante.jpg','El Danzante')}>
          El Danzante&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$148</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Pellizcada grande con asientos, ecima 100g de arrachera, sabroso queso fundido coronado con chorizo acompañado con aguacate y frijolitos.</p>
    </li>
  </ul>
  <div class="my-12"></div>
</section>
<div id="sinaloenses" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[0px_20px_20px_10px_#1a202c] mx-auto my-16">
  <div class="top-background"></div>
  <div class="bottom-background"></div>
  <div class="top-right-background"></div>
  <div class="bottom-left-background"></div>
  <div class="flex flex-col relative justify-center items-center pt-12 z-0">
      <h2 class="font-body text-3xl text-red-800 font-dk text-center z-10">Antojitos <br> sinaloenses y más...</h2>
  </div>  
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Enchiladas con queso</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$119</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Rojas o verdes, encima queso fresco y crema Órden de 3.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <button on:click={() => openModal('/img/platillos/enchiladas-rojas-pollo.jpg','Enchiladas Rojas con Pollo')}>
          Enchiladas con pollo&thinsp;<i class="fa-regular fa-image font-normal"></i></button>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$137</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Rojas o verdes, encima queso fresco y crema. Órden de 3.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Enchiladas poblanas</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$147</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con pollo, órden de 3.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Tostadas o gorditas</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$124</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">De res o pollo con sabroso consomé. Órden de 3.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Chilaquiles</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$93</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Verdes o rojos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Chilaquiles con pollo</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$126</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Verdes o rojos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Chilaquiles poblanos</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$133</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con pollo.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Nachos con cochinita</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$114</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Bañados con frijol puerco y queso amarillo coronado con chiles jalapeños y queso espolvoreado.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Chile relleno🕦</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$121</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con queso oreado y chihuahua acompañado de sopa de arroz.</p>
    </li>
  </ul>
  <div class="my-12"></div>
</section>
<div id="ensaladas" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[0px_20px_20px_10px_#1a202c] mx-auto my-16">
  <div class="top-background"></div>
  <div class="bottom-background"></div>
  <div class="top-right-background"></div>
  <div class="bottom-left-background"></div>
  <div class="flex flex-col relative justify-center items-center pt-12 z-0">
      <h2 class="font-body text-3xl text-red-800 font-dk text-center z-10">Y... para<br> mantener la figura "culichi"</h2>
  </div>  
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>¿A dónde tan peinada?</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$119</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Pechuga de pollo a la plancha, lechuga, pepino, zanahoria, jitomate con aderezo mil islas.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Al César lo del César</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$119</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Pechuga de pollo a la plancha, lechuga, aguacate, crutones con queso rallado y aderezo César.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>La máscara</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$121</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Ejotes con verdura y queso, nopales con verdura, colachi y aguacate.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Ejotes</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$103</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con verdura y queso, con frijoles y totopos.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Nopales</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$103</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Con o sin verdura y queso, con frijolitos y totopos.</p>
    </li>
  </ul>
  <div class="my-12"></div>
</section>
<div id="postres" class="scroll-mt-20"></div>
<section class="bg-tan-limita w-11/12 background-section shadow-[0px_20px_20px_10px_#1a202c] mx-auto my-16">
  <div class="top-background"></div>
  <div class="bottom-background"></div>
  <div class="top-right-background"></div>
  <div class="bottom-left-background"></div>
  <div class="flex flex-col relative justify-center items-center pt-12 z-0">
      <h2 class="font-body text-3xl text-red-800 font-dk text-center z-10">Nuestros<br>deliciosos postres</h2>
  </div>  
  <ul class="flex flex-col font-body font-medium py-4">
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Telera con mantequilla</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$22</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Flan casero</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$45</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Panelote</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$45</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Bañado con deliciosa cajeta.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Concha con mantequilla</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$21</span>
      </div>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Concha La Limita</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$37</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Partida a la mitad, untada con un delicioso queso de la casa.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Pan recién horneado</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$18</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">En horno de barro y leña.</p>
    </li>
    <li class="font-bold gap-3 mx-3 relative my-2">
      <div class="flex  items-center gap-1">
        <h2>Coricos</h2>
        <div class="relative grow border-b-2 border-dotted border-black top-1"></div>
        <span>$39</span>
      </div>
      <p class="max-w-[16rem] text-xs font-semibold mx-1">Deliciosa galleta típica sinaloense, hecha a base de maíz, son dulces, suaves y a la vez muy crujientes (1/4 de kilo).</p>
    </li>
  </ul>
  <div class="my-12"></div>
</section>
<div class="my-20">.</div>
  <!-- <div class="bg-white rounded-full w-12 h-12 text-center fixed z-50 top-24 right-2">
    <a href="https://wa.me/5216673718251" target="_blank"><i class="fa-brands fa-whatsapp text-4xl mt-1 text-green-600"></i></a>
  </div> -->
  <footer class="sticky bottom-0 z-50">
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
  </footer>
{#if isOverlayOpen}
  <Modal imageUrl={selectedImage} altText={alternativeText} closeModal={closeModal} hasImage={selectedImage !== null} />
{/if}