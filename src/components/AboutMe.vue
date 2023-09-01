<script setup>
</script>

<template>
    <div id="about">
        <div class="text">
            <div class="separator"></div>
            <h1 class="title">A Bit About Me...</h1>
            <p class="presentation">Hello, My name is Laure Janin. <br>I am a postgraduate student at Wild Code School
                Academy. <br>I’m currently learning UI/UX and web development. <br>Checkout my projects on github.</p>
        </div>
        <img src="../assets/smartphone.png" alt="smartphone" class="img" />
    </div>
</template>

<style scoped>
#about {
    background: #6a9d89;
    margin-top: 1rem;
    margin-left: -2rem;
    margin-right: -2rem;
    padding: 2rem;
}

#about .separator {
    height: 12px;
    background-color: #eb9ec4;
    align-content: center;
    margin-bottom: 1rem;
}

#about .text,
h1,
p {
    text-align: center;
    color: white;
}

#about .img {
    width: 100%;
}

@media screen and (min-width: 780px) {
    #about {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #about .text,
    h1,
    p {
        text-align: left;
    }

    #about .img {
        width: 30%;
    }
}</style>