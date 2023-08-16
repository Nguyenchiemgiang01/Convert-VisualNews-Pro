<template>
    <div class="main content">
        <img class="mainimage" :src="post.image" alt="image content">
        <h2 class="main-title">{{ post.title }}</h2>

    </div>
</template>

<script>
export default {
    data() {
        return {
            post:
            {
                title: 'Toyota claims its future EVs will have a range over 600 miles',
                image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/motivation-hustle_FKT0RM1QHW-600x400.jpg'
            }

        };
    }
}
</script>
<style>
.mainimage {
    width: 500px;
    height: 300px;

}

.main-title {
    color: black;
    font-size: 24px;
    font-weight: bold;
}
</style>