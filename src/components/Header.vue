<template>
    <header>
        <div class='header'>
            <ul>
                <li><router-link to="/"><img src="../assets/company-logo.png"></router-link></li>
                <li>Te koop</li>
                <li>Te huur</li>
                <li>Neiuwbouw</li>
                <li>Ik ben op zoek</li>
                <li>Team</li>
                <li>Prijzen</li>
                <li>Blog</li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss">
$secondary-color: #242B33;
$background-color: #1B1E25;
$text-color: #fff;
$headerHeight: 50px;
.header {
    background-color: $secondary-color;
    height: $headerHeight;
    overflow: hidden;
    img {
        width: 50px;
        height: 50px;
    }
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100%;
        width: 60%;
        margin: 0 auto;
        align-items: center;
        text-align: center;
        min-width: 450px;
        li {
            color: $text-color;
            list-style-type: none;
            font-size: .8rem;
            padding: 10% 0;
            flex-grow: 1;
            &:hover {
                background-color: lightgray;
                color: $secondary-color;
                cursor: pointer;
            }
        }
        li:first-child {
            flex-grow: 2;
        }
    }
}

header {
    height: $headerHeight*3;
    background-color: $background-color;
}

</style>