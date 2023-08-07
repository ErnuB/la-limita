<script>
    export let isOpen;
    export let onClose;
  </script>
  
  <div class="modal" style="{isOpen ? 'display: block;' : 'display: none;'}">
    <div class="modal-content">
      <!-- Add your modal content here -->
      <h2>Términos y condiciones</h2>
      <p>Para 20 personas o más: Incluye café de olla o americano y jugo de naranja (sin refill). Selecciona hasta 3 opciones de platillos para tus invitados e incluirá una cortesía de casa (pellizcada con asientos y queso chihuahua). Los platillos incluyen frijol con queso espolvoreado y totopos. LE OFRECEMOS EN
        CADA PAQUETE:
        En el consumo de 50 invitados o más
        incluye 2 horas de música en vivo.
        restaurantelalimita
        lalimitacln
        Restaurante La Limita
        1 jarra de agua de sabor por cada 2 invitados (aplica en comidas o cenas).
        Refill en su café de olla, americano o mixto.
        Servicio de meseros.
        Vajilla de barro.
        En caso de cancelación de su evento, se le reembolsará con vales de consumo que 
        podrá canjear en la Sucursal que solicitó su evento, por el total de su anticipo.
        A partir de 20 a 30 invitados, dispone de 3 horas para su evento (dentro del horario del 
        restaurante: de 8am a 4pm).
        A partir de 50 invitados o más: dispone de 4 horas para su evento, a partir de las 7am a 
        11pm de lunes a sábado.
        Hora extra dentro del horario del restaurante: $300.
        Hora extra fuera del horario del restaurante, después de las 4pm: $800.
        Anticipo de $500 para reservar su evento que se le descontarán del total de su cuenta.
        Puede ingresar centros de mesa y decoración:
        - No se permite introducir ningún alimento.
        - No ranurar paredes.
        - No engrapar ni dañar nada de madera.
        - No uso de cinta canela, silicón, ni nada que dañe las instalaciones.
        - DECORADORES; recoger al final de cada evento, no nos hacemos responsables 
        de objetos quebrados, dañados o extraviados.
        * Los precios de los paquetes no incluyen servicio.
        Nota: Se requiere mínimo de 3 días de anticipación para definir los platillos de su 
        evento.
        * APLICA RESTRICCIONES. CAMBIO SIN PREVIO AVISO. PRECIOS NO INCLUYEN IVA.</p>
      <button on:click={onClose}>Close</button>
    </div>
  </div>
  
  <style>
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999;
    }
  
    .modal-content {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
    }
  </style>