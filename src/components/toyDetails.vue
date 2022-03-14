<template>
    <section class="toy-details" v-if="toy">
        <h1>Details</h1>
        {{toy.name}}
        {{toy.price}}
        {{toy.type}}
        {{toy.inStock}}
    </section>
</template>

<script>
import { toyService } from "../services/toyService.js"


export default {
    data(){
        return {
            toy: null,
        }
    },
    created() {
        this.loadToy()
    },
    computed:{
        toyId() {
            return +this.$route.params.toyId;
        }
    },
    methods: {
        loadToy(){            
            toyService.getById(this.toyId).then(toy => {
                this.toy = toy;
            })
        }
    },
    watch:{
        toyId: {
            handler() {
                this.loadToy();
            },
            immediate: true,
        }
    }
}
</script>

<style>

</style>