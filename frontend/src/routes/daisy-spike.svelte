<h1>heading 1</h1>
<h2>heading 2</h2>

<h3>Colours:</h3>
<div class="flex">
  <div class="bg-primary w-48 text-white">primary</div>
  <div class="bg-primary-focus w-48 text-white">primary-focus</div>
</div>
<div class="flex">
  <div class="bg-secondary w-48 text-white">secondary</div>
  <div class="bg-secondary-focus w-48 text-white">secondary-focus</div>
</div>
<div class="flex">
  <div class="bg-accent w-48 text-white">accent</div>
  <div class="bg-accent-focus w-48 text-white">accent-focus</div>
</div>
<div class="flex">
  <div class="bg-success w-48 text-base-100">success</div>
  <div class="bg-error w-48 text-white">error</div>
</div>
<div class="flex">
  <div class="bg-base-100 w-48 ">base-100</div>
  <div class="bg-base-200 w-48 ">base-200</div>
  <div class="bg-base-300 w-48 ">base-300</div>
  <div class="bg-base-400 w-48 ">base-400</div>
</div>
<div class="flex">
  <div class="bg-blue-light w-48 text-white">blue-light</div>
  <div class="bg-blue-dark w-48 text-white">blue-dark</div>
</div>

<h3>Buttons:</h3>
<div class="flex" />
<button class="btn btn-primary">primary color button</button>
<button class="btn btn-secondary">secondary color button</button>
<button class="btn btn-accent">accent color button</button>

<div class="alert shadow-lg">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="stroke-info flex-shrink-0 w-6 h-6"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg
    >
    <span>12 unread messages. Tap to see.</span>
  </div>
</div>

<div class="avatar">
  <div class="w-24 rounded-xl">
    <img src="https://api.lorem.space/image/face?hash=64318" />
  </div>
</div>
<div class="avatar">
  <div class="w-24 rounded-full">
    <img src="https://api.lorem.space/image/face?hash=92310" />
  </div>
</div>

<div class="badge">neutral</div>
<div class="badge badge-primary">primary</div>
<div class="badge badge-secondary">secondary</div>
<div class="badge badge-accent">accent</div>
<div class="badge badge-ghost">ghost</div>

<div class="card w-96 bg-base-100 shadow-xl">
  <figure>
    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      Shoes!
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>

<input
  type="text"
  placeholder="Type here"
  class="input input-bordered w-full max-w-xs"
/>

<input type="radio" name="radio-2" class="radio radio-primary" checked />
<input type="radio" name="radio-2" class="radio radio-primary" />

<input type="checkbox" class="toggle" checked />

<div class="text-sm breadcrumbs">
  <ul>
    <li><a>Home</a></li>
    <li><a>Documents</a></li>
    <li>Add Document</li>
  </ul>
</div>

<a class="link">I'm a simple link</a>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a>Item 1</a></li>
        <li tabindex="0">
          <a class="justify-between">
            Parent
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              ><path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              /></svg
            >
          </a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><a>Item 1</a></li>
      <li tabindex="0">
        <a>
          Parent
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            ><path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            /></svg
          >
        </a>
        <ul class="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Get started</a>
  </div>
</div>

<ul class="steps steps-vertical">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>

<div class="tabs">
  <a class="tab tab-bordered">Tab 1</a>
  <a class="tab tab-bordered tab-active">Tab 2</a>
  <a class="tab tab-bordered">Tab 3</a>
</div>
