new Vue({ 
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Unlike Pluto feat.Joanna Jones",
          artist: "No Scrubs",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/1.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=oiwDk3TJMUc",
          favorited: true
        },
        {
          name: "Anne-Marie",
          artist: "Ciao Adios",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/2.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=94_TfO5uBMg",
          favorited: false
        },
        {
          name: "Enrique Iglesias",
          artist: "SUBEME LA RADIO ft. Descemer Bueno, Zion & Lennox",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/3.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=5XfeNo2OPbs",
          favorited: false
        },
        {
          name: "Stromae",
          artist: "Tous Les Mêmes",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/4.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=yenEVkeZj_E",
          favorited: false
        },
        {
          name: "La La Land - John Legend",
          artist: "Start A Fire",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/5.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=eeGsmtoMd6s",
          favorited: false
        },
        {
          name: "Tessa Violet",
          artist: "Crush",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/6.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=zqWvrDRG6Lw",
          favorited: false
        },
        {
          name: "Conan Gray",
          artist: "Maniac",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/7.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=BNAbSClHTU8",
          favorited: false
        },
        {
          name: "Finneas",
          artist: "I Don't Miss You at All",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/8.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=ikVTimUg60E",
          favorited: false
        },
        {
          name: "Finneas",
          artist: "New girl",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/9.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=IUA0MRRYU1M",
          favorited: false
        },
        {
          name: "Tom Walker",
          artist: "Leave a Light On",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/10.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/10.mp3",
          url: "https://www.youtube.com/watch?v=iudEfcbhb10",
          favorited: false
        },
        {
          name: "Alexander Rybak",
          artist: "Kotik",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/11.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/11.mp3",
          url: "https://www.youtube.com/watch?v=argckcdLYrA",
          favorited: false
        },
        {
          name: "Alec Benjamin",
          artist: "If I Killed Someone For You",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/12.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/12.mp3",
          url: "https://www.youtube.com/watch?v=xSg0bptUpms",
          favorited: false
        },
        {
          name: "CAZZETTE vs. AronChupa",
          artist: "She Wants Me Dead ft. The High",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/13.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/13.mp3",
          url: "https://www.youtube.com/watch?v=2kGM0DGc0X0",
          favorited: false
        },
        {
          name: "Alec Benjamin",
          artist: "The Boy In The Bubble",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/14.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/14.mp3",
          url: "https://www.youtube.com/watch?v=Ns8oyEob7lA",
          favorited: false
        },
        {
          name: "Ruel",
          artist: "Who Did That To You (Live Cover)",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/15.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/15.mp3",
          url: "https://www.youtube.com/watch?v=hG8RODAZkLU",
          favorited: false
        },
        {
          name: "Kayama Saki",
          artist: "Tạm biệt, em yêu anh (Sayonara, aishiteita)",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/16.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/16.mp3",
          url: "https://www.youtube.com/watch?v=SIwG-o8pxrc",
          favorited: false
        },
        {
          name: "MIYAVI",
          artist: "Other Side",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/17.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/17.mp3",
          url: "https://www.youtube.com/watch?v=i-xgdKJ7sDw",
          favorited: false
        },
        {
          name: "Adam Lambert",
          artist: "If I Had You",
          cover: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/img/18.jpg",
          source: "https://raw.githubusercontent.com/JustaTama/Mini-Music-Player/main/mp3/18.mp3",
          url: "https://www.youtube.com/watch?v=k2mUie9t0zI",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
