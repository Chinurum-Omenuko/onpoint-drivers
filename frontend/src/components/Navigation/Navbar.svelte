<script lang="ts">

</script>


<nav class="v">
  <div id="logo">
    <a class="brand" href="/">Logo</a>
  </div>


  <div class="items">
    <li><a href="/">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Contact</a></li>
  </div>

  <div class="booking">
    <a href="/">Register</a>
  </div>
  

</nav>

<style lang="scss">
  
  nav
  {
    position: fixed;
    z-index: 10000;
    width: 100vw;
    display: grid;
    grid-auto-flow: column;

    text-align: center;
    background-color: black;
    
    
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