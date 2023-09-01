<script setup></script>

<template>
  <div class="counter">
    <h1>
      <slot name="title"></slot>
    </h1>
    <p>
      <slot name="content"></slot>
    </p>
  </div>
</template>

<style scoped>
.counter {
  width: 80px;
}
.counter h1,
.counter p {
  text-align: center;
}

.counter p {
  color: #696969;
  font-size: 8px;
}
</style>
