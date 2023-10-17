<script>
    import { onMount } from 'svelte';

    let seccion = [
        {id:'empezar', nombre:"Para empezar"},
        {id:'bebidas', nombre:"Bebidas"},
        {id:'huevos', nombre:"Huevos"},
        {id:'omeletes', nombre:"Omeletes"},
        {id:'desvelados', nombre:"Para los Desvelados!"},
        {id:'combinaciones', nombre:"Combinaciones"},
        {id:'caldos', nombre:"Caldos"},
        {id:'sandwich', nombre:"Sándwich, tortas y hamburguesas"},
        {id:'carne', nombre:"Carnes"},
        {id:'sinaloenses', nombre:"Antojitos sinaloenses"},
        {id:'ensaladas', nombre:"Ensaladas"},
        {id:'postres', nombre:"Postres"},
    ];

    let isNavOpen = false;

    let toggleNav = () => {
    isNavOpen = !isNavOpen;
    updateAriaExpanded();
  };

  const closeNav = () => {
    isNavOpen = false;
    updateAriaExpanded();
  };

  const updateAriaExpanded = () => {
    const navBar = document.getElementById('nav-bar');
    if (navBar) {
      navBar.setAttribute('aria-expanded', isNavOpen.toString());
    }
  };

  onMount(() => {
    updateAriaExpanded();
  });
</script>

<section class="sticky top-0 flex flex-col bg-inherit z-30 shadow-[4px_4px_4px_4px_#718096]">
    <div class="flex items-center justify-between bg-white">
        <div class="m-4">
            <a href="/">
                <img src="/img/logo.png" alt="La Limita" class="max-h-12">
            </a>
          </div>
          <a href="/menu" class="m-1 relative text-2xl z-30 text-red-800 font-dk">Inicio</a>
        <button class="p-6" aria-expanded="{{isNavOpen}}" aria-controls="nav-bar" on:click={toggleNav}><i class="fa-solid text-xl text-red-800 fa-bars"></i></button>
    </div>
{#if isNavOpen}
    <nav id="nav-bar" class="flex flex-col items-center justify-center bg-[url('/img/fondo.jpg')]">
        {#each seccion as seccionItem}
        <div class="relative my-0.5">
            <a href="#{seccionItem.id}" class="m-1 relative text-2xl z-30 text-red-800 font-dk" on:click={closeNav}>{seccionItem.nombre}</a>
        </div>
        {/each}
    </nav>
{/if}
</section>
