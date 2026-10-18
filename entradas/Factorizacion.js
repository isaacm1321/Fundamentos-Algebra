
contenidoEntrada = `
<section>
    <h2>Factorización I</h2>
    <p>Factorizar consiste en transformar una suma o resta algebraica en una multiplicación de factores. Para hacerlo, podemos reconocer patrones que nos ayudan a simplificar expresiones.</p>

    <h3>1. Factor común</h3>
    <p><strong>¿Cómo reconocerlo?</strong> Busca un número, una variable o una combinación de ambos que aparezca en todos los términos.</p>
    <p><strong>Procedimiento:</strong> Encuentra lo que todos los términos tienen en común, colócalo fuera de un paréntesis y divide cada término entre ese factor para escribir lo que queda dentro.</p>

    <h4>Ejemplo resuelto</h4>
    <p>Factorizar: <strong>6x<sup>2</sup> + 9x</strong></p>
    <ul>
        <li>El factor común de 6x² y 9x es 3x.</li>
        <li>Dividimos cada término entre 3x: 6x² ÷ 3x = 2x y 9x ÷ 3x = 3.</li>
        <li>Resultado: <strong>3x(2x + 3)</strong>.</li>
    </ul>

    <p><strong>Comprobación multiplicando de regreso:</strong></p>
    <p>3x(2x + 3) = 3x(2x) + 3x(3)</p>
    <p>= 6x² + 9x</p>
    <p>Obtenemos la expresión original, así que la factorización es correcta.</p>

    <h3>2. Trinomio cuadrado perfecto</h3>
    <p><strong>¿Cómo reconocerlo?</strong> Tiene tres términos: el primero y el tercero son cuadrados perfectos, y el término central es el doble del producto de sus raíces cuadradas.</p>
    <p><strong>Procedimiento:</strong> Saca la raíz cuadrada del primer y del tercer término. Después verifica que el término central sea el doble de esas raíces multiplicadas. Si coincide, escribe el binomio formado por las raíces, elevado al cuadrado. El signo del término central determina el signo del binomio.</p>

    <h4>Ejemplo resuelto</h4>
    <p>Factorizar: <strong>4x<sup>2</sup> - 12x + 9</strong></p>
    <ul>
        <li>La raíz de 4x² es 2x.</li>
        <li>La raíz de 9 es 3.</li>
        <li>El doble del producto es 2(2x)(3) = 12x. Como el término central es negativo, usamos el signo menos.</li>
        <li>Resultado: <strong>(2x - 3)<sup>2</sup></strong>.</li>
    </ul>

    <p><strong>Comprobación multiplicando de regreso:</strong></p>
    <p>(2x - 3)(2x - 3) = 4x² - 6x - 6x + 9</p>
    <p>= 4x² - 12x + 9</p>
    <p>Obtenemos el trinomio original, por lo que la factorización es correcta.</p>

    <h3>3. Diferencia de cuadrados</h3>
    <p><strong>¿Cómo reconocerla?</strong> Tiene dos términos separados por una resta y ambos son cuadrados perfectos. No debe confundirse con una suma de cuadrados, porque esta regla no se aplica de la misma manera a los números reales.</p>
    <p><strong>Procedimiento:</strong> Calcula la raíz cuadrada de cada término. Escribe dos paréntesis: uno con la resta de las raíces y otro con su suma. El resultado es el producto de dos binomios conjugados.</p>

    <h4>Ejemplo resuelto</h4>
    <p>Factorizar: <strong>25y<sup>2</sup> - 49</strong></p>
    <ul>
        <li>La raíz de 25y² es 5y.</li>
        <li>La raíz de 49 es 7.</li>
        <li>Colocamos las raíces en dos binomios, uno con resta y otro con suma.</li>
        <li>Resultado: <strong>(5y - 7)(5y + 7)</strong>.</li>
    </ul>

    <p><strong>Comprobación multiplicando de regreso:</strong></p>
    <p>(5y - 7)(5y + 7) = 25y² + 35y - 35y - 49</p>
    <p>= 25y² - 49</p>
    <p>Los términos centrales se cancelan y recuperamos la expresión original.</p>

    <h3>Ida y regreso</h3>
    <p>La factorización es el proceso inverso de desarrollar ciertos productos notables. En lugar de multiplicar para obtener una expresión algebraica, reconocemos la expresión y recuperamos los factores que la producen.</p>
    <ul>
        <li><strong>Factor común:</strong> es el inverso de la propiedad distributiva: a(b + c) = ab + ac.</li>
        <li><strong>Trinomio cuadrado perfecto:</strong> es el inverso del cuadrado de un binomio: (a + b)² = a² + 2ab + b², o (a - b)² = a² - 2ab + b².</li>
        <li><strong>Diferencia de cuadrados:</strong> es el inverso del producto de binomios conjugados: (a - b)(a + b) = a² - b².</li>
    </ul>
    <p>Para comprobar cualquier factorización, basta con multiplicar los factores obtenidos y verificar que el resultado sea exactamente la expresión original.</p>
</section>`;
