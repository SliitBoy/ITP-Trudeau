<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
        <router-link to="/filemanager" tag="li" class="nav-item" activeClass="active"
          ><a class="nav-link">File Manager</a></router-link
        >
        <router-link to="/notes" tag="li" class="nav-item" activeClass="active"
          ><a class="nav-link">Notes</a></router-link
        >
        <router-link to="/forum" tag="li" class="nav-item" activeClass="active"
          ><a class="nav-link">Forum</a></router-link
        >
        <router-link to="/analytics" tag="li" class="nav-item" activeClass="active"
          ><a class="nav-link">Analytics</a></router-link
        >
        <router-link to="/accounts" tag="li" class="nav-item" activeClass="active"
          ><a class="nav-link">Accounts</a></router-link
        >
        <router-link to="/quiz" tag="li" class="nav-item" activeClass="active"
          ><a class="nav-link">Quiz</a></router-link
        >
      </ul>
      <ul class="navbar-nav nav-right">
        <li class="nav-item dropdown">
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
        </li>
      </ul>
    </div>
  </nav>
</template>
