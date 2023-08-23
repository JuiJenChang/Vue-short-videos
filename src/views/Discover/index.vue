<template>
  <div class="discover">
    <div class="main">
      <Tabs
        v-model:active="tabActive"
        title-active-color="#fff"
        title-inactive-color="#707070"
      >
        <Tab title="Following">
          <Swipe style="height: 100%" vertical>
            <Swipe-item
              v-for="item in followingListStore.list"
              :key="item.cover"
            >
              <img :src="item.cover" />
            </Swipe-item>
          </Swipe>
        </Tab>
        <Tab title="For you">
          <Swipe style="height: 100%" vertical>
            <Swipe-item v-for="item in forYouListStore.list" :key="item.cover">
              <img :src="item.cover" />
            </Swipe-item>
          </Swipe>
        </Tab>
      </Tabs>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Footer from "../../layout/Footer";
import followingList from "../../store/following";
import forYouList from "../../store/forYou";
import { Tab, Tabs, Swipe, SwipeItem } from "vant";

const followingListStore = followingList();
const forYouListStore = forYouList();

const tabActive = ref(0);

onMounted(() => {
  if (!followingListStore.list.length) {
    followingListStore.getFollowingListAction();
  }
  if (!forYouListStore.list.length) {
    forYouListStore.getForYouListAction();
  }
});
</script>

<style scoped>
.discover {
  height: 100vh;
}
.main {
  height: calc(100% - 78px);
  overflow: hidden;
  background: #000;
}
:deep(.van-tabs__nav) {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 7%;
  z-index: 99;
  width: 100%;
}
:deep(.van-tab) {
  padding-left: 5px;
}
:deep(.van-tab:first-of-type) {
  border-right: 2px solid #707070;
  padding-right: 5px;
  border-left: 0;
  padding-left: 0;
}
:deep(.van-tab__panel) {
  height: calc(100vh - 78px);
}
:deep(.van-swipe__track) {
  height: calc(100vh - 78px);
}
img {
  width: 100%;
  height: 100%;
}
</style>
