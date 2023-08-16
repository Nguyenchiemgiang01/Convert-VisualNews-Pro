<template>
    <div class="advertisting">
        <div class="adver" style="margin-top: 10px;">
            <strong>ADVERTISTING</strong>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-12 list-post">
                    <div class="post" v-for="post in posts" :key="post.id">
                        <img :src="post.image" alt="Post Image" class="post-image">
                        <h2 class="post-title">{{ post.title }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
@media (max-width:760px) {
    .advertisting{
        margin-top: 40px;
    }
    .container{
        padding: 0px 0px ;
    }
    
.adver>strong{
    font-size: 14px;
    font-weight: bolder;
   
}
.adver {
   
    font-size: 14px;
    text-decoration: none; /* Loại bỏ gạch chân mặc định */
    position: relative;
    border-bottom: 2px solid #e7eaec; /* Tạo đoạn gạch dưới ngắn */
    padding-bottom: 5px;
   
}
.adver>strong::before {
 content: ""; 
  position: absolute;
  bottom: -2px; 
  left: 0;
  width: 25px;
  height: 4px;
  background-color: #3780f5; 
}

.post {
    border-bottom: none;
    /* Viền phía trên */
    border-left: none;
    /* Loại bỏ viền phía trái */
    border-right: none;
    /* Loại bỏ viền phía phải */
    border-top: 1px solid #efecec;
    /* Loại bỏ viền phía dưới */
    padding: 10px 0;
    /* Thêm padding phía trên và phía dưới */
    background-color: #ffffff;
   
    margin-bottom: 20px;
}

.post-image {
    width: 100%;
    height: 109px;
    margin-bottom: 10px;
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
@media (min-width: 1200px) {
    
.advertisting {
    padding-left: 0px;
    max-width: 305px;
    margin-top: 40px;
   
    
}
.adver>strong{
    font-size: 14px;
    font-weight: bolder;
   
}
.adver {
   
    font-size: 14px;
    text-decoration: none; /* Loại bỏ gạch chân mặc định */
    position: relative;
    border-bottom: 2px solid #e7eaec; /* Tạo đoạn gạch dưới ngắn */
    padding-bottom: 5px;
   
}
.adver>strong::before {
 content: ""; 
  position: absolute;
  bottom: -2px; 
  left: 0;
  width: 25px;
  height: 4px;
  background-color: #3780f5; 
}



.list-post {
    padding: 0px;
}

.post {
    border-bottom: none;
    /* Viền phía trên */
    border-left: none;
    /* Loại bỏ viền phía trái */
    border-right: none;
    /* Loại bỏ viền phía phải */
    border-top: 1px solid #efecec;
    /* Loại bỏ viền phía dưới */
    padding: 10px 0;
    /* Thêm padding phía trên và phía dưới */
    background-color: #ffffff;
   
    margin-bottom: 20px;
}

.post-image {
    width: 300px;
    height: 109px;
    margin-bottom: 10px;
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
/* Các phần CSS khác */
</style>
  
  

<script>

export default {
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'Reddit communities go private to protest pricing plan for apps',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/social.jpg',
                },
                {
                    id: 2,
                    title: '9 Ways to Engage Your Customers With Instagram Highlights',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/ins.jpg',
                },
                {
                    id: 3,
                    title: 'The 10-Step Guide to Creating a Profitable AdWords Campaign',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/google.jpg',
                },
                {
                    id: 4,
                    title: '',
                    image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/themes/visualnews-pro/assets/images/300x250.png',

                },
            ]
        };
    },
}

</script>