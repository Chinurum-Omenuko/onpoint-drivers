<script>
    import Price from '../components/Price/Price.svelte';
import Features from '../components/sections/Features.svelte'
    import Welcome from '../components/sections/Welcome.svelte'
    import deskvid from '../desktop.mp4'

</script>

<main id="title">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video autoplay loop playsinline muted class="bgvid">
        <source src={deskvid} type="video/mp4">
    </video>
    <div class="hd wrapper">
        <h1>Welcome to On Point Driving School</h1>
        <p>where your journey to safe and confident driving begins</p>
    </div>
</main>

<Welcome />
<Features />
<Price />



<style lang="scss">
    main{

        height: 100vh;
        min-width: 100vw;

        display: flex;
        justify-content: center;
        flex-direction: row;
        /* border: solid 2px blue; */

        video{
            position: absolute;
            z-index: 10;
            min-width: 100vw;
            height: 100vh;
            object-fit: cover;
            /* border: solid 2px red; */ 
        }
        
        
    }

    .hd{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    

    h1{
        color: #fffffa;
        
    }
</style>


