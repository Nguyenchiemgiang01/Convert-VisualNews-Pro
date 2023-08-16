<template>
    <div class="business">
        <div class="head">
            <div class="container" style="margin: 0px;margin-top: 50px">
                <div class="row  tab-business align-items-center">
                    <div class="col ">
                        <NuxtLink to="#">
                            <h2 class="bus link">TRAVEL</h2>
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
        <div class="posts">
            <div class="container" style="padding: 0px; max-width: 1240px;">
                <div class="row" style="gap:0px">
                    <div class="col-md-3  custom-col" v-for="post in posts" :key="post.id">
                        <Typepost class="type-post" :image="post.image" :category="post.category" :title="post.title" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Typepost from "../typepost/index.vue";
export default {
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'World’s Best 25 Airlines for 2023 Revealed by Airline Ratings',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/airplane-travel_J5AQI42431-768x513.jpg',
                    category: 'TRAVEL'
                },
                {
                    id: 2,
                    title: 'The Italian beaches putting a daily cap on visitors this summer',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/beautiful-ocean_XLSPFYQGAK-768x512.jpg',
                    category: 'TRAVEL'
                },
                {
                    id: 3,
                    title: 'Venice authorities discover why canal turned fluorescent green',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/water-canal_HZ0FDEESSC-600x400.jpg',
                    category: 'TRAVEL'
                },
                {
                    id: 4,
                    title: 'Manhattanhenge: Where to see New York City’s special sunset show',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/sunrise-sunset_XSTO5645BM-768x512.jpg',
                    category: 'TRAVEL'
                },

            ]
        };
    },
    components: { Typepost }
}
</script>

<style scoped>
@media (max-width:760px) {

    .head {
        border-bottom: 1px solid #efeaea;

    }

    .type-post {
        margin-bottom: 0px;
        background-color: #a6cde8;
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

    .post {
        margin-top: 25px;
        margin-bottom: 20px;
        background-color: #ffffff;
    }

}

@media(min-width:1200px) {

    .type-post {
        margin-bottom: 0px;
        max-width: 293.125px;
        background-color: #eef4f8;
    }

    .head {
        border-bottom: 1px solid #efeaea;
        margin: 0px 139.60px;

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



    .custom-col {

        /* Ghi đè padding mặc định của Bootstrap */
        padding-right: 0px;
        width: 392.125px;
    }

    .post>img {
        width: 293.125px;
        height: 195.788px;
    }

    .post-category p {
        margin-top: 10px;

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

    .post-title {

        font-size: 1em;
        /* Kích thước nhỏ hơn */
        font-weight: bold;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        /* Số dòng tối đa */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .container {
        margin: 0px 139.60px;
    }
}
</style>