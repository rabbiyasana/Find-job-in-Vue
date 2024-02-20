<template>
    <header>
      <div class="w-full mx-auto bg-white">
        <nav class="container w-80vw mx-auto lg:flex flex-wrap items-start justify-start py-3">
          <a class="font-semibold ml-5 text-3xl" href="/">
            <strong class="text-blue-800">J</strong>obster
          </a>
          <button
            class="navbar-toggler lg:hidden px-2 py-1 text-xl"
            type="button"
            id="dropdownDefaultButton"
            @click="toggleNavbar"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <div :class="{ 'lg:flex': true, 'flex': isNavbarOpen, 'hidden': !isNavbarOpen }" class="divide-y divide-gray-100 rounded-lg" id="dropdown">
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto" aria-labelledby="dropdownDefaultButton">
              <li>
                <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/">Home</a>
              </li>
              <li>
                <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/about">About</a>
              </li>
              <li>
                <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/findJob">Find Job</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isNavbarOpen: false,
      };
    },
    methods: {
      toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen;
      },
    },
  };
  </script>
  
  <style>
  /* Add your styles here if any */
  </style>
  