<template>
  <div id="zeTable" >
    <table v-if="elements.length>0||force" class="table table-hover table-bordered dtables"
           :id="'dtables-'+this.tableId">
      <thead style="margin-top: 10px;" v-on:click="mountagain">
      <tr style="background: #212529!important;font-size: 12pt">
        <th v-for="header in headers" :key="header" style="border: none;color: white">{{ header }}</th>
      </tr>
      </thead>
      <tbody style="border: 1px solid #eee;">
      <tr v-for="(element,index) in elements" :key="index">
        <td v-for="(column,index2) in Object.keys(element)" :key="`thestuff-${index2}`">
          <span v-if="column!=='action'">{{ element[column] }}</span>
          <sui-button v-else-if="!Array.isArray(element[column])" v-on:click="element[column].onClick"
                      style="margin:0px!important;" :content="element[column].name" color="black"
                      class="mt-3 float-end mb-4"></sui-button>
          <sui-button v-else v-for="(action,index) in element[column]" :key="index+'action'" v-on:click="action.onClick"
                      style="margin:0px!important;margin-right: 10px!important;" :content="action.name" color="black"
                      class="mt-3 float-end mb-4 mr-2"></sui-button>
        </td>
      </tr>
      </tbody>
      <tfoot style="display:none">
      <tr style="background: #212529!important;">
        <th v-for="header in headers" :key="header" style="border: none;color: white">{{ header }}</th>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
//Bootstrap and jQuery libraries
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-dt/js/dataTables.dataTables"
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
//Datatable Modules
import $ from 'jquery';

export default {
  name: "DataTables",
  props: ['elements', 'headers', 'force', 'tableId'],
  methods:{
    mountagain(){
      /*$('#dtables-' + this.tableId).DataTable({
        "language": {
          "lengthMenu": "Afficher _MENU_ enregistrements par page",
          "zeroRecords": "Rien trouvé - désolé",
          "info": "Affichage de la page _PAGE_ / _PAGES_",
          "infoEmpty": "Aucun enregistrement disponible",
          "infoFiltered": "(filtré à partir de _MAX_ enregistrements totaux)"
        }
      });*/
    },
  },
  mounted() {
    // $.fn.dataTable.ext.errMode = 'none';
    if (this.elements.length > 0 || this.force) {
     // setTimeout(function () {
       $('#dtables-' + this.tableId).DataTable({
         "language": {
           "lengthMenu": "Afficher _MENU_ enregistrements par page",
           "zeroRecords": "Rien trouvé - désolé",
           "info": "Affichage de la page _PAGE_ / _PAGES_",
           "infoEmpty": "Aucun enregistrement disponible",
           "infoFiltered": "(filtré à partir de _MAX_ enregistrements totaux)"
         }
       });
     // },300)
    }
  },
  data: function () {
    return {
      settings: {
        "language": {
          "lengthMenu": "Afficher _MENU_ enregistrements par page",
          "zeroRecords": "Rien trouvé - désolé",
          "info": "Affichage de la page _PAGE_ / _PAGES_",
          "infoEmpty": "Aucun enregistrement disponible",
          "infoFiltered": "(filtré à partir de _MAX_ enregistrements totaux)"
        },

      }
    }
  },
  watch: {
    elements: {
      handler: function () {
        if (this.elements.length > 0) {
          setTimeout(function () {
            $('#dtables-' + this.tableId).DataTable({
              "language": {
                "lengthMenu": "Afficher _MENU_ enregistrements par page",
                "zeroRecords": "Rien trouvé - désolé",
                "info": "Affichage de la page _PAGE_ / _PAGES_",
                "infoEmpty": "Aucun enregistrement disponible",
                "infoFiltered": "(filtré à partir de _MAX_ enregistrements totaux)"
              }
            });
          }, 300)
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>

.dtables > :not(caption) > * > * {
  border-bottom-width: 1px !important;
}

#zeTable .table > :not(:last-child) > :last-child > * {
  border-bottom-color: inherit !important;
}

#zeTable .dataTables_length {
  margin-bottom: 20px !important;
}

.dtables tr, table.dataTable tbody th, table.dataTable tbody td {
  padding: 15px !important;
}

.dtables th {
  padding: 15px !important;
}

.dtables tr[data-v-bbb242bc], table.dataTable tbody th[data-v-bbb242bc], table.dataTable tbody td[data-v-bbb242bc] {
  padding: 15px !important;
  border-right: inherit !important;
  border-left: inherit !important;
}
</style>
