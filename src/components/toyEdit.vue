<template>
    <section class="toy-edit" v-if="toyToEdit">
        <h1>Edit</h1>
        <form @submit.prevent="save">
            <input type="text" v-model="toyToEdit.name">
            <input type="number" v-model="toyToEdit.price">
            <input type="checkbox" v-model="toyToEdit.isStock">
            <button type="submit">Save</button>
        </form>
    </section>
</template>

<script>
import { toyService } from "../services/toyService.js"


export default {
    data(){
        return {
            toyToEdit: null,
        }
    },
    created() {
        this.loadToy()
    },
    computed:{
        toyId() {
            return this.$route.params.toyId;
        }
    },
    methods: {
        loadToy(){            
            toyService.getById(this.toyId).then(toy => {
                this.toyToEdit = {...toy};
            })
        },
        save() {
            this.$store.dispatch({type: "save", toy: {...this.toyToEdit} });
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