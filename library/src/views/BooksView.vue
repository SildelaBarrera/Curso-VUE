<template>
  <main>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Type</th>
          <th>Price</th>
          <!-- <th>Image</th> -->
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id_book">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.type }}</td>
          <td>{{ book.price }}</td>
          <!-- <td>{{ book.photo }}</td> -->
         
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      listar();
    });

    const books = ref([]);

    const listar = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books");
        books.value = response.data;
        console.log(books.value); 
      } 
      catch (error) {
        console.log("Error al leer libros del endpoint", error);
      }
    };

    return {
      books,
    };
  },
};
</script>

<style></style>
