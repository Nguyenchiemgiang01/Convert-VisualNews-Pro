<template>
    <div class=" container  " >
        <div  class="service row head-tab g-3">
            <div class="col tab">
                <h6 class="title"> MARKETING</h6>
                <div class="postcart">
                    <Typetag
                        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/apple-768x513.jpg"
                        title="The 6 biggest iOS 17 features that Apple stole from Android Digital Trends" />
                    </div>
            </div>
            <div class="col tab">
                <h6 class="title">WEB DESIGN</h6>
                <div class="postcart">
                    <Typetag
                        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/laptop-work_8Q2MXCDVMY-768x512.jpg"
                        title="I’ve Been Using Google’s New AI Search. Here’s What I’ve Learned" />
                </div>
            </div>
            <div class="col tab">
                <h6 class="title">SEO</h6>
                <div class="postcart">
                    <Typetag
                        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-768x512.jpg"
                        title="TikTok’s latest trending beauty filter returns users to their younger selves" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Typetag from "../typetag/index.vue"
export default {
    components: { Typetag }
}
</script>

<style scoped>
@media (max-width:760px) {
    .service{
        flex-direction: column;
        gap:40px;
    }
    .tab{
        margin-top: 30px;
        padding: 0px 0px;
    }
      
.tab>h6 {
    padding: 0px;
    border-bottom: 2px solid #eaeff3;
    /* Tạo đoạn gạch dưới ngắn */
    padding-bottom: 5px;

    margin-left: 0px;


}
.tab>h6 {
    font-size: 14px;
    text-decoration: none; /* Loại bỏ gạch chân mặc định */
    position: relative;
 
 
}
.tab>h6::before {
 content: ""; 
  position: absolute;
  bottom: -2px; 
  left: 0;
  width: 25px;
  height: 4px;
  background-color: #3780f5; 
}

.title {
    width: 392px;
    font-weight: bolder;
    margin-bottom: 20px;
}

    
}
@media (min-width: 1200px) {
    .container{
        margin: 0px 139.60px;
        padding: 0px;
        max-width: 1240px;
        margin-top: 40px;
    }
    .service{
        flex-direction: row;
        gap:40px;
    }
    
.tab>h6 {
    padding: 0px;
    border-bottom: 2px solid #eaeff3;
    /* Tạo đoạn gạch dưới ngắn */
    padding-bottom: 5px;

    margin-left: 0px;


}
.tab>h6 {
    font-size: 14px;
    text-decoration: none; /* Loại bỏ gạch chân mặc định */
    position: relative;
 
 
}
.tab>h6::before {
 content: ""; 
  position: absolute;
  bottom: -2px; 
  left: 0;
  width: 25px;
  height: 4px;
  background-color: #3780f5; 
}

.postcart{
    width:392px;
}

.title {
    width: 392px;
    font-weight: bolder;
    margin-bottom: 20px;
}




.col.tab {
    max-width: 392px;
    flex: 1;
    /* Để các cột con trong flex container chiếm đều chiều rộng và không bị đè lên nhau */
    padding: 0 10px;
    /* Khoảng cách giữa các cột */
    box-sizing: border-box;
    /* Đảm bảo padding không làm tăng kích thước thực tế của cột */
}

}
</style>
