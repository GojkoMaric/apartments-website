<template>
  <main>
    <div class="home">
      <ul v-for="apartment in getApartments" :key="apartment.id" v-on:click="goToSingleApartment(apartment.id)">
        <li><img :src=apartment.images[0].url></li>
        <div class='apartment-info'>
          <p>{{apartment.description}}</p>
          <li><span> </span><i class="fas fa-map-marker-alt icon-color"></i> {{apartment.location.formatted}}</li>
          <hr>
          <div>
            <span>
              <li>Vierkante meters</li>
              <li>{{apartment.sizes.liveable_area.size}} {{apartment.sizes.liveable_area.unit}}</li>
            </span>
            <span>
              <li>Slaapkamers</li>
              <li>{{apartment.bedrooms}}</li>
            </span>
            <span>
              <li>Plaats</li>
              <li>{{apartment.price.amount}} {{apartment.price.currency}}</li>
            </span>
          </div>
        </div>
      </ul>
    </div>
  </main>
</template>

<script>

export default {
  name: 'home',
  data: () => ({
    apartments: []
  }),
  computed: {
    getApartments() {
      this.$store.state.apartments.map((apartment) => {
        apartment.data.id < 10 ? this.apartments.push(apartment.data) : false;
      })
      return this.apartments;
    },
  },
  methods: {
    goToSingleApartment(apartmentId) {
      this.$router.push({path: `/apartment/${apartmentId}`});
    }
  },
  mounted() {
      document.getElementsByTagName('header')[0].style.height = "150px";
  }
}
</script>

<style lang="scss">
$lightGray: #7B828C;
$shadow-color: #555;
$blackText: #1C1F26;

main{
  display: flex;
  justify-content: space-around;
  transform: translateY(-30px);
  .home {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    ul {
      overflow: hidden;
      width: 29%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      min-width: 310px;
      margin: 0;
      transition-duration: .3s;
      cursor: pointer;
      li {
        list-style-type: none;
        border-radius: 10px;
        overflow: hidden;
        font-size: small;
      }
      img {
        height: 100%;
        width: 100%;
      }
      &:hover {
        transform: translateY(-3%);
        transition-timing-function: linear;
        transition-delay: .2s;
        transition-duration: .3s;
        .apartment-info {
          transition-delay: .1s;
          transition-duration: .3s;
          transition-timing-function: ease-in;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          padding: 5% 10%;
        }
      }
    }
  } 
}

.apartment-info{
  background-color: white;
  padding: 5%;
  width: 81%;
  transform: translateY(-30px);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px $shadow-color;
  transition-duration: .3s;
  transition-delay: .2s;
  transition-timing-function: ease-out;
  p {
    font-weight: bold;
  }
  li {
    color: $lightGray;
  }
  li:nth-child(2) {
    color: $lightGray;
    border-radius: 0px;
    padding-bottom: 5%;
    padding-left: 3%;
    span {
      border-left: 1px solid $lightGray;
      padding-right: 3%;
    }
  }
  li:nth-child(4) {
    color: $lightGray;
  }
  hr {
    width: 90%;
  }
  div {
    display: flex;
    justify-content: space-between;
    span {
      line-height: 1em;
      li {
        font-size: .5rem;;
      }
      li:nth-child(2) {
        color: $shadow-color;
        font-weight: bold;
      }
    }
    span:nth-child(2) {
      border-right: 1px solid $lightGray;
      border-left: 1px solid $lightGray;
      padding: 0 1rem;
    }
    span:last-child {
      width: 20%;
      li:last-child {
        color: $blackText;
      }
    }
  }
}

.icon-color {
  color: $lightGray;
}

</style>

