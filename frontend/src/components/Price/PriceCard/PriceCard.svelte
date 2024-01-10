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
    </div>
    
</div>

<style>
    .card > div{
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    

</style>