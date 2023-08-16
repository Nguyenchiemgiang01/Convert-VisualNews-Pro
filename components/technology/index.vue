<template>
    <div class="technology">
        <div class="head">
            <div class="container">
                <div class="row  tab-business align-items-center">
                    <div class="col ">
                        <NuxtLink to="#">
                            <h2 class="bus link">TECHNOLOGY</h2>
                        </NuxtLink>

                    </div>
                    <div class="col ">
                        <NuxtLink to="#">
                            <h2 class="sub-bus link">SUB CAT 1</h2>
                        </NuxtLink>
                    </div>
                    <div class="col ">
                        <NuxtLink to="#">
                            <h2 class="sub-bus link">SUB CAT 2</h2>
                        </NuxtLink>
                    </div>
                    <div class="col ">
                        <NuxtLink to="#">
                            <h2 class="sub-bus link">SUB CAT 3</h2>
                        </NuxtLink>
                    </div>
                    <div class="col ">
                        <NuxtLink to="#">
                            <h2 class="sub-bus link">SUB CAT 4</h2>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-content">
            <Maincontent />
            <div class="list-post">
                <ul class="post-tag">
                    <li class="post" v-for="post in posts" :key="post.id">
                        <PostCatagory :image="post.image" :category="post.category" :title="post.title" />
                    </li>
                </ul>

            </div>

        </div>


    </div>
</template>

<script>
import Maincontent from "./Maincontent.vue";
import PostCatagory from "../post/PostCatagory.vue"

export default {
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'Your iPhone and Other Apple Products Are About to Get Easier to Use',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/iphone-blue_7RJZFHBGPT-768x512.jpg',
                    category: 'TECHNOLOGY'
                },
                {
                    id: 2,
                    title: 'iPhone 15: All the Major Rumors on Apple’s Next iPhone',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/browsing-smartphone_48PPXWVY5M-768x512.jpg',
                    category: 'TECHNOLOGY'
                },
                {
                    id: 3,
                    title: 'Apple MacBook Air 15-Inch Review: The Best Portable Big Display Choice',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/mac-laptop_QUQXLZK1WL-768x512.jpg',
                    category: 'TECHNOLOGY'
                },
            ]
        };
    },
    components: { Maincontent, PostCatagory }
}
</script>

<style scoped>
@media (max-width: 760px) {
    .main-content {
        margin-top: 20px;
    
    }

    .head {
        margin-right: 40px;
        border-bottom: 1px solid #efeaea;
    }

    .tab-business {

        width: 440px;
        height: 41px;
    }

    .tab-business {
        font-size: 14px;
        text-decoration: none;
        /* Loại bỏ gạch chân mặc định */
        position: relative;
        border-bottom: 2px solid #ffffff;
        /* Tạo đoạn gạch dưới ngắn */
        padding-bottom: 5px;

    }

    .tab-business::before {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 25px;
        height: 4px;
        background-color: #3780f5;
    }


    .tab-business>.col {

        padding: 0px;
    }

    .bus {
        font-size: 16px;
        margin-right: 10px;
        font-weight: bold;
        color: black;
    }

    .sub-bus {
        display: none;
    }
    .list-post{
        margin-top: 30px;
    }

}

@media (min-width: 1200px) {


    .head {
        margin-right: 40px;
        border-bottom: 1px solid #efeaea;
    }

    .tab-business {

        width: 440px;
        height: 41px;
    }

    .tab-business {
        font-size: 14px;
        text-decoration: none;
        /* Loại bỏ gạch chân mặc định */
        position: relative;
        border-bottom: 2px solid #ffffff;
        /* Tạo đoạn gạch dưới ngắn */
        padding-bottom: 5px;

    }

    .tab-business::before {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 25px;
        height: 4px;
        background-color: #3780f5;
    }


    .tab-business>.col {

        padding: 0px;
    }

    .bus {
        font-size: 16px;
        margin-right: 10px;
        font-weight: bold;
        color: black;
    }

    .sub-bus {

        font-size: 13px;
        font-weight: bold;
        color: #b6b1b1;
    }

    .link :hover {
        text-decoration: none;
        color: black;
    }

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
        height: 380px;
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

        width: 345px;
        /* Điều chỉnh kích thước của mỗi post tag */
        height: 127px;
    }


}</style>