<script>
    import Navbar from '../components/Navigation/Navbar.svelte';
    import '../app.css'
    
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

    

    :root {
        font-family: 'Josefin Sans', sans-serif;
        line-height: 1.5;
        font-weight: 400;
        font-size: 25px;

        --red: #db5461;
        --white: #F4F4ED;
        --grey: #6B717E;
        --platinum: #D3D4D9;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #ffffff;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }
</style>



<slot />
