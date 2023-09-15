<!--
 * @Author: ycy
 * @Date: 2023-09-14 16:50:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-14 20:55:03
-->
<template>
     <div class="card">
        <div class="card-body" >
            <div v-for="post in posts.posts" :key="post.id">
                <div class="card single-post">
                    <div class="card-body">
                        {{ post.content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
export default{
    name:"UserProfilePosts",
    props:{
        posts:{
            type:Object,
            required:true
        }
    }
}
</script>

<style scoped>
.single-post{
    margin-bottom:10px
}
</style>
