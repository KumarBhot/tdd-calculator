<template>
    <div class="calculator">
        <div class="header">Calculator</div>
        <div class="operation">{{ operation }}</div>
        <div class="result">{{ result }}</div>
        <div class="buttons">
            <div class="memory-ops">
                <button value="mc">MC</button>
                <button value="mr">MR</button>
                <button value="m+">M+</button>
                <button value="m-">M-</button>
                <button value="ms">MS</button>
                <button value="m">M<sup>▼</sup></button>
            </div>
            <div class="extra-ops">
                <button value="mod">%</button>
                <button value="sqrt">√</button>
                <button value="sqr">x<sup>2</sup></button>
                <button value="inverse">1/x</button>
            </div>
            <div class="standard-ops">
                <button value="ce">CE</button>
                <button value="c">C</button>
                <button value="erase">←</button>
                <button value="divide">÷</button>

                <button class="operand" value="7">7</button>
                <button class="operand" value="8">8</button>
                <button class="operand" value="9">9</button>
                <button class="operator" value="multiply">x</button>

                <button class="operand" value="4">4</button>
                <button class="operand" value="5">5</button>
                <button class="operand" value="6">6</button>
                <button class="operator" value="subtract">-</button>

                <button class="operand" value="1">1</button>
                <button class="operand" value="2">2</button>
                <button class="operand" value="3">3</button>
                <button class="operator" value="add">+</button>

                <button class="operator" value="sign">±</button>
                <button class="operand" value="0">0</button>
                <button class="operand" value=".">.</button>
                <button class="operator" value="equals">=</button>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data () {
            return {
                name: 'Simple Calculator',
                operation: 0,
                result: 0
            };
        },
        methods: {
        }
    };
</script>

<style scoped>
.calculator {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 1rem;
    max-width: 400px;
    border: 1px solid darkslategrey;
    border-radius: 0.25rem;
}

.calculator sup {
    font-size: 50%;
}

.operation,
.header,
.result,
.buttons {
    padding: 0.5rem;
}

.operation {
    text-align: right;
}

.operation:after {
    content: " =";
}

.header {
    background-color: lightslategrey;
    color: white;
    font-weight: bold;
}

.result {
    text-align: right;
    color: darkolivegreen;
    font-size: 200%;
}

.buttons {
    background-color: lightgrey;
}

.buttons button {
    width: 24%;
}

.memory-ops button {
    width: 16%;
}

.memory-ops {
    font-size: .75%;
}

.extra-ops {
    margin: 0.25rem 0;
    padding: 0.25rem 0;
    border: 1px solid white;
    border-left-width: 0;
    border-right-width: 0;
}

.standard-ops button {
    font-weight: bold;
}
</style>
