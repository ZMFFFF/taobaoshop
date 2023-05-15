<template>
  <div class="onsell">
    <div class="cont_box">
      <template v-if="content.length != 0">
        <div class="cont" v-for="item, i in content" :key="i">
        <div class="onSell_price">省{{ item.coupon_amount }}元</div>
        <img :src="item.pict_url" alt="">
        <p style="color: #ff4040; font-size: 18px;">
          <span style="text-decoration: line-through;">￥{{ item.zk_final_price }}</span>&nbsp;
          <span>券后价{{ (item.zk_final_price - item.coupon_amount).toFixed(2) }}</span>
        </p>
        <p class="p_volume" style="font-size: 14px; color: #7f828b;">{{ item.volume }} · 人已购买</p>
        <p style="width: 100%;height: 50px; font-weight: bold; overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical; 
  -webkit-line-clamp: 2;">{{ item.title }}</p>
      </div>
      </template>
      <div v-else style="width: 100%; height: 100%; display: flex;justify-content: center;">
          <img src="@/assets/img/22.gif" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [],
      page:1,
      flag:true
    }
  },
  created() {
    this.getContent(this.page)
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    async getContent(page) {
      let url = `https://api.sunofbeaches.com/shop/onSell/${page}`;
      let result = await this.axios.get(url);
      // console.log(result)
      // this.content = result.data.data.tbk_dg_optimus_material_response.result_list.map_data;
      for (var i = 0; i < result.data.data.tbk_dg_optimus_material_response.result_list.map_data.length; i++) {
        this.content.push(result.data.data.tbk_dg_optimus_material_response.result_list.map_data[i])
        this.flag = true;
      }
      // console.log(this.content);
    },
    onScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      if (scrollTop + windowHeight + 5 >= scrollHeight) {
        // console.log("bottom")
        if (this.flag) {
          this.flag = false;
          this.page++;
          this.getContent(this.page)
        }

      }
    }
  }
}
</script>
<style scoped lang="scss">
.cont_box {
  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;
  width: 1140px;
  margin: 0 auto;
  // border: 1px solid red;

  .cont {
    position: relative;
    width: 275px;
    height: 395px;
    margin: 4.7px;
    border: 1px solid #dfdfdf;
    padding: 5px;
    cursor: pointer;

    &:hover {
      border: 1px solid #c9302c;
    }

    .onSell_price {
      position: absolute;
      top: 5px;
      right: 5px;
      background: #c9302c;
      color: #fff;
      font-size: 14px;
      text-align: center;
      padding: 4.5px 17px;
    }

    img {
      width: 263px;
      height: 263px;

    }

    p {
      line-height: 25px;
      margin: 5px 0;
    }
  }
}
</style>