<script lang="ts">
    export let name: string;
    export let price: number;
    export let perks: Array<string> = [];



</script>



<div class="flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg card">
    <div class="flex flex-col items-center p-10 bg-gray-200">
        <span class="font-semibold text-center">{name}</span>
        <div class="flex items-center">
            <span class="text-3xl">$</span>
            <span class="text-5xl font-bold">{price}</span>
            
        </div>
    </div>
    <div class="p-10">
        <ul>
            {#each perks as perk}
                <li class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="ml-2">{perk}</span>
                </li>
            {/each}
            
            
        </ul>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
            </svg>
            Buy now
        </button>
    </div>
    
</div>

<style>
    .card > div{
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    

</style>