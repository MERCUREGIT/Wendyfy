<template>
  <div class="row tab-pane fade show active" id="realized" role="tabpanel" aria-labelledby="realized-tab">
    <div class="col-md-12">
      <div class="card r-0 shadow p-3">
        <div class="table-responsive">
          <form>
            <div v-if="realized_measures == undefined" class="alert alert-light">
              <div class="d-flex align-items-center">
                <strong>Chargement des commandes réalisées ...</strong>
                <div class="spinner-border spinner-border-sm ms-auto" role="status" aria-hidden="true"></div>
              </div>
            </div>
            <div v-else>
              <sui-input v-model="searchString"  name="title" type="text" id="createColorName" placeholder="Rechercher..."
                         class="float-end"  @input="onSearch"/>
            <table  class="table table-striped table-hover r-0 mt-4">
              <thead>
              <tr class="no-b">
                <th>NOM CLIENT</th>
                <th>TELEPHONE</th>
                <th>EMAIL</th>
                <th>PAYS</th>
                <th>VILLE</th>
                <th>ACTION</th>
              </tr>
              </thead>

              <tbody>

              <tr v-bind:key="index" v-for="(realized_measure, index) in measures">
                <td>
                  <strong>{{ realized_measure.user.name }}</strong>
                </td>
                <td>{{ realized_measure.user.telephone }}</td>
                <td>{{ realized_measure.user.email }}</td>
                <td>{{ realized_measure.user.country }}</td>
                <td>{{ realized_measure.user.city }}</td>
                <td>
                  <a @click="editOrderStatus(realized_measure._id)" class="btn btn-danger mr-3 action-btn"><i
                      class="fas fa-ban"></i></a>
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
                            <span><b>Bassin:</b> {{ realized_measure.productMeasures.bassin }}cm</span>
                          </div>
                          <div class="col-4">
                            <span><b>Cuisse:</b> {{ realized_measure.productMeasures.cuisse }}cm</span>
                          </div>
                          <div class="col-4">
                            <span><b>Epaule:</b> {{ realized_measure.productMeasures.epaule }}cm</span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-3">
                            <span><b>Fond:</b> {{ realized_measure.productMeasures.fond }}cm</span>
                          </div>
                          <div class="col-3">
                            <span><b>Hanche:</b> {{ realized_measure.productMeasures.hanche }}cm</span>
                          </div>
                          <div class="col-6">
                            <span><b>Longueur pantalon:</b> {{
                                realized_measure.productMeasures.longeurPantalon
                              }}cm</span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-5">
                            <span><b>Longueur manche:</b> {{ realized_measure.productMeasures.longueurManche }}cm</span>
                          </div>
                          <div class="col-4">
                            <span><b>Mollet:</b> {{ realized_measure.productMeasures.mollet }}cm</span>
                          </div>
                          <div class="col-3">
                            <span><b>Pied:</b> {{ realized_measure.productMeasures.pied }}cm</span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <span><b>Poitrine:</b> {{ realized_measure.productMeasures.poitrine }}cm</span>
                          </div>
                          <div class="col-3">
                            <span><b>Taille:</b> {{ realized_measure.productMeasures.taille }}cm</span>
                          </div>
                          <div class="col-5">
                            <span><b>Tour de manche:</b> {{ realized_measure.productMeasures.tourDeManche }}cm</span>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '../../../config/address.js'
import axios from 'axios'

export default {
  data() {
    return {measures: this.realized_measures, searchString: ''}
  },
  props: ['realized_measures'],
  name: 'Realized',
  mounted() {

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
        this.measures = this.realized_measures;
        return;
      }
      this.measures = this.realized_measures.filter(({user}) => {
        console.log(user.email,user.name,user.telephone,user.country,user.city)
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
      console.log(this.measures)
    }
  }
}
</script>

<style></style>