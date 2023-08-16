<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3  custom-col" v-for="post in posts" :key="post.id">
        <div class="post">
          <img :src="post.image" alt="Post Image">
          <div class="info">
            <div class="post-category">
              <p>{{ post.category }}</p>
            </div>
            <h2 class="post-title">{{ post.title }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width:1200px) {

  .post {
    margin-top: 25px;
    margin-bottom: 20px;
    background-color: #ffffff;
  }

  .custom-col {
    padding-left: 0;
    /* Ghi đè padding mặc định của Bootstrap */
    padding-right: 10px;
  }

  .post img {
    max-width: 210px;
    height: 140px;
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
    padding-right: 10px;
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

@media (max-width:760px) {
  .post {
    margin-top: 25px;
    margin-bottom: 20px;
    background-color: #ffffff;
  }

  .custom-col {
    padding: 0px 0px;
  }

  .post-category p {
    margin: 0;
    margin-top: 5px;

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
    
    padding-right: 10px;
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
    
<script >
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'The 23 best men’s shorts for the summer, according to style experts',
          image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/man-768x512.jpg',
          category: 'FASHION'
        },
        {
          id: 2,
          title: 'Reddit communities go private to protest pricing plan for apps',
          image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/social.jpg',
          category: 'ADVERTISING'
        },
        {
          id: 3,
          title: 'Adidas vs. Hoka: We put these favorite running shoes to the test',
          image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/adidas.jpg',
          category: 'FASHION'
        },
        {
          id: 4,
          title: 'Georgia man sues Facebook over losing account access and wins',
          image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/facebook.jpg',
          category: 'SOCIAL MEDIA'
        },
      ]
    };
  },
}
</script>