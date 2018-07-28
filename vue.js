
var vm = new Vue({
  el: '#main',
  data: {
    busqueda: '',
    laURL: '',
    elTitulo: '',
    videoActivo: '',
    mostrar: false,
    alternar: true,
    videos : [],
  },
  created() {
    // Añado las pistas al objeto videos
    this.videos = JSON.parse(localStorage.getItem("pistas"));
    },
  methods: {
    showTitulo: function() {
      if(this.laURL!='')
      this.mostrar=!this.mostrar
      setTimeout(function(){ $('#ttl').focus(); }, 100);
    },
    addDatos: function() {
      if(this.laURL!='')
      this.mostrar=!this.mostrar

      this.elTitulo = this.elTitulo.toString().toLowerCase()

      this.videos.push({ url: this.laURL, titulo: this.elTitulo, activo: false }) 
      // Guardo el objeto como un string
      localStorage.setItem('pistas', JSON.stringify(this.videos)); 
      this.laURL = this.elTitulo='';  
    },
    playVideo: function(video) {
      var laUrl = video.url;
    var nuevaUrl = laUrl.replace("watch?v=", "embed/");
      this.videoActivo = nuevaUrl + '?&autoplay=1';
      for(i=0;i<this.videos.length;i++){
      this.videos[i].activo=false;
      }
      video.activo = true;
    },
    delVideo: function(video){
      this.videos.splice(this.videos.indexOf(video),1);
      localStorage.setItem('pistas', JSON.stringify(this.videos));
    },
    addSearch: function(){
      this.alternar = !this.alternar
    },
    ordenarAlfa: function(){
      this.videos.sort(function (a,b) {
        if (a.titulo > b.titulo) 
          return 1; 
        else if (a.titulo < b.titulo) 
          return -1;
        return 0;
      });
    }
  },
  computed: {
    buscarPorTitulo() { 
      return this.videos.filter((busqueda) => busqueda.titulo.includes(this.busqueda))
    },
 },
})

