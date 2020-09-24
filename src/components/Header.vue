<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark z4">
    <router-link class="navbar-brand" to="/">Trudeau</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/course" tag="li" class="nav-item" activeClass="active"
          ><a class="nav-link">Courses</a></router-link
        >
        <router-link to="/video" tag="li" class="nav-item" activeClass="active"
          ><a class="nav-link">Video</a></router-link
        >
        <router-link
          to="/filemanager"
          tag="li"
          class="nav-item"
          activeClass="active"
          ><a class="nav-link">File Manager</a></router-link
        >
        <router-link to="/notes" tag="li" class="nav-item" activeClass="active"
          ><a class="nav-link">Notes</a></router-link
        >
        <router-link to="/forum" tag="li" class="nav-item" activeClass="active"
          ><a class="nav-link">Forum</a></router-link
        >
        <router-link
          to="/analytics"
          tag="li"
          class="nav-item"
          activeClass="active"
          ><a class="nav-link">Analytics</a></router-link
        >
      </ul>
      <ul class="navbar-nav nav-right m-1">
        <b-dropdown right variant="dark" text="Account" style="outline:0">
          <b-dropdown-item><router-link to = "/profile">Student Profile</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to = "/staffProfile">Staff Profile</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to = "/adminProfile">Administrator</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to = "/settings">Settings</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to = "/login">Logout</router-link></b-dropdown-item>
        </b-dropdown>
        <!-- <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="/account"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Accounts</a
          >
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Settings</a>
            <a class="dropdown-item" href="#">Logout</a>
          </div>
        </li> -->
      </ul>
      <b-button size="sm" variant="primary" v-b-toggle.sidebar-right>
        <b-icon icon="layout-sidebar-reverse" aria-label="Help"></b-icon>
      </b-button>
    </div>
  </nav>
</template>

