import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div class="py-0">
  <nav
    class="relative px-4 py-4 flex justify-between items-center border-y border-gray-400 dark:border-gray-700">
    <a class="text-3xl font-bold leading-none" href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#0DA8BC"
        class="w-8 h-8">
        <path
          fill-rule="evenodd"
          d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
          clip-rule="evenodd"></path>
        <path
          d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"></path>
      </svg>
    </a>
    <div class="lg:hidden">
      <button
        class="navbar-burger flex items-center text-gray-600 dark:text-gray-300 p-3">
        <svg
          class="block h-4 w-4 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <ul
      class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
      <li>
        <a
          class=" font-semibold text-base text-gray-500 hover:text-gray-600 dark:text-gray-300"
          href="#">
          Home
        </a>
      </li>
      <li class="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 current-fill"
          viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
      </li>
      <li>
        <a class=" text-base text-[#0DA8BC] font-bold" href="#">About Us</a>
      </li>
      <li class="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 current-fill"
          viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
      </li>
     
    
    
     
      <li>
        <a
          class="font-semibold text-base text-gray-500 hover:text-gray-600 dark:text-gray-300"
          href="#">
          Contact
        </a>
      </li>
    </ul>
    <div class="space-x-2 hidden lg:block">
      <button
        class="rounded-md border border-[#0DA8BC] px-3.5 py-1.5 text-base font-semibold leading-7 text-[#0DA8BC] hover:bg-[#0dbcbc33] hover:bg-opcaity-1">
        Login
      </button>
      <button
        class="rounded-md bg-[#0DA8BC] px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-opacity-80">
        SignUp
      </button>
    </div>
  </nav>
</div>

    </div>
  )
}

export default Navbar