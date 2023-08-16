<template>
    <div class="main-content">
       
        <div class="list-post">
            <ul class="post-tag">
                <li class="post" v-for="post in posts" :key="post.id">
                    <NuxtLink class="nuxt-link" to="#">
                        <div class="poster">
                            <img :src="post.image" alt="image">
                            <div class="info">
                                <p class="category" >
                                    {{ post.category }}
                                </p>
                                <span class="title">
                                    {{ post.title }}
                                </span>
                            </div>
                        </div>
                    </NuxtLink>
                </li>
            </ul>

        </div>

    </div>
</template>
<script>
import PostCategory from "../../components/post/PostCatagory.vue"

export default {
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'TikTok’s latest trending beauty filter returns users to their younger selves',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-768x512.jpg',
                    category: ''
                },
                {
                    id: 2,
                    title: 'The best smart glasses to buy now, according to experts',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/glashes-768x512.jpg',
                    category: ''
                },
                {
                    id: 3,
                    title: 'The best wrinkle-free travel clothes to pack for your summer vacation',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/shirt-768x512.jpg',
                    category: ''
                },
            ]
        };
    },
    components: { PostCategory }
}
</script>

<style scoped>
.main-content {
    /* Các thuộc tính CSS cho main-post */
    display: flex;
    margin-top: 25px;

    margin-right: 4%;
}


.list-post {
    flex: 1;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    width: 345px;

    /* Khoảng cách giữa các post tag */
}

.post-tag {
    list-style: none;
    padding: 0;
    margin: 0;
}

.post {
    display: flex;
    flex-direction: row;
    /* Hiển thị các phần tử trong post theo chiều ngang */
    width: 286px;

}

.postcategory {
    color: #ffffff;
}

.nuxt-link{
    text-decoration: none;
    color: black;
}
.poster {
    display: flex;
    flex-direction: row;
    /* Hiển thị các phần tử trong post theo chiều ngang */
    color: #ffffff;

    width: 345px;
    margin-bottom:20px ;

}

.poster>img {

    max-width: 90px;
    /* Kích thước của ảnh */
    height: 60px;
    align-self: flex-start;
    /* Đẩy ảnh lên trên bên trái */
}

.info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 5px;
}

.category {
    margin: 0;
    margin-right: 10px;
    text-transform: uppercase;
    color: #cdc6c6;
    /* Màu nhạt */
    font-size: 0.8em;
    /* Kích thước nhỏ hơn */
    align-self: flex-start;
    /* Đẩy danh mục lên trên bên trái */
    margin-bottom: 5px;
    /* Khoảng cách giữa danh mục và tiêu đề */
}

.title {
    margin-left: 10px;
    width:186px;
    margin: 0;
    font-size: 13px;
    /* Kích thước nhỏ hơn */
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    /* Số dòng tối đa */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>