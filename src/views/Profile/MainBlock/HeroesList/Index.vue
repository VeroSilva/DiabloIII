<template>
  <div>
    <h1>Heroes List</h1>

    <div class="heroes-list border-top border-secondary mt-5 pt-5">
      <b-table
        hover
        striped
        dark
        :items="heroes"
        :fields="fields"
        stacked="sm"
        small
      >
        <template v-slot:cell(name)="data">
          <HeroIco :hero="data.item"/>
        </template>
        <template v-slot:cell(class)="data">
          <HeroClassLevel :hero="{ classSlug: data.item.classSlug, level: data.item.level }"/>
        </template>
        <template v-slot:cell(kills)="data">
          <span>{{ data.item.kills.elites | formatNumber }}</span>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import HeroIco from './HeroIco'
import HeroClassLevel from './HeroClassLevel'
import { formatNumber } from '@/filters/numeral'

export default {
  name: 'HeroesList',
  components: { HeroIco, HeroClassLevel },
  filters: {
    formatNumber
  },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'class',
          label: 'Class',
          sortable: true
        },
        {
          key: 'kills',
          label: 'Elite Kills',
          sortable: true
        }
      ]
    }
  }
}
</script>
