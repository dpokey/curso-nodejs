/*  ---- Programacion Asincrona JS ----  */
/* 
    Node al ser asyncrono, permite ejecutar codigo sin necesidad de esperar por la devolucion de otras llamadas, puede ir ejecutando miestras espera.

    Call Stack
    ----------
    Es una estructura de datos muy simple que realiza un seguimiento de la ejecucion del programa dentro de node. Se comporta como una pila LIFO
   
    Node APIs
    ---------
    Se registran las funciones callback

    Callback Queue
    --------------
    Es un conjunto de funciones callback que estan listos para ser devueltos
    Estas devoluciones de funciones deben de esperar a que la pila este vacia, ya que ahio solo se puede ejecutar una cosa a la vez

    Event Loop
    --------------
    El bucle de eventos valida si tiene algo en la cola para enviar a la pila, pero si la pila esta llena, espera a que esta este vacia para recien enviar

    -------------           -------------
    |           |           |           |
    |  call     |           |  node     |
    |  stack    |   ====>   |  API      |
    |           |           |           |
    |           |           |           |
    -------------           -------------
          ==>                     H
     (event loop)                 H
         <==                      V
    -------------------------------------
    |                                   |
    |           Callback Queue          |
    |                                   |
    -------------------------------------

*/  

/*  ---- Funcion de debolucion de llamada ---- */ 
/*  se define asi auna funcion que se pasa como argumento de otra guncion

API KEY = AIzaSyAWU-XHRXXYKN8b4JjOcc315e6tSLr8gNU
*/
