<template>
    <NuxtLink class="nuxt-link" to="#" >
        <div class="poster">
            <img :src="image" alt="image">
            <div class="info">
                <p class="category">
                    {{ category }}
                </p>
                <span class="title">
                    {{ title }}
                </span>
            </div>
        </div>
    </NuxtLink>
</template>
  
<script>
export default {
    props: {
        image: {
            type: String,
            default: "/fashion1.jpg",
        },
        category: {
            type: String,
            default: "Fashion",
        },
        title: {
            type: String,
            default: "The best smart glasses to buy now, according to experts asdasdasda",
        }
    }
}
</script>

<style scoped>
.nuxt-link{
    text-decoration: none;
    color: black;
}
.poster {
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
  
    width: 345px;
    /* Điều chỉnh kích thước của mỗi post tag */
    height: 127px;

    border-top: none;
    /* Viền phía trên */
    border-left: none;
    /* Loại bỏ viền phía trái */
    border-right: none;
    /* Loại bỏ viền phía phải */
    border-top: 1px solid #efecec;
    /* Loại bỏ viền phía dưới */


}

.poster>img {

    max-width: 150px;
    /* Kích thước của ảnh */
    height: 100px;
    align-self: flex-start;
  
}

.info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 5px;
}

.category {
    margin: 0;

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
    margin: 0;
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
</style>
