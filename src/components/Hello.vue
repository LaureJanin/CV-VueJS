<script setup>
    import Button from './Button.vue'
</script>

<template>
    <div id="hello">
        <div class="presentation">
            <h1>Hello, <br>I am <span class="name">Laure Janin</span>.</h1>
            <p class="work">Web Designer/Developper</p>
            <p class="content">I specialize in UI Design, Responsive Web Design and Web development</p>
            <div class="buttons">
                <Button background="ffffff" color="000000">Contact</Button>
                <Button background="6a9d89" color="ffffff">Projects</Button>
            </div>
        </div>
        <img src="../assets/illustration.png" alt="illustration" class="img" />
    </div>
</template>

<style scoped>
#hello {
    background: #f0f0f3;
    padding: 15px;
    margin-top: 15px;
}
#hello, h1, p {
    text-align: center;
}
#hello .name {
    color: #6a9d89;
}
#hello .work {
    color: #696969;
    font-size: 14px;
    font-weight: 600;
}
#hello .content {
    color: #000;
    font-size: 12px;
    margin-bottom: 12px;
}
#hello .img {
    width: 80%;
}

@media screen and (min-width: 780px) {
    #hello {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px;
    }
    #hello, h1, p {
    text-align: left;
    }
    #hello .img {
     width: 50%;   
    }
    #hello .presentation .buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
    }
    #hello .presentation .content {
        display: none;
    }
}   
</style>