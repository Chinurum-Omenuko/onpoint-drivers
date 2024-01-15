<script lang="ts">
    import PriceCard from "./PriceCard/PriceCard.svelte";
    

    let package1: App.Package = {
        name: 'Basic Driving Education (Online)',
        price: 725,
        perks: [
            '30 hours online class', 
            '10 hours in-car practice',
            'Car for the day after test'
        ]
    };

    let package2: App.Package = {
        name: 'BDE in-person',
        price: 725,
        perks: [
            '20 hours in-person class', 
            '10 hours in-car practice',
            'Car for the day after test'
        ]
    };
    
    let package3: App.Package = {
        name: 'G-licence',
        price: 270,
        perks: ['3 hours in-class practice + car', 'Car for the test']
    };
</script>


<!-- component -->
<div class="flex flex-col items-center justify-center min-h-screen p-10 text-gray-700 bg-gray-100 md:p-20">
	<h2 class="text-2xl font-medium">Pricing</h2>

	<!-- Component Start -->
	<!-- Component End  -->
    <div class="card-container">
        <PriceCard name={package1.name} price={package1.price} perks={package1.perks}/>
        <PriceCard name={package2.name} price={package2.price} perks={package2.perks}/>
        <PriceCard name={package3.name} price={package3.price} perks={package3.perks}/>
    </div>
    

</div>

<style>
    .card-container{
        display: grid;
        grid-template-columns: 1fr;
        width: 90vw;
    }

    @media (min-width: 850px){
        .card-container{
            grid-auto-flow: column;
            grid-auto-columns: 1fr;
            gap: 2rem;
        }
    }
    
</style>