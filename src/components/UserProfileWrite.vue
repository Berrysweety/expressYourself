<template>
    <div class="card edit-field">
       <div class="card-body">
        <!-- <div class="mb-3"> -->
            <label for="edit-post" class="form-label">发 帖</label>
            <textarea v-model="content" class="form-control" id="edit-post" rows="3"></textarea>
            <button @click="post_a_post" type="button" class="btn btn-primary btn-sm">发表</button>
        <!-- </div> -->
       </div>
   </div>
</template>

<script >
import {ref} from 'vue'
export default{
   name:"UserProfileWrite",
   setup(props,context){
        let content=ref('');
        const post_a_post=()=>{
           if(content.value){
               context.emit('post_a_post',content.value)
                console.log(content.value);
                content.value="";
           }else{
            alert('输入为空')
           }
        }
        return {
            content,
            post_a_post
        }
   }
}
</script>

<style scoped>
.edit-field{
    margin-top:20px
}
button{
    margin-top:20px
}
</style>
