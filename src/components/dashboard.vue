<template>
    <section class="dashboard" v-if="toys.length > 0">
        <h1>Dashboard</h1>
        <chart :toys="toys"/>
    </section>
</template>

<script>
import chart from "../components/chart.vue";


export default {
    created() {
        this.$store.dispatch({type: "loadToys"})
    },
    computed: {
        toys() {
        return this.$store.getters.getAllToys;
        }
    },
    methods: {
       
    },
    watch: {
        
    },
    components: {
        chart,
    }
}
</script>

<style>
</style>