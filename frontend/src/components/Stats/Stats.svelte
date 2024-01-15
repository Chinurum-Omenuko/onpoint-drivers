<script>

</script>

<div id=stats class="grid place-items-center">
    <div class="grid cell place-items-center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </div>
</div>


<style>
    #stats{
        height: 100vh;
        background-color: rgb(255, 255, 255);
    }

    .cell{
        grid-template-columns: repeat(2, 1fr);
        background-color: aliceblue;
        place-items: center;
        height: 50vh;
        min-width: 100%;
    }

    .cell div {
        
        height: 1em;
        width: 1em;
        color: black;
    }

    .cell div:nth-child(1) { background-position: 0 0; }
    .cell div:nth-child(2) { background-position: 0 1em; }
    .cell div:nth-child(3) { background-position: 0 2em; }
    .cell div:nth-child(4) { background-position: 0 3em; }



    @keyframes roll {
        0% { background-position: 0 0; }
        100% { background-position: 0 100%; }
    }

    @media (min-width: 850px){
        .cell{
            grid-auto-columns: 1fr;
            grid-auto-flow: column;
        }
    }
</style>