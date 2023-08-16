<template>
    <div class="content head" style="display: contents;">
        <div class="header" style="display: contents;">
            <Topbar />
            <div class="header-last">
            <Sitestart class="site-start"/>
            <Primarynav class="sticky-nav" />
            </div>
           
        </div>
       
    </div>
</template>
<script setup>
import Topbar from "./Topbar.vue"
import Sitestart from "./Sitestart.vue"
import Primarynav from "./Primarynav.vue"

</script>


<style >
@media (max-width:760px) { 

.site-start{
    flex: 1;
}
.header-last{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.icon {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    /* Hiển thị các biểu tượng ngang hàng */
}

.icon li {
    color: #f9f9f9;
    margin-left: 10px;
    /* Khoảng cách giữa biểu tượng và các phần tử khác */
}

/* site start */
.site-start {
    margin-top: 10px;
}

    
}
@media (min-width: 1200px) {
    .header{
        display: contents;
    }
    .header-last{
        display: contents;
    }
    
.sticky-nav {
    position: sticky;
    top: 0;
    z-index: 100; 
    background-color:#ffffff;
    height: 50.8px;
    box-shadow: 0px 5px 10px -5px rgba(62, 60, 60, 0.2); /* Bóng mờ */
    padding-top: 15px;
    
}

.header {
    border-bottom: 2px solid #fbfbfb;

    box-shadow: 0 0 5px rgba(181, 177, 177, 0.5);
    margin-bottom: 5px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Hiển thị biểu tượng Twitter bên phải */
.right-nav {
    display: flex;
    align-items: center;
    margin-left: auto;
    /* Đẩy các biểu tượng về phía bên phải */
}

.icon {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    /* Hiển thị các biểu tượng ngang hàng */
}

.icon li {
    color: #f9f9f9;
    margin-left: 10px;
    /* Khoảng cách giữa biểu tượng và các phần tử khác */
}

/* site start */
.site-start {
    margin-top: 10px;
}

.au-left .author-image {
    float: right;
    /* Đẩy ảnh về bên phải */
    margin-left: 20px;
    /* Tạo khoảng cách giữa ảnh và nội dung */
    border-radius: 50%;
    /* Làm cho ảnh hình tròn */
    overflow: hidden;
    /* Đảm bảo ảnh không bị tràn ra ngoài */
    width: 80px;
    /* Kích thước ảnh */
    height: 80px;
}

.au-right .author-image {
    float: left;
    /* Đẩy ảnh về bên phải */
    margin-right: 20px;
    /* Tạo khoảng cách giữa ảnh và nội dung */
    border-radius: 50%;
    /* Làm cho ảnh hình tròn */
    overflow: hidden;
    /* Đảm bảo ảnh không bị tràn ra ngoài */
    width: 80px;
    /* Kích thước ảnh */
    height: 80px;
}

.author-image {
    float: right;
    /* Đẩy ảnh về bên phải */
    margin-left: 20px;
    /* Tạo khoảng cách giữa ảnh và nội dung */
    border-radius: 50%;
    /* Làm cho ảnh hình tròn */
    overflow: hidden;
    /* Đảm bảo ảnh không bị tràn ra ngoài */
    width: 80px;
    /* Kích thước ảnh */
    height: 80px;
}


.author-content {
    overflow: hidden;
    /* Đảm bảo nội dung không bị tràn ra ngoài */
}

.primary-nav .primary-menu .navbar {
    background: none;
}

.primary-nav .primary-menu .nav-item {

    font-weight: bolder;
    color: #170808;
    font-size: 13px;
}

.nav-item:hover {
    color: #2c182c;
    text-decoration: none;
}
}</style>