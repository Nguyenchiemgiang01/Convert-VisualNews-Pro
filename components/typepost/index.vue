<template>

        <div class="post">
            <img :src="image" alt="Post Image">
            <div class="info">
                <div class="post-category">
                    <p>{{ category }}</p>
                </div>
                <h2 class="post-title">{{ title }}</h2>
            </div>
        </div>

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
            default: "TRAVEL"

        },

        title: {
            type: String,
            default: "The best smart glasses to buy now, according to experts asdasdasda",
        }
    }
}
</script>
<style scoped>
@media (max-width:760px) {
    .post>img {
    width: 100%;
    height: 190px;
}
.post-category p {
    margin:10px 20px;

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
    margin:10px 20px;
    padding-right: 10px;
    font-size: 18px;
    /* Kích thước nhỏ hơn */
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    /* Số dòng tối đa */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
}
@media (min-width: 1200px) {
    
.post {
    margin-top: 25px;
    margin-bottom: 20px;
    background-color: #abd0e4;
    height: 328.19px;
}

.post>img {
    width: 293px;
    height: 190px;
}

.post-category p {
    margin:10px 20px;

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
    margin:10px 20px;
    padding-right: 10px;
    font-size: 18px;
    /* Kích thước nhỏ hơn */
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    /* Số dòng tối đa */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
}


</style>