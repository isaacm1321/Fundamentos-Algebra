contenidoEntrada = `
<section>
    <h1>Ecuaciones de Primer Grado</h1>

    <p>
        Una ecuación de primer grado o lineal básicamente es una igualdad donde la incógnita tiene exponente 1.
        O sea, la letra no está elevada al cuadrado ni metida en una raíz ni nada por el estilo.
        Su forma general casi siempre se escribe asi:
    </p>

    <p>
        <strong>ax + b = 0 (donde a ≠ 0)</strong>
    </p>

    <p>
        Resolver una ecuación de este tipo significa encontrar el valor numérico que debe tomar esa incógnita para que ambos lados de la igualdad den exactamente lo mismo.
        A ese resultado se le conoce como solución o raíz de la ecuación, y siguiendo los pasos con cuidado, el procedimiento resulta bastante claro.
    </p>

    <hr>

    <h2>Procedimiento General de Resolución</h2>
    <p>
        Para resolver cualquier ecuación lineal de manera ordenada y sin confundirnos, seguimos los pasos que hemos visto en clase.
        Todo se apoya en la propiedad fundamental de las igualdades: cualquier operación que realicemos en un miembro (sumar, restar, multiplicar o dividir), debemos aplicarla exactamente igual en el otro miembro para conservar el equilibrio.
    </p>

    <ol>
        <li>
            <strong>Eliminar paréntesis y signos de agrupación:</strong> Si la ecuación contiene paréntesis o corchetes, aplicamos la propiedad distributiva multiplicando el término exterior por cada elemento interior. Eso sí, debemos prestar mucha atención a los signos negativos, ya que un signo menos antes de un paréntesis cambia el signo de todos los términos que están adentro.
        </li>
        <li>
            <strong>Eliminar denominadores si hay fracciones:</strong> Cuando aparecen fracciones, lo mas conveniente es obtener el mínimo común múltiplo (MCM) de todos los denominadores y multiplicar ambos miembros de la ecuación por ese número. De esta manera eliminamos los denominadores y trabajamos con números enteros.
        </li>
        <li>
            <strong>Transposición de términos:</strong> Acomodamos todos los términos que contienen a la incógnita en un solo lado (por costumbre en el lado izquierdo) y los términos numéricos o constantes en el otro lado (a la derecha). Lo que está sumando pasa restando, y lo que está restando pasa sumando.
        </li>
        <li>
            <strong>Reducción de términos semejantes:</strong> Sumamos o restamos algebraicamente las incógnitas entre sí y los números entre sí, para obtener una expresión simplificada de la forma <strong>Ax = B</strong>.
        </li>
        <li>
            <strong>Despejar la incógnita y comprobar:</strong> Dejamos la incógnita sola pasando el coeficiente que la acompaña dividiendo al miembro opuesto, es decir, <strong>x = B / A</strong>. Y por ultimo, sustituimos este valor en la ecuación original para verificar que ambos lados resulten idénticos.
        </li>
    </ol>

    <hr>

    <h2>Casos Clave: Ejemplos Resueltos y Comprobados</h2>

    <!-- CASO 1: ENTERAS -->
    <h3>1. Ecuaciones Enteras</h3>
    <p>
        Son aquellas en las que ninguno de los términos tiene denominadores fraccionarios, por lo que el proceso es directo.
    </p>

    <p><strong>Ecuación que vamos a resolver:</strong> 8x - 14 = 2x + 22</p>

    <h4>Procedimiento paso a paso:</h4>
    <ul>
        <li>Pasamos el término 2x restando al miembro izquierdo y el -14 sumando al derecho: 8x - 2x = 22 + 14</li>
        <li>Reducimos los términos semejantes en ambos lados: 6x = 36</li>
        <li>Pasamos el 6 dividiendo para despejar la incógnita: x = 36 / 6</li>
        <li>Obtenemos la solución: <strong>x = 6</strong></li>
    </ul>

    <h4>Comprobación:</h4>
    <p>Sustituimos x = 6 en la ecuación original:</p>
    <p>Miembro izquierdo: 8(6) - 14 = 48 - 14 = <strong>34</strong></p>
    <p>Miembro derecho: 2(6) + 22 = 12 + 22 = <strong>34</strong></p>
    <p>Se obtiene 34 = 34, lo que demuestra que la igualdad se cumple correctamente.</p>

    <hr>

    <!-- CASO 2: FRACCIONARIAS -->
    <h3>2. Ecuaciones Fraccionarias</h3>
    <p>
        Estas ecuaciones incluyen fracciones con denominadores numéricos. Lo mas recomendable es simplificar los denominadores desde el primer paso para facilitar el trabajo.
    </p>

    <p><strong>Ecuación que vamos a resolver:</strong> (3x - 1) / 4 - (2x + 3) / 6 = (x - 5) / 3</p>

    <h4>Procedimiento paso a paso:</h4>
    <ul>
        <li>
            Calculamos el mínimo común múltiplo de los denominadores 4, 6 y 3, el cual es 12.
        </li>
        <li>
            Multiplicamos cada término de la ecuación por 12:<br>
            12 · [(3x - 1) / 4] - 12 · [(2x + 3) / 6] = 12 · [(x - 5) / 3]<br>
            Al simplificar nos queda: 3(3x - 1) - 2(2x + 3) = 4(x - 5)
        </li>
        <li>
            Efectuamos los productos cuidando el signo negativo del segundo término:<br>
            9x - 3 - 4x - 6 = 4x - 20
        </li>
        <li>
            Reducimos los términos semejantes en el lado izquierdo:<br>
            5x - 9 = 4x - 20
        </li>
        <li>
            Reagrupamos las incógnitas y los números constantes:<br>
            5x - 4x = -20 + 9<br>
            <strong>x = -11</strong>
        </li>
    </ul>

    <h4>Comprobación:</h4>
    <p>Sustituimos el valor x = -11 en la ecuación fraccionaria:</p>
    <p>
        Miembro izquierdo:<br>
        [3(-11) - 1] / 4 - [2(-11) + 3] / 6<br>
        = (-33 - 1) / 4 - (-22 + 3) / 6<br>
        = -34 / 4 - (-19) / 6<br>
        = -17 / 2 + 19 / 6 = (-51 + 19) / 6 = -32 / 6 = <strong>-16 / 3</strong>
    </p>
    <p>
        Miembro derecho:<br>
        (-11 - 5) / 3 = <strong>-16 / 3</strong>
    </p>
    <p>Ambos miembros son iguales a -16 / 3, por lo que la solución es válida.</p>

    <hr>

    <!-- CASO 3: SIGNOS DE AGRUPACIÓN -->
    <h3>3. Ecuaciones con Signos de Agrupación</h3>
    <p>
        Aquí aparecen paréntesis y corchetes combinados. La regla principal es trabajar de adentro hacia afuera para evitar errores de signos.
    </p>

    <p><strong>Ecuación que vamos a resolver:</strong> 5(2x - 3) - 3[2 - 4(x - 1)] = 4(3x + 1) + 3</p>

    <h4>Procedimiento paso a paso:</h4>
    <ul>
        <li>
            Primero resolvemos el paréntesis interior que está dentro del corchete:<br>
            2 - 4(x - 1) = 2 - 4x + 4 = 6 - 4x<br>
            Sustituimos este avance en la ecuación: 5(2x - 3) - 3[6 - 4x] = 4(3x + 1) + 3
        </li>
        <li>
            Eliminamos los paréntesis y corchetes restantes multiplicando sus coeficientes:<br>
            10x - 15 - 18 + 12x = 12x + 4 + 3
        </li>
        <li>
            Reducimos términos semejantes en cada miembro:<br>
            22x - 33 = 12x + 7
        </li>
        <li>
            Transponemos los términos para agrupar las x y las constantes:<br>
            22x - 12x = 7 + 33<br>
            10x = 40<br>
            x = 40 / 10<br>
            <strong>x = 4</strong>
        </li>
    </ul>

    <h4>Comprobación:</h4>
    <p>Sustituimos x = 4 en la ecuación inicial:</p>
    <p>
        Miembro izquierdo:<br>
        5[2(4) - 3] - 3[2 - 4(4 - 1)]<br>
        = 5[8 - 3] - 3[2 - 4(3)]<br>
        = 5(5) - 3[2 - 12]<br>
        = 25 - 3(-10) = 25 + 30 = <strong>55</strong>
    </p>
    <p>
        Miembro derecho:<br>
        4[3(4) + 1] + 3 = 4(12 + 1) + 3 = 4(13) + 3 = 52 + 3 = <strong>55</strong>
    </p>
    <p>Obtenemos 55 = 55, confirmando que x = 4 es el resultado correcto.</p>

    <hr>

    <!-- CASO 4: LITERALES -->
    <h3>4. Ecuaciones Literales</h3>
    <p>
        En estas ecuaciones intervienen varias letras, pero solo una de ellas es la incógnita que nos interesa despejar (en este caso la x). Las demás letras se manejan como si fueran valores constantes conocidos.
    </p>

    <p><strong>Ecuación que vamos a resolver:</strong> Despejar x en: m(x - 2) + n(x + 1) = 3m + 4n (considerando que m + n ≠ 0)</p>

    <h4>Procedimiento paso a paso:</h4>
    <ul>
        <li>
            Efectuamos los productos indicados:<br>
            mx - 2m + nx + n = 3m + 4n
        </li>
        <li>
            Pasamos los términos con la variable x al lado izquierdo y las constantes literales al derecho:<br>
            mx + nx = 3m + 4n + 2m - n
        </li>
        <li>
            Reducimos términos semejantes en el lado derecho:<br>
            mx + nx = 5m + 3n
        </li>
        <li>
            Factorizamos la variable x mediante factor común en el lado izquierdo:<br>
            x(m + n) = 5m + 3n
        </li>
        <li>
            Despejamos la x pasando el binomio (m + n) dividiendo:<br>
            <strong>x = (5m + 3n) / (m + n)</strong>
        </li>
    </ul>

    <h4>Comprobación algebraica:</h4>
    <p>
        Sustituimos la expresión obtenida para x en el miembro izquierdo y multiplicamos por (m + n):<br>
        m[ (5m + 3n)/(m + n) - 2 ] + n[ (5m + 3n)/(m + n) + 1 ]<br>
        = m[ (5m + 3n - 2m - 2n) / (m + n) ] + n[ (5m + 3n + m + n) / (m + n) ]<br>
        = m(3m + n)/(m + n) + n(6m + 4n)/(m + n)<br>
        = (3m² + mn + 6mn + 4n²) / (m + n)<br>
        = (3m² + 7mn + 4n²) / (m + n)<br>
        Al factorizar el numerador resulta (m + n)(3m + 4n) / (m + n), se cancela el factor común y nos queda <strong>3m + 4n</strong>.<br>
        Esto coincide exactamente con el miembro derecho de la ecuación planteada.
    </p>

    <hr>

    <h2>Problema Propio de la Vida Diaria</h2>

    <p>
        <strong>Enunciado del problema:</strong><br>
        Fui a una tienda de computación a comprar material escolar. Adquirí un mouse con un costo fijo de $120 pesos y 3 memorias USB del mismo modelo y precio. Al pasar a la caja, pagué un total de $360 pesos. ¿Cuál fue el precio de cada memoria USB?
    </p>

    <h3>Resolución aplicando los 5 pasos formales:</h3>

    <ol>
        <li>
            <strong>Paso 1: Definición de la incógnita</strong><br>
            Sea <em>x</em> = el precio de cada memoria USB en pesos (con x > 0).
        </li>
        <li>
            <strong>Paso 2: Traducción al lenguaje algebraico</strong><br>
            <ul>
                <li>Costo del mouse = 120 pesos</li>
                <li>Costo de las 3 memorias USB = 3x</li>
                <li>Gasto total de la compra = 120 + 3x</li>
                <li>Total pagado = 360 pesos</li>
            </ul>
        </li>
        <li>
            <strong>Paso 3: Planteamiento de la ecuación</strong><br>
            <p><strong>120 + 3x = 360</strong></p>
        </li>
        <li>
            <strong>Paso 4: Solución paso a paso</strong><br>
            Pasamos el término 120 restando al miembro derecho:<br>
            3x = 360 - 120<br>
            3x = 240<br>
            Despejamos x pasando el 3 dividiendo:<br>
            x = 240 / 3<br>
            <strong>x = 80 pesos</strong>.<br>
            El costo de cada memoria USB es de $80 pesos.
        </li>
        <li>
            <strong>Paso 5: Validación contra el enunciado</strong><br>
            Comprobamos que el resultado obtenido sea coherente con la situación planteada en el enunciado:<br>
            Si cada memoria USB cuesta $80 pesos, por las tres memorias se pagan: 3 × $80 = $240 pesos.<br>
            Sumando el costo del mouse ($120 pesos), tenemos: $120 + $240 = $360 pesos.<br>
            El cálculo coincide exactamente con los $360 pesos abonados en la caja, lo que valida la solución matemática en el contexto del problema.
        </li>
    </ol>
</section>`;
