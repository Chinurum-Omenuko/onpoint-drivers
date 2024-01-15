<script>
    import Stats from "../Stats/Stats.svelte";

</script>

<section id="welcome">
    <div class="cell">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg?auto=compress&cs=tinysrgb&w=1600" class="rounded-lg shadow-2xl">
        <div class="text">
            <h1 class="text-5xl font-bold">Who are we?</h1>
            <p class="py-6">We’ve trained thousands of drivers in Ottawa over the past 15 years, and helped them to get their license. We focus on providing outstanding services to our students, with their satisfaction as our priority.<br>We make sure to guide them throughout the entire process and follow them up till they get their license.</p>
        </div>
    </div>
</section>


<style lang="scss">
    section{
        display: grid;
       
        justify-content: center;
        
        background-color: rgb(243 244 246);
        color: black;
        min-height: 100vh;

        .cell{
            
            display: grid;
            gap: 1rem;
            place-items: center;
            
        }

        .text{
            display: flex;
            min-width: 10rem;
            flex-direction: column;
            grid-column: 1;
        }

        img{
            max-width: 100%;
        }

    
        
    }

    @media (min-width: 850px){
        .cell{
            grid-auto-columns: auto;
            grid-auto-flow: column;
        }
    }

    


</style>