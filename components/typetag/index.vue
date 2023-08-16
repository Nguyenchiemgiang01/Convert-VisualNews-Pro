<template>
    <div class="marketing">
        <NuxtLink class="nuxt-link" to="#" >
        <div class="poster">
            <img :src="image" alt="image">
            <div class="info">
                <span class="title">
                    {{ title }}
                </span>
            </div>
        </div>
    </NuxtLink>
    <ul class="title-post">
                <li>
                    <h2  class=""><a href="#" target="_self">SEO Copywriting: How to Write Content For People and Optimize For Google</a></h2>
                </li>
                <li class="">
                <h2  class=""><a href="" target="_self">9 Ways to Engage Your Customers With Instagram Highlights</a></h2>
                </li>
                <li class="">
                <h2  class=""><a href="" target="_self">A Starter Guide to Google Ads Manager Accounts</a></h2>
                </li>
                <li class="">
                <h2  class=""><a href="" target="_self">25 Marketing Books You Should Be Reading</a></h2>
                </li>
     </ul>
    </div>
    
</template>
  
<script>
export default {
    props: {
        image: {
            type: String,
            default: "/fashion1.jpg",
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
    .poster>img {

    height: 261px;
    margin-bottom: 10px;
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



.title-post{
padding-left:0px;
margin-top: 20px;
 list-style: none;
 text-decoration: none;
 color: black;


}
.title-post>li>h2{

margin-top: 10px;
margin-bottom: 10px;


}
.title-post>li>h2>a{
text-decoration: none;
font-size: medium;
font-style: normal;
 color: black;

}
.title-post>li>h2>a:hover{

 color: rgb(86, 145, 205);
}
.title-post>li>h2{
font-weight:medium ;

}
.title-post>li{

    border-top: 1px solid #efecec;
    /* Viền phía trên */
    border-left: none;
    /* Loại bỏ viền phía trái */
    border-right: none;
    /* Loại bỏ viền phía phải */
    border-bottom: none;
    /* Loại bỏ viền phía dưới */


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
.container{
    margin: 0px 0px;
}


}
@media (min-width:1200px) {
    
.nuxt-link{
    text-decoration: none;
    color: black;
}
.poster {

    background-color: #ffffff;

margin-bottom: 20px;
}

.poster>img {

    width: 392px;
    height: 261.33px;
    margin-bottom: 10px;
}

.info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 5px;
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


.title-post{
padding-left:0px;
margin-top: 20px;
 list-style: none;
 text-decoration: none;
 color: black;


}
.title-post>li>h2{

margin-top: 10px;
margin-bottom: 10px;


}
.title-post>li>h2>a{
text-decoration: none;
font-size: medium;
font-style: normal;
 color: black;

}
.title-post>li>h2>a:hover{

 color: rgb(86, 145, 205);
}
.title-post>li>h2{
font-weight:medium ;

}
.title-post>li{

    border-top: 1px solid #efecec;
    /* Viền phía trên */
    border-left: none;
    /* Loại bỏ viền phía trái */
    border-right: none;
    /* Loại bỏ viền phía phải */
    border-bottom: none;
    /* Loại bỏ viền phía dưới */


}
}

</style>