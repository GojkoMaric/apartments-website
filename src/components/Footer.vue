<template>
    <span>
        <div class="footer">
            <div>
                <ul>
                    <li><img src="../assets/logo.png"></li>
                    <li>BE0677.970.513</li>
                </ul>
            </div>
            <div>
                <ul>
                    <h2>copandi</h2>
                    <li>Blog</li>
                    <li>Team</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <ul>
                    <h2>vastgoed</h2>
                    <li>Te koop</li>
                    <li>Te huur</li>
                    <li>Nieuwbouw</li>
                    <li>Ik ben op zoek</li>
                </ul>
            </div>
            <div>
                <ul>
                    <h2>algemeen</h2>
                    <li>Algemene voorwaarden</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <ul>
                    <h2>contact</h2>
                    <li>Leopolstraat 37, 2800 Mechelen</li>
                    <li>info@copandi.be</li>
                    <li>015 79 46 44</li>
                </ul>
            </div>
            <div>
                <h2>social</h2>
            </div>
        </div>
        <div class="footer-copy">
            <p>2018 copyright - alle rechten voorbehouden Copandi</p>
        </div>
    </span>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
$softDark: #242B33;
$dark: #1B1E25;
$greenText: #84C255;
$greyText: #79808A;
.footer {
    background-color: $softDark;
    min-height: 100px;
    display: flex;
    justify-content: space-evenly;
    div {
        flex-grow: 1;
    }
    img {
        width: 50px;
        height: 50px;
    }
    h2 {
        text-transform: uppercase;
        font-size: small;
        color: $greenText;
    }
    li {
        color: $greyText;
        font-size: small
    }
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
</style>
