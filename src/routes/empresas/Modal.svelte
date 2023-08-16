<script>
  export let show;
  export let closeModal;
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center" class:invisible={!show}>
  <button class="absolute inset-0 bg-black opacity-50" on:click={closeModal}></button>
  <div class="z-10 p-4 bg-white rounded-lg shadow-md w-11/12 max-w-lg">
    <div class="text-xl font-bold mb-2 leading-5">LE OFRECEMOS EN CADA PAQUETE:</div>
    <div class="max-h-96 overflow-auto">
      <div class:style={"max-height: inherit;"}>
        <ul class="text-black list-disc list-inside"><p class="text-red-800 text-lg font-extrabold tracking-tight leading-5">En el consumo de 50 invitados o más incluye 2 horas de música en vivo.</p>
          <li> 1 jarra de agua de sabor por cada 2 invitados (aplica en comidas o cenas).</li>
          <li> Refill en su café de olla, americano o mixto.</li>
          <li> Servicio de meseros.</li>
          <li> Vajilla de barro.</li>
          <li> En caso de cancelación de su evento, se le reembolsará con vales de consumo que podrá canjear en la Sucursal que solicitó su evento, por el total de su anticipo.</li>
          <li> A partir de 20 a 30 invitados, dispone de 3 horas para su evento (dentro del horario del restaurante: de 8am a 4pm).</li>
          <li> A partir de 50 invitados o más: dispone de 4 horas para su evento, a partir de las 7am a 11pm de lunes a sábado.</li>
          <li> Hora extra dentro del horario del restaurante: $300.</li>
          <li> Hora extra fuera del horario del restaurante, después de las 4pm: $800.</li>
          <li> Anticipo de $500 para reservar su evento que se le descontarán del total de su cuenta.</li>
          
            <ul class="font-bold">Puede ingresar centros de mesa y decoración:
              <li>- No se permite introducir ningún alimento.</li>
              <li>- No ranurar paredes.</li>
              <li>- No engrapar ni dañar nada de madera.</li>
              <li>- No uso de cinta canela, silicón, ni nada que dañe las instalaciones.</li>
              <li>- DECORADORES; recoger al final de cada evento, no nos hacemos responsables de objetos quebrados, dañados o extraviados.</li>
            </ul>
          
        </ul>
        <span class='text-xs'>* Los precios de los paquetes no incluyen servicio. <br> Nota: Se requiere mínimo de 3 días de anticipación para definir los platillos de su evento </span>
      </div>
    </div>
    <button class="mt-4 p-2 bg-red-800 text-white rounded-md cursor-pointer" on:click={closeModal}>Cerrar</button>
  </div>
</div>
