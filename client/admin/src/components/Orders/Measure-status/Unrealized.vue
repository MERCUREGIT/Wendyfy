<template>
  <div class="row tab-pane fade" id="unrealized" role="tabpanel" aria-labelledby="undelivered-tab">
    <div class="col-md-12">
      <div class="card r-0 shadow p-3">
        <div class="table-responsive">
          <form>

            <sui-input v-model="searchString"  name="title" type="text" id="createColorName" placeholder="Rechercher..."
                       class="float-end"  @input="onSearch"/>
            <table class="table table-striped table-hover r-0">
              <thead>
              <tr class="no-b">
                <th>NOM CLIENT</th>
                <th>TELEPHONE</th>
                <th>EMAIL</th>
                <th>PAYS</th>
                <th>VILLE</th>
                <th></th>
              </tr>
              </thead>

              <tbody>

              <tr v-bind:key="unrealized_measure._id" v-for="unrealized_measure in measures">
                <td>
                  {{ unrealized_measure.user.name }}
                </td>
                <td>{{ unrealized_measure.user.telephone }}</td>
                <td>{{ unrealized_measure.user.email }}</td>
                <td>{{ unrealized_measure.user.country }}</td>
                <td>{{ unrealized_measure.user.city }}</td>
                <td>
                  <a @click="editOrderStatus(unrealized_measure._id)" class="btn btn-success mr-3 action-btn"><i
                      class="fas fa-check"></i></a>
                  <button type="button" class="btn btn-primary mr-3 action-btn offset-sm-1" data-bs-toggle="modal"
                          :data-bs-target="'#showMeasuresDetails'+index"><i class="fas fa-pencil-ruler"></i></button>
                </td>
                <div class="modal fade" :id="'showMeasuresDetails'+index" tabindex="-1"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Détails des mesures</h5>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <div class="col-4">
                            <span><b>Bassin:</b> {{ unrealized_measure.productMeasures.bassin }}cm</span>
                          </div>
                          <div class="col-4">
                            <span><b>Cuisse:</b> {{ unrealized_measure.productMeasures.cuisse }}cm</span>
                          </div>
                          <div class="col-4">
                            <span><b>Epaule:</b> {{ unrealized_measure.productMeasures.epaule }}cm</span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-3">
                            <span><b>Fond:</b> {{ unrealized_measure.productMeasures.fond }}cm</span>
                          </div>
                          <div class="col-3">
                            <span><b>Hanche:</b> {{ unrealized_measure.productMeasures.hanche }}cm</span>
                          </div>
                          <div class="col-6">
                            <span><b>Longueur pantalon:</b> {{ unrealized_measure.productMeasures.longeurPantalon }}cm</span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-5">
                            <span><b>Longueur manche:</b> {{ unrealized_measure.productMeasures.longueurManche }}cm</span>
                          </div>
                          <div class="col-4">
                            <span><b>Mollet:</b> {{ unrealized_measure.productMeasures.mollet }}cm</span>
                          </div>
                          <div class="col-3">
                            <span><b>Pied:</b> {{ unrealized_measure.productMeasures.pied }}cm</span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <span><b>Poitrine:</b> {{ unrealized_measure.productMeasures.poitrine }}cm</span>
                          </div>
                          <div class="col-3">
                            <span><b>Taille:</b> {{ unrealized_measure.productMeasures.taille }}cm</span>
                          </div>
                          <div class="col-5">
                            <span><b>Tour de manche:</b> {{ unrealized_measure.productMeasures.tourDeManche }}cm</span>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
                      </div>
                    </div>
                  </div>
                </div>
              </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*import address from '../../../config/address.js' */
import axios from 'axios';
import config from '../../../config/address.js';

export default {
  props: ['unrealized_measures'],
  name: 'Unrealized',
  data() {
    return {measures: this.unrealized_measures, searchString: ''}
  },
  methods: {
    editOrderStatus(id) {
      axios.patch(`${config.server}/special-order/delivery-status/${id}`, null, {headers: {...config.headers}}).then(() => {
        this.$router.go();
      }).catch((error) => {
        console.log(error);
      })
    },
    onSearch() {

      if (!this.searchString) {
        this.measures = this.unrealized_measures;
        return;
      }
      this.measures = this.unrealized_measures.filter(({user}) => {
        if (
            (user.email && user.email.includes(this.searchString)) ||
            (user.name && user.name.includes(this.searchString)) ||
            (user.telephone && user.telephone.toString().includes(this.searchString)) ||
            (user.country && user.country.includes(this.searchString)) ||
            (user.city && user.city.includes(this.searchString))

        ) {
          return true;
        }
        return false
      })
    }
  }
}
</script>

<style>

</style>