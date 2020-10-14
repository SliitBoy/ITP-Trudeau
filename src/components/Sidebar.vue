<template>
  <div>
    <b-sidebar
      id="sidebar-right"
      no-close-on-route-change
      no-header
      right
      shadow
      bg-variant="dark"
      text-variant="light"
      width="400px"
      color="#b5b1b1"
    >
      <div class="px-3 py-2">
        <div style="height: 330px">
          Notifications 
          <div id="calendar" min-width="350px" >
          <router-link to="/Notifications" >
            <button block href="#" class="v-btn v-btn--contained theme--light v-size--default" >
              <div class="adminField">
                 <h5 width="350px">-Check Notifications Here-</h5>
              </div>
            </button>
          </router-link>
        </div>
        </div>
        
        <div id="calendar" min-width="350px" >
          <router-link to="/Calendar" >
            <button block href="#" class="v-btn v-btn--contained theme--light v-size--default" >
              <div class="adminField">
                 <h5 width="350px">-Click here to add events -</h5>
              </div>
            </button>
          </router-link>
        </div>
        <div>
           <b-row>
             <b-col md="auto">
               <b-calendar v-model="value" width="350px" @context="onContext" locale="en-US"></b-calendar>
             </b-col>
             <b-col>
               
              
             </b-col>
          </b-row>
        </div>
        <div>
           
        </div>
      </div>
    </b-sidebar>
  </div>
</template>
