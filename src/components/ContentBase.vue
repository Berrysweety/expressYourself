<!--
 * @Author: ycy
 * @Date: 2023-09-14 14:57:15
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-14 15:58:47
-->
<template>
     <div class="home">
        <div class="container">
            <div class="card">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <!-- 将子元素的内容渲染进来 -->
                <slot></slot>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'ContentBase'
}
</script>

<style  scoped>
.container{
    margin-top: 20px;
}
</style>
