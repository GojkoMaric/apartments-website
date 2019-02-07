<template>
    <main class="single-apartment">
        <div class="apartment-basic-info"
        :style="{backgroundImage: 'url(' + singleApartment.images[0].url + ')' }">
            <span class='price-address-info'>
                <p><i class="fas fa-map-marker-alt right-padding"></i>{{singleApartment.location.formatted}}</p>
                <h4>€{{singleApartment.price.amount}}</h4>
            </span>
            <div>
                <div class="apartment-info-description">
                    <h2>{{singleApartment.description_nl}}</h2>
                    <span>
                        <p>{{singleApartment.bedrooms}} Slaapkamers</p>
                        <p class="margin-space">{{singleApartment.bathrooms}} Badkamer</p>
                        <p>{{singleApartment.toilets}} WC</p>
                    </span>
                </div>
                <div class="contact-info">
                    <div>
                        <img :src="singleApartment.negotiator.photo_url">
                        <span>
                            <h3>{{singleApartment.negotiator.first_name }} {{singleApartment.negotiator.last_name }}</h3>
                            <p><i class="far fa-envelope icon-size"></i> {{singleApartment.negotiator.email }}</p>
                            <p><i class="fas fa-phone icon-size"></i> {{singleApartment.negotiator.phone }}</p>
                            <button>Contact</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
            
        <div class="apartment-images-container">
            <span>
                <div v-for="image in singleApartment.images" :key="image.id">
                    <img :src="image.url">
                </div>
            </span>
            <div class="main-description">
                <h2>Beschrijving</h2>
                <p>Voor een uitgebreide beschrijving, download onze luxebrochure op www.copandi.be voor meer informatie.</p>
                <p>Dit appartement gelegen op de bovenste verdieping van een prachtig gebouw (bouwjaar 2011) met drie slaapkamers zoekt een nieuwe eigenaar.</p>
                <p>Het appartement is centraal gelegen op wandelafstand van het centrum van Brecht winkels, scholen en openbaar vervoer.</p>
                <h3>Inpandige autostaanplaats mogelijk mee aan te kopen t.W.V €15.000.</h3>
                <p>Bent u ook benieuwd naar onze unieke formules en hoe u als eigenaar veel geld kan besparen op de verkoop van uw eigen woning? Maak een vrijblijvende afspraak.</p>
                <a><i class="fas fa-map-marker-alt"></i> De kaaart tonen</a>
            </div>
        </div>

        <div class="main-central" :style="{ 'background-image': 'url(' + require('@/assets/eclipse1.png') + ')'}">
            <div class="tabs">
                <h5>Tabs</h5>
                <p>Tab 1</p>
                <p>Tab 2</p>
                <p>Tab 3</p>
                <p>Tab 4</p>
                <p class="bottom-margin">Tab 5</p>
            </div>
            <div class="tabs-content">
                <p>Voor een uitgebreide beschrijving, download onze luxebrochure op www.copandi.be voor meer informatie. Dit appartement gelegen op de bovenste verdieping van een prachtig gebouw (bouwjaar 2011) met drie slaapkamers zoekt een nieuwe eigenaar. Het appartement is centraal gelegen op wandelafstand van het centrum van Brecht winkels, scholen en openbaar vervoer.</p>
            </div>
        </div>
        
        <div class="main-planning">
            <h2>Stedenbouwkundige & juridische vermeldingen</h2>
            <h4>Indeling:</h4>
            <p>Inkomhal: <span>we betreden het appartment via de gezellige inkomhal op tegels. Deze is voorzien van een berging (Voorzien van CV van het merk Vaillant en een apart toilet.</span></p>
            <p>Leefruimte: <span>een gezellige lichte leefruimte op paket met aansluitend de open keuken.</span></p>
            <p>Apart toilet:   <span>de inkomhal is voorzien van een apart toilet op tegels.</span></p>
            <p>Berging aan keuken:  <span>een handige berging op tegels met voorziening voor wasmachine en droogkast.</span></p>
            <p>Badkamer: <span>de badkamer is voorzien van een ligbad, een douche en een dubbele lavabo met meubel.</span></p>
            <p>Keuken:<span>een volledige gerenoveerde keuken (voorzien van oa, oven, elektrische kooplaat, dampkap, vaatwasser, spoelbak, koelkast en kasten.</span></p>
            <p>Slaapkamer 1:<span>deze kamper op parket is voorzien tv aansluiting.</span></p>
            <p>Slaapkamer 2:<span>deze kamper op parket wordt momenteel gebruikt als walk -in dressing.</span></p>
            <p>Slaapkamer 3:<span>deze kamper op parket, biedt direct toegang tot het terras.</span></p>
            <p>Terras:<span>een gezellig terras van 23m2 (NW georienteerd).</span></p>
        </div>

        <div class="main-documents" :style="{ 'background-image': 'url(' + require('@/assets/eclipse2.png') + ')'}">
            <h2>Documenten & plannen</h2>
            <p>Download de belangrijkste documenten in verband met dit pand, alsook de plannen.</p>
            <div>
            <ul>
                <li><p>Grondplannen</p><i class="fas fa-download"></i></li>
                <li><p>EPC.pdf</p><i class="fas fa-download"></i></li>
                <li><p>Voorkoop Hendrik Schoofsstraat_pdf.pdf</p><i class="fas fa-download"></i></li>
                <li><p>Kadastraal plan_pdf.pdf</p><i class="fas fa-download"></i></li>
                <li><p>Copandi_template brochure_BRECHT-HENDRIK SCHOOFSTRAAT 17.pdf</p><i class="fas fa-download"></i></li>
                <li><p>Bos_pdf.pdf</p><i class="fas fa-download"></i></li>
                <li><p>ELEK.pdf</p><i class="fas fa-download"></i></li>
                <li><p>watertoets Hendrik Schoofsstraat_pdf.pdf</p><i class="fas fa-download"></i></li>
                <li><p>OVAM_pdf.pdf</p><i class="fas fa-download"></i></li>
                <li><p>Erfgoed_pdf.pdf</p><i class="fas fa-download"></i></li>
                <li><p>Sted_inl_.pdf</p><i class="fas fa-download"></i></li>
                <li><p>Overstromingenpdf_pdf.pdf</p><i class="fas fa-download"></i></li>
                <li><p>Risicokaart Hendrik SCHoofsstraat_pdf.pdf</p><i class="fas fa-download"></i></li>
            </ul>
            <div class="document-box">
                <img src="../assets/company-logo.png">
            </div>
            </div>
        </div>

        <div class="main-contact">
            <div class="main-contact-info">
                        <img :src="singleApartment.negotiator.photo_url">
                    <span>
                        <h3>{{singleApartment.negotiator.first_name }} {{singleApartment.negotiator.last_name }}</h3>
                        <p><i class="far fa-envelope icon-size"></i> {{singleApartment.negotiator.email }}</p>
                        <p><i class="fas fa-phone icon-size"></i> {{singleApartment.negotiator.phone }}</p>
                        <button>Contact</button>
                    </span>
                </div>
        </div>

        <div class="main-related-buildings">
            <h2>Gerelateerde gebouwen</h2>
            <div class="single-apartment-info">
                <ul v-for="apartment in getApartments" :key="apartment.id" >
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
        </div>
    </main>
</template>

<script>

export default {
  name: 'singleApartment',
  data: () => ({
    allApartments: [],
  }),
  computed: {
    singleApartment () {
        return this.$store.state.apartments.find(apartment => apartment.data.id == this.$route.params.id).data;
    },
    getApartments() {
      this.$store.state.apartments.map((apartment) => {
        if(apartment.data.id < 4) {
            this.allApartments.push(apartment.data)
        }else {
           return;
        }
      })
      return this.allApartments;
    }
  },
  mounted() {
      document.getElementsByTagName('header')[0].style.height = "80px";
  }
}
</script>

<style lang="scss">
$primary-text-color: #79808A;
$secondary-text-color: #84C255;
$tertiary-text-color: #fff;
$secondary-color: #242B33;
$bg-primary-color: #1B1E25;
$shadow-color: #555;

@mixin flexible-column() {
    display: flex;
    flex-direction: column;
}

main.single-apartment {
    @include flexible-column;
}

.apartment-basic-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background-size: cover;
    background-position: center;
    height: 40vw;
    padding: 0 10%;
    span, div {
        display: flex;
        justify-content: space-between;
    }
    h2 {
        font-size: 3rem;
        font-weight: bold;
        color: $tertiary-text-color;
         margin-top: 0;
        margin-bottom: 15%;
    }
    &::after {
        content: '';
        background: $secondary-color;
        opacity: 0.9;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        position: absolute;
    }
    & * {
        z-index: 1;
    }
}

.margin-space {
    margin: auto 5rem;
}

.price-address-info {
    align-items: center;
    p:first-child {
        color: $tertiary-text-color;
        font-weight: normal;
        font-size: .8rem;
        background: rgba($secondary-color, 0.5);
        border-radius: 10px;
        padding: 0 10px;
    }
    h4 {
        color: $secondary-text-color;
        font-weight: bold;
        background: $bg-primary-color;
        box-shadow: 0px 0px 10px 0px $bg-primary-color;
        font-size: 1.3rem;
        padding: .6rem 1.6rem;
        border-radius: 20px;
        font-size: 1.2rem
    }
    i {
        color: $tertiary-text-color;
    }
}

.apartment-info-description {
    flex-direction: column;
    p {
        color: $tertiary-text-color !important;
        font-size: .8rem;
    }
    span {
        justify-content: start;
    }
}

.contact-info {
    padding: 5% 0;
    div{
        border-radius: 10px;
        background: rgba($secondary-color, 0.5);
        color: $tertiary-text-color;
        font-size: .8rem;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        img {
            width: 100px;
            height: 100px;
            background-size: cover;
            background-position: center;
            border-radius: 50%;
            margin: 1rem;
        }
        button {
            color: $tertiary-text-color;
            border: 1px solid $tertiary-text-color;
            background-color: transparent;
            border-radius: 20px;
            padding: .5rem 1rem;
        }
        span {
            display: flex;
            flex-direction: column;
            margin: 1rem;
            line-height: 1.5rem;
        }
        p, h3 {
            margin: 0;
        }
        h3 {
            margin-bottom: .5rem;
        }
    }
}

.apartment-images-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transform: translateY(-3vw);
    span {
        padding: 0 10%; 
        display: flex;
    }
    img {
        width: 90%;
        height: 130%;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 0px $shadow-color;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.main-description {
    margin-top: 3vw;
    width: 70%;
    text-align: center;
    padding: 3rem 0;
    line-height: 1.5rem;
    h2 {
        color: $secondary-color;
        font-size: 1.8rem;
    }
    p, h3 {
        color: $primary-text-color;
    }
    p {
        font-size: .8rem;
        margin: 0;
    }
    h3 {
        font-weight: normal;
    }
    a {
        color: $secondary-color;
        border: 2px solid $secondary-color;
        background-color: transparent;
        border-radius: 20px;
        padding: 0.2rem 1.4rem;
        font-size: 0.8rem;
        font-weight: bold;
        margin-top: 3rem;
        cursor: pointer;
        i {
            color: $secondary-color;
        }
        &:hover {
            color: $tertiary-text-color;
            background: $secondary-color;
            i {
                color: $tertiary-text-color;
            }
        }
    }
}

.main-central {
    background: $bg-primary-color;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-y: -300px;
    padding: 5% 10%;
    display: flex;
    color: $tertiary-text-color;
    height: 100%;
}

.tabs {
    @include flexible-column;
    background: $secondary-color;
    width: 80%;
    padding-left: 4rem;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px darken($bg-primary-color, 6);
    h5 {
        font-size: 1.6rem;
    }
    p {
        cursor: pointer;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 1rem;
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: uppercase;
        margin: 0;
        &:hover {
            background: darken($secondary-color, 4);
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        }
    }
}

.tabs-content {
    p {
    font-size: 1.04rem;
    text-align: center;
    padding: 0 3rem;
    line-height: 2rem;
    }
}

.main-planning {
    padding-top: 0 !important;
    background: $bg-primary-color;
    color: $tertiary-text-color;
    padding: 5% 10%;
    h2 {
        font-weight: normal;
        font-size: 1.8rem;
        margin-bottom: 5rem;
    }
    h4 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
    p, span {
        font-size: .7rem;
    }
    span {
        color: $primary-text-color;
    }
}

.main-documents {
    padding-top: 0 !important;
    background: $bg-primary-color;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    background-position-y: 100px;
    color: $tertiary-text-color;
    padding: 5% 10%;
    height: 40vw;;
    div {
        display: flex;
        height: 90%;;
    }
    p {
        color: $primary-text-color;
        font-size: .8rem;
    }
    ul {
        @include flexible-column;
        flex-wrap: wrap;
        height: 100%;
        flex-grow: 1;
        i {
            border-radius: 50%;
            background: $tertiary-text-color;
            width: .8rem;
            height: .8rem;
            padding: .8rem;
        }
        p {
            font-size: .8rem;
            display: unset;
            color: $tertiary-text-color;
        }
    }
    li {
        list-style: none;
        padding-left: 1rem;
        background: $secondary-color;
        border-radius: 20px;
        margin-bottom: 1rem;
        width: 30%;
        flex-shrink: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.document-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background: $secondary-color;
    border-radius: 20px;
    border: 2px solid $secondary-text-color;
    box-shadow: 0px 0px 20px 0px darken($bg-primary-color, 6);
}

.main-contact {
    padding: 5% 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-contact-info {
    background: $bg-primary-color;
    padding: 1.5rem;
    width: 50%;
    box-shadow: 0px 5px 20px 0px $bg-primary-color;
    border-radius: 10px;
    color: $tertiary-text-color;
    font-size: .8rem;
    display: flex;
    align-items: center;
    img {
        width: 11rem;
        height: 11rem;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        margin: 1rem;
    }
    button {
        color: $tertiary-text-color;
        border: 1px solid $tertiary-text-color;
        background-color: transparent;
        border-radius: 20px;
        padding: .5rem 2rem;
        width: max-content;
    }
    span {
        display: flex;
        flex-direction: column;
        margin: 1rem;
        line-height: 1.5rem;
        padding-left: 2rem;
    }
    p, h3 {
        margin: 0;
    }
    h3 {
        margin-bottom: .5rem;
        font-size: 1.3rem;
    }
}

.main-related-buildings {
    @include flexible-column;
    align-items: center;
}

.single-apartment-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 10%;
    width: 80%;
        ul {
            flex-direction: row;
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

.bottom-margin {
    margin-bottom: 10rem !important;
}
</style>

