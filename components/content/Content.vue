<template>
  <div class="main-content">
    <div class="top-post">
      <div class="list-post">
        <ul class="post-tag">
          <li class="post" v-for="post in posts" :key="post.id">
            <img :src="post.image" alt="Post Image">
            <div class="info">
              <div class="post-category">
                <p>{{ post.category }}</p>
              </div>
              <h2 class="post-title">{{ post.title }}</h2>
            </div>
          </li>
        </ul>

      </div>
      <div class=" main-post">
        <Maincontent />
      </div>
    </div>
    <div class="last-post">
      <Lastcontent />
    </div>
  </div>
</template>

  
<script>
import Maincontent from "./Maincontent.vue";
import Lastcontent from './LastContent.vue';


export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'The best smart glasses to buy now, according to experts',
          image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/glashes.jpg',
          category: 'FASHION'
        },
        {
          id: 2,
          title: 'The best wrinkle-free travel clothes to pack for your summer',
          image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/shirt.jpg',
          category: 'FASHION'
        },
        {
          id: 3,
          title: 'World’s Best 25 Airlines for 2023 Revealed by Airline',
          image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/airplane-travel_J5AQI42431.jpg',
          category: 'TRAVEL'
        },
      ]
    };
  },
  components: { Maincontent, Lastcontent }
}
</script>
<style scoped>
@media (max-width: 760px) {
  .post {
  display: flex;
  flex-direction: row;
  /* Hiển thị các phần tử trong post theo chiều ngang */


  width: 345px;
  /* Điều chỉnh kích thước của mỗi post tag */
  height: 127px;

  border-top: none;
  /* Viền phía trên */
  border-left: none;
  /* Loại bỏ viền phía trái */
  border-right: none;
  /* Loại bỏ viền phía phải */
  border-bottom: 1px solid #efecec;
  /* Loại bỏ viền phía dưới */
  padding: 10px 0;
  /* Thêm padding phía trên và phía dưới */

}
.post img {

max-width: 150px;
/* Kích thước của ảnh */
height: 100px;
align-self: flex-start;
/* Đẩy ảnh lên trên bên trái */
}

.info {
display: flex;
flex-direction: column;
flex-grow: 1;
margin-left: 5px;
}

.post-category p {
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

.post-title {
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

}
@media (min-width: 1200px) {


.top-post {
  display: flex;
  align-items: flex-start;
}


.main-post {
  /* Các thuộc tính CSS cho main-post */
  margin-top: 25px;
  margin-left: 4%;
  margin-right: 4%;
}


.list-post {
  flex: 1;
  margin-top: 20px;
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

  border-top: none;
  /* Viền phía trên */
  border-left: none;
  /* Loại bỏ viền phía trái */
  border-right: none;
  /* Loại bỏ viền phía phải */
  border-bottom: 1px solid #efecec;
  /* Loại bỏ viền phía dưới */
  padding: 10px 0;
  /* Thêm padding phía trên và phía dưới */

}

.post img {

  max-width: 150px;
  /* Kích thước của ảnh */
  height: 100px;
  align-self: flex-start;
  /* Đẩy ảnh lên trên bên trái */
}

.info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 5px;
}

.post-category p {
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

.post-title {
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
}
</style>


