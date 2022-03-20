<template>
    <section class="toy-filter">
        <input type="text" placeholder="Search by name" @input="filter" v-model="filterBy.name">
        <label>
            <input type="radio" @change="filter" v-model="filterBy.inStock" value="">Out of stock
        </label>
        <label>
            <input type="radio" @change="filter" v-model="filterBy.inStock" value="true">In stock
        </label>
    </section>
</template>

<script>
export default {
    data(){
        return {
            filterBy: {
                inStock: null,
                name: ''
            }
        }
    },
    methods: {
        filter(){            
            this.$emit('filterBy', {...this.filterBy})
        }
    }
}
</script>