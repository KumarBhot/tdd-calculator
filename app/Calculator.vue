<template>
    <div class="calculator">
        <div class="header">Header</div>
        <div class="results">Results</div>
        <div class="buttons">Buttons</div>
    </div>
</template>

<script>
    module.exports = {
        data () {
            return {
                name: 'Simple Calculator'
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

.header,
.results,
.buttons {
    padding: 0.5rem;
}

.header {
    background-color: lightslategrey;
    color: white;
    font-weight: bold;
}

.results {
    color: darkolivegreen;
}

.buttons {
    background-color: lightgrey;
}
</style>
