<template>
    <div class="calculator">
        <div class="header">Calculator</div>
        <div class="operation">{{ operation }}</div>
        <div class="result">{{ result }}</div>

        <buttons-panel></buttons-panel>
    </div>
</template>

<script>
    import ButtonsPanel from './ButtonsPanel.vue';

    module.exports = {
        data () {
            return {
                name: 'Simple Calculator',
                operation: 0,
                result: 0,
            };
        },
        methods: {
        },
        components: {
            'buttons-panel': ButtonsPanel
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
</style>
