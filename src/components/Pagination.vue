<template>
  <div class="pagination">
    <div class="pagination__container-buttons">
      <button class="pagination__buttonL" @click="paginationLeft">«</button>
      <button
        id="1"
        :class="
          flagIs == '1' ? 'pagination__buttons--active' : 'pagination__buttons'
        "
        @click="pagination1"
      >
        1
      </button>
      <button
        id="2"
        :class="
          flagIs == '2' ? 'pagination__buttons--active' : 'pagination__buttons'
        "
        @click="pagination2"
      >
        2
      </button>
      <button
        id="3"
        :class="
          flagIs == '3' ? 'pagination__buttons--active' : 'pagination__buttons'
        "
        @click="pagination3"
      >
        3
      </button>
      <button
        id="4"
        :class="
          flagIs == '4' ? 'pagination__buttons--active' : 'pagination__buttons'
        "
        @click="pagination4"
      >
        4
      </button>
      <button
        id="5"
        :class="
          flagIs == '5' ? 'pagination__buttons--active' : 'pagination__buttons'
        "
        @click="pagination5"
      >
        5
      </button>
      <button class="pagination__buttonR" @click="paginationRight">»</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      flags: 1,
    };
  },

  computed: {
    flagIs: function () {
      return this.flags;
    },
  },

  methods: {
    pagination1() {
      this.$emit("paginationCall", {
        page: 1,
      });
      this.flags = 1;
    },
    pagination2() {
      this.$emit("paginationCall", {
        page: 2,
      });
      this.flags = 2;
    },
    pagination3() {
      this.$emit("paginationCall", {
        page: 3,
      });
      this.flags = 3;
    },
    pagination4() {
      this.$emit("paginationCall", {
        page: 4,
      });
      this.flags = 4;
    },
    pagination5() {
      this.$emit("paginationCall", {
        page: 5,
      });
      this.flags = 5;
    },
    paginationRight() {
      this.$emit("paginationCall", {
        page: ">",
      });
      if (this.flags == 5) {
          this.flags = 1;
        } else {
          this.flags = this.flags + 1;
        }
    },
    paginationLeft() {
      this.$emit("paginationCall", {
        page: "<",
      });
      if (this.flags == 1) {
          this.flags = 5;
        } else {
          this.flags = this.flags - 1;
        }
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
    background-color: #72bbdd;

    &--active {
      height: 2.5rem;
      width: 2.5rem;
      border: 2px solid transparent;
      margin: 0;
      background-color: #d1d1d1;
      color: #1a293b;
    }
  }
  &__buttonR {
    height: 2.5rem;
    width: 2.5rem;
    border: 2px solid transparent;
    margin: 0;
    border-radius: 0px 8px 8px 0px; //top-left, top-right, bottom-right, bottom-left
    background-color: #72bbdd;
  }
  &__buttonL {
    height: 2.5rem;
    width: 2.5rem;
    border: 2px solid transparent;
    margin: 0;
    border-radius: 8px 0px 0px 8px; //top-left, top-right, bottom-right, bottom-left
    background-color: #72bbdd;
  }
}

.pagination__buttons:hover {
  background-color: #d1d1d1;
}
.pagination__buttonR:hover {
  background-color: #d1d1d1;
}
.pagination__buttonL:hover {
  background-color: #d1d1d1;
}
</style>