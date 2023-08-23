<template>
  <div class="home">
    <div class="main">
      <Tabs
        v-model:active="tabActive"
        title-active-color="#fff"
        title-inactive-color="#707070"
        @change="changeTabs"
      >
        <Tab title="Following">
          <Swipe style="height: 100%" vertical @change="changeFollowingVideo">
            <Swipe-item
              v-for="item in followingListStore.list"
              :key="item.cover"
            >
              <videoPlay
                ref="followingVideoPlayRef"
                v-bind="options"
                :src="item.play_url"
                :title="item.title"
                :poster="item.cover"
                @play="onPlay"
                @pause="onPause"
                @timeupdate="onTimeupdate"
                @canplay="onCanplay"
              />
            </Swipe-item>
          </Swipe>
        </Tab>
        <Tab title="For you">
          <Swipe style="height: 100%" vertical @change="changeForYouVideo">
            <Swipe-item v-for="item in forYouListStore.list" :key="item.cover">
              <videoPlay
                ref="forYouVideoPlayRef"
                v-bind="options"
                :src="item.play_url"
                :title="item.title"
                :poster="item.cover"
              />
            </Swipe-item>
          </Swipe>
        </Tab>
      </Tabs>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import Footer from "../../layout/Footer";
import followingList from "../../store/following";
import forYouList from "../../store/forYou";
import { Tab, Tabs, Swipe, SwipeItem } from "vant";
import "vue3-video-play/dist/style.css";
import { videoPlay } from "vue3-video-play";

const followingListStore = followingList();
const forYouListStore = forYouList();

onMounted(() => {
  if (!followingListStore.list.length) {
    followingListStore.getFollowingListAction();
  }
  if (!forYouListStore.list.length) {
    forYouListStore.getForYouListAction();
  }
});

const tabActive = ref(0);
const options = reactive({
  width: "100%", //播放器寬度
  height: "100%", //播放器高度
  color: "#409eff", //主題色
  muted: false, //靜音
  webFullScreen: false,
  playsinline: true,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自動播放
  loop: false, //循環播放
  mirror: false, //鏡像畫面
  ligthOff: false, //關燈模式
  volume: 0.3, //默認音量
  control: true, //是否顯示控制
  type: "m3u8", //影片格式
  preload: "none",
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
  ], //顯示按鈕,
});

const onCanplay = (event) => {
  console.log("可以播放", event);
};
const onPlay = (event) => {
  console.log("播放", event);
};
const onPause = (event) => {
  console.log("暫停", event);
};
const onTimeupdate = (event) => {
  console.log("時間更新", event);
};

const followingVideoPlayRef = ref(null);
const forYouVideoPlayRef = ref(null);

const changeFollowingVideo = (index) => {
  followingVideoPlayRef.value.forEach((item, i) => {
    if (index === i) {
      item.play();
    } else {
      item.pause();
    }
  });
};

const changeForYouVideo = (index) => {
  forYouVideoPlayRef.value.forEach((item, i) => {
    if (index === i) {
      item.play();
    } else {
      item.pause();
    }
  });
};

const changeTabs = (name) => {
  if (name === 0) {
    forYouVideoPlayRef.value.forEach((item) => {
      item.pause();
    });
  } else {
    followingVideoPlayRef.value.forEach((item) => {
      item.pause();
    });
  }
};
</script>

<style scoped>
.home {
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
</style>
