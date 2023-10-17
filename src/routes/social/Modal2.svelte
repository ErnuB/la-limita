<script>
  export let show2;
  export let closeModal2;
  export let platillo = { platillo: '', image: '', descripcion: '' };
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center" class:invisible={!show2}>
  <button class="absolute inset-0 bg-black opacity-50" on:click={closeModal2}></button>
  <div class="z-10 p-4 bg-white rounded-lg shadow-md w-11/12 max-w-lg">
    <div class="text-xl font-bold mb-2 leading-5">{platillo.platillo}</div>
    <div class="flex flex-col">
      <img src={platillo.image} alt={platillo.platillo} class="w-full object-cover rounded-md mr-4" />
      <div class="flex-1">
        <p class="text-lg font-semibold">{platillo.descripcion}</p>
      </div>
    </div>
    <button class="mt-4 p-2 bg-red-800 text-white rounded-md cursor-pointer" on:click={closeModal2}>Cerrar</button>
  </div>
</div>
