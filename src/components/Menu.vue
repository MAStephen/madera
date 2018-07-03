<template>
  <div class="container">
    <div class="col s12 m12 right">
      <div id="container_1">
          <img id="image_present" src="../assets/menu/house_draw.jpg">
          <a class="waves-effect amber accent-3 btn-large button"><i class="material-icons left">cloud</i>Parcourir</a>
          <span id="text_present">POURQUOI <br/> PAS VOUS ?</span>
      </div>
    </div>

    <hr class="separateur">

    <div id="container_2">
      <div class="row">
      <div><h2>MADERA & VOUS</h2></div>
      <div class="col s6 m12">
        <ul class="collapsible">
          <li>
            <div class="collapsible-header active"><i class="material-icons">accessibility</i>Vous</div>
            <div class="collapsible-body"><span>Chaque jour MADERA et VOUS explorons de nouvelle solution afin de trouver
              les meilleurs innovation pour vous permettre d'avoir la maison de vos rêves.</span><br/><br/>
             <a class="waves-effect amber accent-3 btn-small button_M"><i class="material-icons left">cloud</i>Parcourir</a>
            </div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">insert_chart</i>Les démarches</div>
            <div class="collapsible-body"><span>Grace a notre rapidité d'exécution et notre outils HelpTOiMEme, vos démarches sont simplifier
            . Cela permet de débuter rapidement l'avancé des travaux.</span><br/><br/>
             <a class="waves-effect amber accent-3 btn-small button_M"><i class="material-icons left">cloud</i>Parcourir</a>
            </div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Nos avantages</div>
            <div class="collapsible-body"><span>Profiter notre expertise en la matière.</span><br/><br/>
             <a class="waves-effect amber accent-3 btn-small button_M"><i class="material-icons left">cloud</i>Parcourir</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="col s6 m6">
         <ul class="collapsible">
          <li>
            <div class="collapsible-header"><i class="material-icons">local_florist</i>L'écologie</div>
            <div class="collapsible-body"><span>L'écologie pour MADERA est un point essentiel. Tout nos maisons modulaire
              sont de A à Z réalisé pour nuire le moins possible a ta fôret !</span><br/><br/>
             <a class="waves-effect amber accent-3 btn-small button_M"><i class="material-icons left">cloud</i>Parcourir</a>
            </div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">cached</i>La transformation</div>
            <div class="collapsible-body"><span>MADERA soutient toute les proposition a la transformation vers un developpement
              durable et écologique. Chaque innovation proposé est analysé.</span><br/><br/>
             <a class="waves-effect amber accent-3 btn-small button_M"><i class="material-icons left">cloud</i>Parcourir</a>
            </div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">group</i>Nos équipes</div>
            <div class="collapsible-body"><span>Nos équipes sont experimenté.</span><br/><br/>
             <a class="waves-effect amber accent-3 btn-small button_M"><i class="material-icons left">cloud</i>Parcourir</a>
            </div>
          </li>
        </ul>
      </div>

      <div id="container_3" class="row">
        <div class="col s12 m6">
          <h2>PRISE DE CONTACTE</h2>
          <ul class="collapsible">
            <li>
              <div class="collapsible-header">
                <i class="material-icons">filter_drama</i>Contacte</div>
              <div class="collapsible-body">
                <ul>
                  <li><span>Numéro de téléphone : 06.78.65.45.04</span></li>
                  <li><span>Numéro du fax : 05.67.43.23.98</span></li>
                  <li><span>Email : Madera-One@gmail.com</span></li>
                </ul>
              </div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons">query_builder</i>Horaire</div>
              <div class="collapsible-body">
                <ul>
                  <li><span>Lundi : 8H-12H/13H30-19H30</span></li>
                  <li><span>Mardi : 8H-12H/13H30-19H30</span></li>
                  <li><span>Mercredi : 8H-12H/13H30-19H30</span></li>
                  <li><span>Jeudi : 8H-12H/13H30-19H30</span></li>
                  <li><span>Vendredi : 8H-12H/13H30-19H30</span></li>
                  <li><span>Samedi : 10H-12H/14H-17H30</span></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="col s12 m6">
          <h2>PRISE DE RENDEZ-VOUS</h2>
          <ul class="collapsible">
            <li>
              <div class="collapsible-header">
                <i class="material-icons">date_range</i>Rendez-vous</div>
              <div class="collapsible-body">
                <span>Vous pouvez prendre un rendez-vous avec l'un de nos commercial via le lien ci-dessus</span><br/><br/>
                <a class="waves-effect amber accent-3 btn-small button_M"><i class="material-icons left">cloud</i>Rendez-vous</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
    }
  },
  mounted: function () {
    var elems = document.querySelectorAll('.collapsible')
    window.M.Collapsible.init(elems, {})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Container numéro 1, présentation */
@font-face {
  font-family: "milstone_outline";
  src: url(..\assets\font\Milestone_Outline.otf);
}

#container_1 {
  width: 100vw;
  height: 550px;
  margin-bottom: 30px;
}

#image_present {
  display: block;
  margin-left: 410px;
  width: 80%;
  height: 550px;
}

#text_present {
  z-index: 50;
  color: black;
  font-family: "milstone_outline";
  font-size: 70px;
  position: absolute;
  top: 15%;
  left: 15%;
}

.button {
  position: absolute;
  top: 55%;
  left: 75%;
}

/* Container numéro 2, ecologie */
#container_2 {
  height: 500px;
  margin-top:30px;
  margin-bottom: 30px;
}

/* Container numéro 3, contacte */
#container_3 {
  height: 500px;
  margin-top:30px;
  margin-bottom: 30px;
}

/* Commun a la page */
hr {
  width: 60%;
}

</style>
