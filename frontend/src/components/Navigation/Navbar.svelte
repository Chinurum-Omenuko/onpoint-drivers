<script>
  import {onMount, onDestroy} from 'svelte';
  import { browser } from '$app/environment';
  const scrollNavBar = 60; // Amount of pixels to scroll before hiding navbar
  let show = true;

  onMount(() => {
   if (browser) {
     window.onscroll = () => {
       if (window.scrollY > scrollNavBar) {
         show = false;
       } else {
         show = true;
       }
     };
   }
 });

 onDestroy(() => {
   if (browser) {
     window.onscroll = null;
   }
 });
</script>


<nav class="v" class:v={show} class:hidden={!show}>
  <div id="logo">
    <a class="brand" href="/">OPDS</a>
  </div>


  <div class="items">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </div>

  <div class="booking">
    <a href="/login">Login</a>
  </div>
  

</nav>

<style lang="scss">
  
  .v
  {
    position: absolute;
    z-index: 10000;
    width: 100vw;
    display: grid;
    grid-auto-flow: column;

    text-align: center;
    background-color: rgb(0, 0, 0, 0.2);
    transition: all 4s ease;
    transform: translateY(0%);
    
    
  }

  .hidden
  {
    transform: translateY(-100%);
  }

  div
  {
    padding: .5rem 2rem;
    a
    {
      text-decoration: none;
      color: whitesmoke;
    }

  }

  li{
    list-style: none;
  }

  .items, #logo, .booking{
    display: flex;
    justify-content: center;
    
    li{
      margin: 0 2rem;
    }
  }

  #menu a
  {
    padding-left: 2rem;
    
  }

  @media (max-width: 850px){
  
    .items{
      display: none;
    }
  }
  
</style>