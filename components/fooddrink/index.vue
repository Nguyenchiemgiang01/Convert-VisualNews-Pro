<template>
    <div class="food-drink">
        <div class="head">
            <div class="container" style="margin: 0px">
                <div class="row  tab-business align-items-center">
                    <div class="col ">
                        <NuxtLink to="#">
                            <h2 style="width: 108.53px;"  class="bus link" >FOOD & DRINK</h2>
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
                        <Typepost class="type-post" 
                            :image="post.image" :category="post.category" :title="post.title" />
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
                    title: 'The German couple who moved to Italy and opened a pizza restaurant',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/pizza-slice_OM0PRGTSEV-768x512.jpg',
                    category: 'FOOD'
                },
                {
                    id: 2,
                    title: 'Tokyo ramen shop bans customers from using their phones while eating',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/noodles-cooking_30DIV2QY3M-600x400.jpg',
                    category: 'FOOD'
                },
                {
                    id: 3,
                    title: 'Best rice dishes: 20 delicious specialties from around the world',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/paella-rice_T3JTA2VN26-768x512.jpg',
                    category: 'FOOD'
                },
                {
                    id: 4,
                    title: 'This savory Mexican dish made with vanilla is a first for Eva Longoria',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/couple-food_20HXQ0Y5YI-768x512.jpg',
                    category: 'FOOD'
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
    margin: 0px 0px;

}


.tab-business {

    width: 440px;
    height: 41px;
}
.tab-business {
    font-size: 14px;
    text-decoration: none; /* Loại bỏ gạch chân mặc định */
    position: relative;
    border-bottom: 2px solid #ffffff; /* Tạo đoạn gạch dưới ngắn */
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
    font-size: 14px;
    margin-right: 10px;
    font-weight: bold;
    color: black;
}

.sub-bus {
display: none;
}

.type-post{
        margin-bottom:0px;

         background-color: #eef4f8;
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
    margin: 0px 0px;
}
.custom-col {

/* Ghi đè padding mặc định của Bootstrap */
padding-right: 0px;
width:100%;
}


}
@media (min-width: 1200px) {
    .food-drink{
        margin-top: 30px;
    }
    .type-post{
        margin-bottom:0px;
        max-width:293.125px;
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
    text-decoration: none; /* Loại bỏ gạch chân mặc định */
    position: relative;
    border-bottom: 2px solid #ffffff; /* Tạo đoạn gạch dưới ngắn */
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
    font-size: 14px;
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