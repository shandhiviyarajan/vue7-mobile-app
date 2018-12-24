<template>
    <f7-page @:init="loaded">
        <div class="page_splash">
            <div>
                <img src="../svg/logo.svg" alt="">
                <p>
                    <strong>
                        enjoy your moment !
                    </strong>
                </p>
            </div>
        </div>
    </f7-page>
</template>

<script>
    export default {

        data() {
            return {}
        },
        methods: {
            loaded() {
                alert(0);
            }
        }

    }
</script>