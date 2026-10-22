contenidoEntrada = `
<section>
    <h1>Factorización II</h1>

    <p>
        Factorizar un polinomio consiste en expresarlo como una multiplicación
        de factores mas simples. En esta entrada del blog vamos a revisar cuatro casos
        clave que trabajamos en clase: la suma y diferencia de cubos, los trinomios
        de la forma x² + bx + c y los trinomios de la forma ax² + bx + c resueltos
        con el método de aspa simple. El objetivo principal es aprender a identificar
        qué procedimiento aplicar según las características de cada polinomio.
    </p>

    <hr>

    <h2>1. Suma de cubos</h2>

    <h3>¿Cómo identificarla?</h3>
    <p>
        Este caso se reconoce cuando tenemos un binomio con dos términos que se
        están sumando y a ambos se les puede extraer raíz cúbica exacta, es decir,
        los dos términos son cubos perfectos.
    </p>

    <p><strong>Fórmula:</strong></p>
    <p>a³ + b³ = (a + b)(a² - ab + b²)</p>

    <h3>Procedimiento</h3>
    <ol>
        <li>Obtener la raíz cúbica de cada uno de los dos términos.</li>
        <li>Escribir el primer factor binomio con la suma de dichas raíces: (a + b).</li>
        <li>Formar el segundo factor con el cuadrado de la primera raíz, menos el
        producto de ambas raíces, más el cuadrado de la segunda raíz. Hay que prestar
        atención al signo central del trinomio, ya que siempre es negativo.</li>
    </ol>

    <h3>Ejemplo resuelto</h3>
    <p><strong>Factorizar:</strong> x³ + 125</p>

    <p><strong>Paso 1. Sacar las raíces cúbicas.</strong></p>
    <p>∛(x³) = x</p>
    <p>∛125 = 5</p>

    <p><strong>Paso 2. Aplicar la fórmula.</strong></p>
    <p>x³ + 125 = (x + 5)(x² - 5x + 25)</p>

    <p><strong>Resultado:</strong></p>
    <p>(x + 5)(x² - 5x + 25)</p>

    <h3>Comprobación</h3>
    <p>
        Multiplicamos término a término para verificar que el procedimiento sea correcto:
    </p>
    <p>
        (x + 5)(x² - 5x + 25)
    </p>
    <p>
        = x³ - 5x² + 25x + 5x² - 25x + 125
    </p>
    <p><strong>= x³ + 125</strong></p>
    <p>Los términos semejantes intermedios se anulan y obtenemos la expresión inicial.</p>

    <hr>

    <h2>2. Diferencia de cubos</h2>

    <h3>¿Cómo identificarla?</h3>
    <p>
        Se presenta de manera similar a la suma de cubos, pero en este caso los dos
        términos se están restando. Ambos deben contar con raíz cúbica exacta.
    </p>

    <p><strong>Fórmula:</strong></p>
    <p>a³ - b³ = (a - b)(a² + ab + b²)</p>

    <h3>Procedimiento</h3>
    <ol>
        <li>Extraer la raíz cúbica de ambos términos.</li>
        <li>Escribir el primer binomio con la resta de las dos raíces: (a - b).</li>
        <li>Construir el segundo factor colocando la primera raíz al cuadrado, más el
        producto de las dos raíces, más la segunda raíz al cuadrado. En este segundo
        paréntesis todos los términos conservan signo positivo.</li>
    </ol>

    <h3>Ejemplo resuelto</h3>
    <p><strong>Factorizar:</strong> 8x³ - 343</p>

    <p><strong>Paso 1. Sacar las raíces cúbicas.</strong></p>
    <p>∛(8x³) = 2x</p>
    <p>∛343 = 7</p>

    <p><strong>Paso 2. Aplicar la fórmula.</strong></p>
    <p>
        (2x)³ - 7³ = (2x - 7)((2x)² + (2x)(7) + 7²)
    </p>
    <p>= (2x - 7)(4x² + 14x + 49)</p>

    <p><strong>Resultado:</strong></p>
    <p>(2x - 7)(4x² + 14x + 49)</p>

    <h3>Comprobación</h3>
    <p>
        Realizamos el producto de los factores:
    </p>
    <p>
        (2x - 7)(4x² + 14x + 49)
    </p>
    <p>
        = 8x³ + 28x² + 98x - 28x² - 98x - 343
    </p>
    <p><strong>= 8x³ - 343</strong></p>
    <p>Al cancelarse los términos intermedios, confirmamos que la factorización es correcta.</p>

    <hr>

    <h2>3. Trinomios de la forma x² + bx + c</h2>

    <h3>¿Cómo identificarlo?</h3>
    <p>
        Consta de tres términos ordenados donde el coeficiente del término cuadrático
        x² es igual a 1, seguido de un término lineal bx y una constante numérica c
        como término independiente.
    </p>

    <p><strong>Forma general:</strong> x² + bx + c</p>

    <h3>Procedimiento</h3>
    <ol>
        <li>Identificar con claridad los valores de los coeficientes b y c con sus signos.</li>
        <li>Buscar dos números enteros que sumados den como resultado b.</li>
        <li>Verificar que esos mismos dos números multiplicados sean iguales a c.</li>
        <li>Escribir los dos binomios utilizando los valores encontrados.</li>
    </ol>

    <h3>Ejemplo resuelto</h3>
    <p><strong>Factorizar:</strong> x² + 7x + 12</p>

    <p><strong>Paso 1. Identificar los valores.</strong></p>
    <p>b = 7</p>
    <p>c = 12</p>

    <p><strong>Paso 2. Buscar dos números.</strong></p>
    <p>1 + 12 = 13</p>
    <p>2 + 6 = 8</p>
    <p>3 + 4 = 7</p>
    <p>3 × 4 = 12</p>

    <p>
        Los números adecuados son 3 y 4 porque satisfacen ambas condiciones: suman 7 y multiplicados dan 12.
    </p>

    <p><strong>Paso 3. Escribir los factores.</strong></p>
    <p>x² + 7x + 12 = (x + 3)(x + 4)</p>

    <p><strong>Resultado:</strong></p>
    <p>(x + 3)(x + 4)</p>

    <h3>Comprobación</h3>
    <p>(x + 3)(x + 4)</p>
    <p>= x² + 4x + 3x + 12</p>
    <p><strong>= x² + 7x + 12</strong></p>
    <p>La multiplicación reproduce exactamente el trinomio que se nos planteó al inicio.</p>

    <hr>

    <h2>4. Trinomios de la forma ax² + bx + c (aspa simple)</h2>

    <h3>¿Cómo identificarlo?</h3>
    <p>
        Tiene tres términos ordenados de forma cuadrática, pero el coeficiente de
        x² es distinto de 1, lo cual requiere aplicar el método de descomposición en aspa.
    </p>

    <p><strong>Forma general:</strong> ax² + bx + c</p>

    <h3>Procedimiento</h3>
    <ol>
        <li>Descomponer el primer término (ax²) en dos factores verticales.</li>
        <li>Descomponer el tercer término (c) en dos factores colocados en la columna contigua.</li>
        <li>Multiplicar los factores en cruz (en aspa).</li>
        <li>Sumar los productos obtenidos para corroborar que den el término lineal central bx.</li>
        <li>Tomar los factores en forma horizontal para integrar los dos binomios de la respuesta.</li>
    </ol>

    <h3>Ejemplo resuelto</h3>
    <p><strong>Factorizar:</strong> 6x² + 11x + 3</p>

    <p><strong>Paso 1. Descomponer el primer término.</strong></p>
    <p>6x² = 3x × 2x</p>

    <p><strong>Paso 2. Descomponer el último término.</strong></p>
    <p>3 = 1 × 3</p>

    <p><strong>Paso 3. Multiplicar en cruz.</strong></p>
    <p>3x × 3 = 9x</p>
    <p>2x × 1 = 2x</p>

    <p><strong>Paso 4. Sumar los resultados.</strong></p>
    <p>9x + 2x = 11x</p>

    <p>
        Como la suma nos da exactamente 11x (el término central del trinomio), la combinación elegida es la correcta.
    </p>

    <p><strong>Resultado:</strong></p>
    <p>6x² + 11x + 3 = (3x + 1)(2x + 3)</p>

    <h3>Comprobación</h3>
    <p>(3x + 1)(2x + 3)</p>
    <p>= 6x² + 9x + 2x + 3</p>
    <p><strong>= 6x² + 11x + 3</strong></p>
    <p>Al desarrollar el producto corroboramos que regresamos al trinomio original.</p>

    <hr>

    <h2>Estrategia para elegir el método adecuado</h2>

    <p>
        Cuando resolvemos una serie de ejercicios y no se especifica el caso, lo mas
        conveniente es observar primero la cantidad de términos que contiene el polinomio:
    </p>

    <ol>
        <li>
        <strong>Un término:</strong> buscar factor común numérico o literal mediante el
        máximo común divisor de los coeficientes y las variables compartidas.
        </li>
        <li>
        <strong>Dos términos:</strong> evaluar si existe factor común; en caso contrario,
        revisar si corresponde a una diferencia de cuadrados o a una suma o diferencia de cubos.
        </li>
        <li>
        <strong>Tres términos:</strong> descartar primero factor común. Después revisar si es un
        trinomio cuadrado perfecto, o si se resuelve buscando dos números (x² + bx + c) o con
        el método de aspa simple (ax² + bx + c).
        </li>
        <li>
        <strong>Cuatro términos o más:</strong> intentar la factorización por agrupación de términos,
        reuniendo parejas que compartan factores en común.
        </li>
        <li>
        <strong>Comprobación:</strong> multiplicar los binomios finales para verificar que los signos
        y coeficientes coincidan con el polinomio original.
        </li>
    </ol>

    <h3>Casos de Factorización I que debemos recordar</h3>
    <ul>
        <li>Factor común.</li>
        <li>Factor común por agrupación de términos.</li>
        <li>Diferencia de cuadrados.</li>
        <li>Trinomio cuadrado perfecto.</li>
    </ul>

    <h2>Conclusión</h2>
    <p>
        Para factorizar de manera ordenada, el paso indispensable es analizar la estructura
        del ejercicio antes de comenzar las operaciones. Saber contar los términos, revisar los
        exponentes y comprobar siempre mediante el producto distributivo nos ayuda a asegurar
        que el resultado sea exacto y a afianzar los conceptos vistos en clase.
    </p>

</section>`;
