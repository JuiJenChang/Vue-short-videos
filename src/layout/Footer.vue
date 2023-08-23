<template>
  <div class="footer">
    <Tabbar
      v-model="active"
      route
      fixed
      active-color="#fff"
      inactive-color="#707070"
    >
      <TabbarItem :to="{ path: '/' }">
        <span>Home</span>
      </TabbarItem>

      <TabbarItem :to="{ path: '/discover' }">
        <span>Discover</span>
      </TabbarItem>
    </Tabbar>
  </div>
</template>
<script setup>
import { Tabbar, TabbarItem } from "vant";
import { onMounted, ref } from "vue";

const active = ref(0);

onMounted(() => {
  window.addEventListener("resize", function () {
    const toolbarHeight = window.outerHeight - window.innerHeight;
    const footer = document.querySelector(".footer");
    footer.style.marginBottom = toolbarHeight + "px";
  });
});
</script>

<style scoped>
.footer {
  width: 100%;
  z-index: 99;
  position: fixed;
  bottom: 0;
}
:deep(.van-tabbar) {
  height: 78px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
