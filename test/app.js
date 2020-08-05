import carousel from './carousel/carousel'

let timeout = null
let intervalTime = 3000

let map = {
    mobile: [
      {
        id: 0,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/VJMKYP67HDV81594666749129.jpg"
      },
      {
        id: 1,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/VMQWGZUUN0ND1595027718598.jpg"
      },
      {
        id: 2,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/6E7417V4COZK1594246631162.jpg"
      },
      {
        id: 3,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/ZK264MCQVGUW1591659159544.jpg"
      }
    ],
    desk: [
      {
        id: 4,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/W4V3UJZQY33J1594666746765.jpg"
      },
      {
        id: 5,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/89QEFESOZFON1595027721142.jpg"
      },
      {
        id: 6,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/LBSED612PBHV1594664939349.jpg"
      },
      {
        id: 7,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/F3R621RGW4PY1591659159421.jpg"
      }
    ],
    logo: [
      {
        id: 8,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/NCL3IWXNZLGW1594666773843.png"
      },
      {
        id: 9,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/2FYMSDUM6JEN1595027713539.png"
      },
      {
        id: 10,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/x3/X3HOK8D9FAEM1575327204275.png"
      },
      {
        id: 11,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/IUCCN3GVCZFD1586209087889.png"
      }
    ],
  
    text: [
      { id: 12, title: "全新資料片", btn: "立即購買" },
      { id: 13, title: "有玩 , 有看 , 有得拿", btn: "瞭解詳情" },
      {
        id: 14,
        title: "陪你上山下海的好夥伴!",
        special: "限時優惠",
        btn: "立即購買"
      },
      { id: 15, title: "第四季正式上線", btn: "瞭解詳情" }
    ]
  }



// let data = {
//     bannerDeskBks: map.desk,
//     bannerMobileBks: map.mobile,
// }


let data = {
    bannerDeskBks: null,
    bannerMobileBks: null,
}




new Vue({
    el: '#app',
    data,
    mounted() {
        setTimeout(() => {
            this.bannerDeskBks = map.desk
            this.bannerMobileBks = map.mobile
        }, 3000);
    //     timeout = setInterval(() => {
    //         this.carouselGo()
    //     },intervalTime)
    },
    // beforeDestory() {
    //     clearInterval(timeout)
    // },
    components: {
        carousel
    },
    methods: {
        toggleMenu() { this.activeMenu = !this.activeMenu },
        goPage(index) { this.nowPath = index },
        carouselGo() { this.$children.forEach((com) => com.go()) }
    }
})