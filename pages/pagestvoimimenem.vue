<template>
    <div id="malevich"></div>
</template>

<script>

export default {

    mounted ()
    {
        var el = document.getElementById('malevich');
        el.style.top = window.innerHeight/2 - 5 + 'px';
        el.style.left = window.innerWidth/2 - 5 + 'px';
    }

}   
</script>

<style>

#malevich {
    position: relative;
    background: black;
    width: 10px;
    height: 10px;
}
</style>