<script>
    import Card from "../Card/Card.svelte";
import Stats from "../Stats/Stats.svelte";

    
</script>

<section>
    <div class="title cell">
        <div class="heading">
            <h2>First time? Dont worry..</h2>
            <p>Whether you're a complete beginner or looking to enhance your driving abilities, we have courses designed to meet your needs.</p>
        </div>
        

        <Card />
    </div>

</section>


<style lang="scss">
    section{
        background-color: black;
        display: grid;
        
        .cell{
            display: grid;
            gap: 1rem;
            grid-auto-rows: auto;
            grid-auto-flow: row;
            place-items: center;
            
            

            .options{
                display: grid;
                border: solid 2px yellow;
    
            }

            .heading{
                display: grid;
            }
        }

        @media (min-width: 850px) {
            .options{
                grid-auto-columns: 1fr;
                grid-auto-flow: column;
            }
            .heading{
                grid-auto-columns: 1fr;
                grid-auto-flow: column;
                align-items: center;

            }
            
        }

        


        

    }
    
</style>