<script>
  import {onMount, onDestroy} from 'svelte';
  import { browser } from '$app/environment';

  
</script>


<nav class="v">
  <div id="logo">
    <a class="brand" href="/">Logo</a>
  </div>


  <div class="items">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </div>

  <div class="booking">
    <!-- <a href="/buy">Purchase package</a> -->
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