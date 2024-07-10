<script setup>
// import RouterLink from 'vue-router';
// import RouterView from 'vue-router';
</script>

<template>
    <div>
        <header>
            <div class="barra">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/books">Books</RouterLink>
                <RouterLink to="/addBook">Add Book</RouterLink>
                <RouterLink to="/editBook">Edit Book</RouterLink>
            </nav>
            </div> 
        
        </header>
        <RouterView/>
    </div>

 
</template>

<style scoped></style>
