<template>
    <v-app app>
        <client-only>
            <default-toolbar />
        </client-only>
        
        <div class="main">
            <nuxt />
        </div>
    </v-app>
</template>

<style scoped>
.main {
    position: absolute;
    width: 100%;
    height: 95%;
    top: 5%;
}
</style>

<script>
import defaultToolbar from "../components/defaultToolbar.vue";
import SnackBar from "~/components/SnackBar";

export default {
    name: 'ServiceLayout',
    components: {
        defaultToolbar,
        SnackBar
    },
    data() {
        return {

        }
    },
}
</script>
