<template>
    <div class='back'>
        <div class='header'>
            <ul>
                <li><img src="../assets/logo.png"></li>
                <li>Te koop</li>
                <li>Te huur</li>
                <li>Neiuwbouw</li>
                <li>Ik ben op zoek</li>
                <li>Team</li>
                <li>Prijzen</li>
                <li>Blog</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss">
$softDark: #242B33;
$dark: #1B1E25;
$white: #fff;
$headerHeight: 50px;
.header {
    background-color: $softDark;
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
        li {
            color: $white;
            list-style-type: none;
            font-size: small;
            padding: 10% 0;
            flex-grow: 1;
            &:hover {
                background-color: lightgray;
                color: $softDark;
                cursor: pointer;
            }
        }
        li:first-child {
            flex-grow: 2;
        }
    }
}

.back {
    height: $headerHeight*3;
    background-color: $dark;
}

</style>