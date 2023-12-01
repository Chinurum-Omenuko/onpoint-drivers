<script>
    
</script>

<section>
    <div class="title cell">
        <h2>First time? Dont worry..</h2>
        <p>Whether you're a complete beginner or looking to enhance your driving abilities, we have courses designed to meet your needs.</p>

        <div class="options">
            <div class="option">1</div>
            <div class="option">2</div>
            <div class="option">3</div>
        </div>
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
            text-align: center;
            place-items: center;
            

            .options{
                display: grid;
                border: solid 2px red;
                min-width: inherit;
                grid-template-columns: repeat(3, 1fr);

                .option{
                    min-width: 10rem;
                    height: 10em;
                    border: solid 2px orange;
                }
            }
        }

        @media (min-width: 850px) {
            .options{
                grid-auto-flow: column;
                grid-auto-columns: auto;
                gap: 2rem;
            }
            
        }


        

    }
    
</style>