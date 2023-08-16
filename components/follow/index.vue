<template>
    <div class="follow-right-page">
        <Follow />
        <Advertisting/>
        <Fashion/>
    </div>
     
     
</template>

<script>
    import Follow from "./Follow.vue"
    import Advertisting from "./Advertisting.vue"
    import Fashion from "./Fashion.vue"

    export default{
        components:{Follow,Advertisting,Fashion}
    }
</script>
<style>
</style>