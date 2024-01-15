<script>
    import Card from "../Card/Card.svelte";
import Stats from "../Stats/Stats.svelte";

    
</script>

<section>
    <div class="title cell">
        <div class="heading">
            <p>Whether you're a complete beginner or looking to enhance your driving abilities, we have courses designed to meet your needs.</p>
        </div>
        

        <Card />
    </div>

</section>


<style lang="scss">
    section{
        background-color: rgb(244, 186, 169);
        display: grid;
        
        .cell{
            padding: 30px;
            display: grid;
            gap: 1rem;
            grid-auto-rows: auto;
            grid-auto-flow: row;
            place-items: center;
            
            

            .options{
                display: grid;
                border: solid 2px yellow;
    
            }

            p{
                color: black;
            }


            .heading{
                display: grid;
                text-align: center;
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