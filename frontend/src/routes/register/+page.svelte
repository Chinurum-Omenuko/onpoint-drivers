<script lang=ts>
    import GoogleAuth from "../../components/Buttons/GoogleAuth.svelte"
</script>


<div class="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="w-auto h-10 mx-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
      <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">Sign up for your OPDS account</h2>
    </div>
    <GoogleAuth option={"up"}/>
    <div class="flex items-center justify-around mt-4">
        
        <a href="#" class="text-xs text-center text-gray-500 uppercase">or sign up with email</a>
        
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
  
            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

                </div>
                <div class="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                </div>
                <div class="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
  
            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
            </div>
        </form>
  
        <p class="mt-10 text-sm text-center text-gray-500">
            Already a member?
            <a href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in to your OPDS account here</a>
        </p>
    </div>
</div>
    


<style>
  
    .inner{
        height: 90vh;
        
    }

    

    

    @media (min-width: 1024px){
        .inner{
            height: 85vh;
            margin: 2.5rem 2.5rem;
        }
        
        .sideb
        {
        height: 20px;
        border: solid 2px red;
    }
    }


</style>