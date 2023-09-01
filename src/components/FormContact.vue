<script setup>
import { ref } from 'vue';

const formData = ref({
    name: '',
    email: '',
    message: '',
});

const submitForm = () => {
    console.log(formData.value);
    formData.value = {
        name: '',
        email: '',
        message: '',
    };
};
</script>

<template>
    <div id="contact">
        <div class="contact--text">
            <h1>Contact</h1>
            <p>Want a website for your brand and business ? <br>I design what you desire...</p>
            <img class="img" src="@/assets/send.gif" alt="Image Animée">
        </div>
        <form @submit.prevent="submitForm">
            <div class="field">
                <label for="name">Name</label>
                <input name="name" type="text" id="name" v-model="formData.name" required>
            </div>
            <div class="field">
                <label for="email">Email</label>
                <input name="email" type="email" id="email" v-model="formData.email" required>
            </div>
            <div class="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" v-model="formData.message" required></textarea>
            </div>
            <button class="button" type="submit">Submit</button>
        </form>
    </div>
</template>

<style scoped>
#contact {
    background: #6a9d89;
    margin-top: 3rem;
    margin-left: -2rem;
    margin-right: -2rem;
    padding: 2rem;
}
#contact h1 {
    text-align: center;
    color: #fff;
}

#contact p {
    display: none;
}

.img {
    width: 50%;
    display: block;
    margin: auto;
}

form {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

form .field {
display: flex;
flex-direction: column;
margin-bottom: 7px;
}

form .field label {
    color: #fff;
}

.field input {
    height: 2rem;
    background-color: #bfbfc6;
    border: none;
}

.field textarea {
    height: 5rem;
    background-color: #bfbfc6;
}
.button {
    width: 100%;
    height: 2rem;
    margin-top: 1rem;
    background-color: #fff;
    border: none;
    text-align: center;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;
}
.button:hover {
    color: #eb9ec4;
}
@media screen and (min-width: 780px) { 
#contact {
    display: flex;
}
#contact h1 {
    text-align: left;
}
#contact p {
    display: block;
    margin-top: 1rem;
    color: #fff;
}
.img {
    margin-left:0;
    margin-top: 1rem;
}
form {
    padding-left: 1rem;
    padding-right: 1rem;
}
}

</style>