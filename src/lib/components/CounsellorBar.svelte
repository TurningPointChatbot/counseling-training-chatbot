<div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="navbar bg-primary">
        <div class="flex-none">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
            </div>
          </label>
          <ul tabindex="0">
            <li>
              <a>
                <div>
                  Counsellor
                  <br/>
                  <b>Name</b>
                </div>
              </a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
  
      <slot />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay" />
      <ul class="ul1">
        <li>
          <a href="/counsellor/dashboard" rel="prefetch" class="nav-link">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/modules" rel="prefetch" class="nav-link">
            Chat Training
          </a>
        </li>
        <li>
          <a href="/counsellor/dashboard" rel="prefetch" class="nav-link">
            Forum Moderation
          </a>
        </li>
        <li>
          <a href="/counsellor/dashboard" rel="prefetch" class="nav-link">
            Email Training
          </a>
        </li>
      </ul>
    </div>
  </div>
  