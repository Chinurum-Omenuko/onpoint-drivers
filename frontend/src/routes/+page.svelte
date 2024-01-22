<script>
    import Price from '../components/Price/Price.svelte';
    import Features from '../components/sections/Features.svelte'
    import Welcome from '../components/sections/Welcome.svelte'
    import deskvid from '../desktop.mp4'
    import Stats from '../components/Stats/Stats.svelte'
    import Navbar from '../components/Navigation/Navbar.svelte'

</script>




<main id="title">
    <Navbar />
    <!-- svelte-ignore a11y-media-has-caption -->
    <video autoplay loop playsinline muted class="bgvid">
        <source src={deskvid} type="video/mp4">
    </video>
    <div class="hd wrapper">
        <h1 class="text-center">Welcome to On Point Driving School</h1>
        <p class="text-xs text-center">where your journey to safe and confident driving begins</p>

        <div class="my-10 buttons">
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Call</button>
        </div>
    </div>
</main>

<Welcome />
<!-- <Stats /> -->
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


