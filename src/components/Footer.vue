<template>
    <footer>
        <div class="footer">
            <span>
                <div>
                    <ul class="center-items">
                        <img src="../assets/company-logo.png">
                        <p>BE0677.970.513</p>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h2>copandi</h2>
                        <div class='footer-box'>
                            <div>
                                <i class="fas fa-circle icon-dot-size"></i>
                                <i class="fas fa-circle icon-dot-size"></i>
                                <i class="fas fa-circle icon-dot-size"></i>
                            </div>
                            <div>
                                <li>Blog</li>
                                <li>Team</li>
                                <li>Contact</li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h2>vastgoed</h2>
                        <div class='footer-box'>
                            <div>
                                <i class="fas fa-circle icon-dot-size"></i>
                                <i class="fas fa-circle icon-dot-size"></i>
                                <i class="fas fa-circle icon-dot-size"></i>
                                <i class="fas fa-circle icon-dot-size"></i>
                            </div>
                            <div>
                                <li>Te koop</li>
                                <li>Te huur</li>
                                <li>Nieuwbouw</li>
                                <li>Ik ben op zoek</li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h2>algemeen</h2>
                        <div class='footer-box'>
                            <div>
                                <i class="fas fa-circle icon-dot-size"></i>
                                <i class="fas fa-circle icon-dot-size"></i>
                            </div>
                            <div>
                                <li>Algemene voorwaarden</li>
                                <li>Privacy Policy</li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h2>contact</h2>
                        <div class='footer-box'>
                            <div>
                                <i class="fas fa-map-marker-alt icon-size"></i>
                                <i class="far fa-envelope icon-size"></i>
                                <i class="fas fa-phone icon-size"></i>
                            </div>
                            <div>
                                <li>Leopolstraat 37, 2800 Mechelen</li>
                                <li>info@copandi.be</li>
                                <li>015 79 46 44</li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div>
                    <h2>social</h2>
                    <li><i class="fab fa-instagram icon-color right-padding icon-sm-size"></i><i class="fab fa-facebook icon-color icon-sm-size"></i></li>
                </div>
            </span>
        </div>
        <div class="footer-copy">
            <p>2018 copyright - alle rechten voorbehouden Copandi</p>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
$softDark: #242B33;
$dark: #1B1E25;
$secondary-text-color: #84C255;
$greyText: #79808A;
.footer {
    background-color: $softDark;
    min-height: 100px;
    span {
        display: flex;
        justify-content: space-evenly;
        width: 70%;
        margin: 0 auto;
        min-width: 650px;
    }
    div {
        flex-grow: 1;
    }
    img {
        width: 50px;
        height: 50px;
    }
    h2 {
        text-transform: uppercase;
        font-size: .8rem;
        color: $secondary-text-color;
    }
    li, p {
        color: $greyText;
        font-size: .8rem;
        list-style-type: none;
    }
}

.center-items{
    align-items: center;
    display: flex;
    flex-direction: column;
}

.footer-copy {
    background-color: $dark;
    justify-content: center;
    display: flex;
    height: 30px;
    align-items: center;
    p{
        color: $greyText;
        font-size: smaller;
    }
}

i {
    color: $secondary-text-color;
}

.icon-dot-size {
    font-size: 0.4rem;
}

.icon-size {
    font-size: 0.8rem;
}

.icon-sm-size {
    font-size: 1rem;
}

.right-padding {
    padding-right: .6rem;
}

.footer-box {
    display: flex;
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
}
</style>
