<template>
  <div>
    <b-sheet tile height="54" class="d-flex">
      <b-button icon class="ma-2" @click="$refs.calendar.prev()">
        <b-icon>mdi-chevron-left</b-icon>
      </b-button>
      <b-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
      ></b-select>
      <b-select
        v-model="mode"
        :items="modes"
        dense
        outlined
        hide-details
        label="event-overlap-mode"
        class="ma-2"
      ></b-select>
      <b-select
        v-model="weekday"
        :items="weekdays"
        dense
        outlined
        hide-details
        label="weekdays"
        class="ma-2"
      ></b-select>
      <b-spacer></b-spacer>
      <b-button icon class="ma-2" @click="$refs.calendar.next()">
        <b-icon>mdi-chevron-right</b-icon>
      </b-button>
    </b-sheet>
    <b-sheet height="600">
      <b-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        @change="getEvents"
      ></b-calendar>
    </b-sheet>
  </div>
</template>
<script>
export default {};
</script>
