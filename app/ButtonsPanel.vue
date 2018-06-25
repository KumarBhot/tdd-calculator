<template>
    <div class="buttons">
        <section v-for="section in sections"
            :class="section.class"
            :key="section.class">

            <button v-for="button in section.buttons"
                @click="section.clickHandler"
                :key="button.value">{{ button.label }}
            </button>

        </section>
    </div>
</template>

<script>
    import buttons from './buttons.json';

    module.exports = {
        data () {
            class ButtonSection {
                constructor (className, buttons, clickHandler) {
                    this.class = className;
                    this.buttons = buttons;
                    this.clickHandler = clickHandler;
                }
            }

            function buttonsOfType (type) {
                return buttons.filter(item => item.type === type);
            }

            const buttonSections = [
                new ButtonSection(
                        'memory',
                        buttonsOfType('memory'),
                        this.memoryOp
                    ),
                new ButtonSection(
                        'special',
                        buttonsOfType('special'),
                        this.specialOp
                    ),
                new ButtonSection(
                        'standard',
                        buttonsOfType('operator').concat(buttonsOfType('operand')),
                        this.standardOp
                    )
            ];

            return {
                name: "Buttons Panel",
                sections: buttonSections
            }
        },
        methods: {
            memoryOp () {},
            specialOp () {},
            standardOp () {}
        }
    };
</script>

<style scoped>
    .buttons {
        background-color: lightgrey;
        text-align: center;
    }

    .buttons button {
        width: 24%;
    }

    .buttons .memory button {
        width: 16%;
    }

    .buttons .memory {
        font-size: 0.75%;
    }

    .buttons .special {
        margin: 0.25rem 0;
        padding: 0.25rem 0;
        border: 1px solid white;
        border-left-width: 0;
        border-right-width: 0;
    }

    .buttons .standard button {
        font-weight: bold;
    }
</style>
