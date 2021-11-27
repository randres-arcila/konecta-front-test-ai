<template>
  <div class="pagination">
    <div class="pagination__container-buttons">
      <button class="pagination__buttons">«</button>
      <button id="1" class="pagination__buttons" @click="pagination1">1</button>
      <button id="2" class="pagination__buttons" @click="pagination2">2</button>
      <button id="3" class="pagination__buttons" @click="pagination3">3</button>
      <button id="4" class="pagination__buttons" @click="pagination4">4</button>
      <button id="5" class="pagination__buttons" @click="pagination5">5</button>
      <button class="pagination__buttons">»</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      flags: [true, false, false, false, false],
    };
  },

  methods: {
    pagination1() {
      this.$emit("paginationCall", {
        page: '1',
      });
    },
    pagination2() {
      this.$emit("paginationCall", {
        page: '2',
      });
    },
    pagination3() {
      this.$emit("paginationCall", {
        page: '3',
      });
    },
    pagination4() {
      this.$emit("paginationCall", {
        page: '4',
      });
    },
    pagination5() {
      this.$emit("paginationCall", {
        page: '5',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: grid;
  align-content: center;
  &__buttons {
    height: 2.5rem;
    width: 2.5rem;
    border: 2px solid transparent;
    margin: 0;

    &--active {
      background-color: #72bbdd;
      color: white;
    }
  }
}

.pagination__buttons:hover {
  background-color: #d1d1d1;
}
</style>