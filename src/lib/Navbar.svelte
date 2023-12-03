<script>
    import { page } from "$app/stores";
    $: routeId = $page.route.id;
</script>

<nav class="sticky-top">
    <ul>
        <li><a class="active" href="/home" class:active={routeId === '/home'}>Home</a></li>
        <li><a href="/student" class:active={routeId === '/student'}>Students</a></li>
        <li><a href="/contact" class:active={routeId === '/contact'}>Contact</a></li>
    </ul>
</nav>

<style>
    nav {
        height: 50px;
        margin-left: -0.75rem;
        margin-right: -0.75rem;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover:not(.active), li.btn-wrap button:hover {
        background-color: #111;
    }

    li.btn-wrap {
        float: right;  
    }
    li.btn-wrap button {
        color: #fff; 
        text-decoration: none;
        padding: 14px 16px;
        margin: 0;
    }

    .active {
        background-color: #04aa6d;
    }
</style>