<script>

</script>

<section>
    <div class="grid cell place-items-center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </div>
</section>


<style>

    .cell{
        grid-template-columns: repeat(2, 1fr);
    }

    .cell div {
        background: url('path/to/your/image.png') no-repeat;
        height: 1em;
        width: 1em;
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