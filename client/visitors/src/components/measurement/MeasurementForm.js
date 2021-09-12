import React, { Component } from 'react';
import axios from 'axios';
import Countries from '../../data/countries/country-by-name.json';
import Sexe from '../../data/gender/Gendre.json';
import {routes} from '../../config/routes'
import { multilanguage } from "redux-multilanguage";
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";

class  MeasurementForm  extends Component {
 

    state = {
        // isMeasure:false,
        name: "",
        country: "",
        city: "",
        telephone: "",
        gender: "",
        email: "",
        hauteur: 0,
        largeur: 0,
        epaule: 0,
        poitrine:0,
        taille: 0,
        bassin: 0,
        tourDeManche: 0,
        longueurManche: 0,
        longueurHaut: 0,
        hanche: 0,
        cuisse: 0,
        fond: 0,
        mollet: 0,
        pied: 0,
        longeurPantalonRobe: 0,
    }
    componentDidMount(){
      const  user= this.props.user;
      this.setState((state)=> {
        return {...state,name : user.username, user : user.userid, email : user.useremail}
       });
    }
     
      handleInputChange = (e) => {
        const { name, value } = e.target;
        
        this.setState({ [name]: value });
        console.log(this.state)
      }
      handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.loading){
            return;
        }
        this.setState({loading:true,error:false})
        axios.post(`${routes.server}/special-order`, {...this.state})
            .then(res=>{
                console.log(res)
                for(const objKey in this.state){
                    if(typeof(this.state[objKey]) === Number)
                    {this.setState({[objKey]:0})}
                    else{
                        this.setState({[objKey]:""})
                    }
                }
                this.setState({loading:false,done:true})
            })
            .catch(err=> {
                console.log(err);
                this.setState({loading:false,error:true})

            });
      }

    render(){
      const { strings } = this.props
        if(this.state.done){
            return <div>
                <h2> {strings["process_completed"]}</h2>
                <p>{strings['your_measures_taken']}</p>
                <div className="row align-center slider-btn btn-hover">
                    <input style={{backgroundColor: " #FFC700", width: "300px", marginRight: "auto", marginLeft: "auto"}}
                           className=" animated" disabled={this.state.loading} onClick={e=>{global.setModalContent(null)}} type="submit" value={strings['close']}/></div>
            </div>
        }
        return(
            <form onSubmit={this.handleSubmit}>
            <div className="row justify-content-md-center">
                <div className="col-12 col-md-5">
                    <h1> {strings["personal_information"]}</h1>
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="billing-info mb-20">
                          <label>{strings['name_and_surname']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.name} name="name" type="text"/>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>Pays</label>
                          <select onChange={(e)=>this.handleInputChange(e)} value={this.state.country} name="country">
                            <option>{strings['choose_a_country']}</option>
                            {Countries.map(country=><option key={country.country} value={country.country}>{country.country}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>{strings['gender']}</label>
                          <select onChange={(e)=>this.handleInputChange(e)} value={this.state.gender} name="gender">
                            <option>{strings['your_gender']}</option>
                            {Sexe.map(sexe=><option key={sexe.gender} value={sexe.gender}>{sexe.gender}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>{strings['town_and_quarter']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.city} name="city" type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="billing-info mb-20">
                          <label>{strings['telephone']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.telephone} name="telephone" type="tel" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="billing-info mb-20">
                          <label>{strings['email']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)}  value={this.state.email} name="email" type="email" />
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-12  col-md-7">
               
                    <h1>{strings["your_measures"]} (cm)</h1>
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{strings['shoulder']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.epaule} name="epaule" type="number"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{strings['chest']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.poitrine} name="poitrine" type="number"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{strings['waist']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.taille} name ="taille" type="number"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{strings['pelvis']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.bassin} name="bassin" type="number"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{strings['sleeve_turn']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.tourDeManche} name="tourDeManche" type="number"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{strings['sleeve_length']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.longueurManche} name="longueurManche" type="number"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{strings['top_length']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.longueurHaut} name="longueurHaut" type="number"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{strings['hip']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.hanche} name="hanche" type="number"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{strings['thigh']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.cuisse} name="cuisse" type="number"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{strings['bottom']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.fond}  name="fond" type="number"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{strings['mollet']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.mollet} name="mollet" type="number"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{strings['foot']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.pied} name="pied" type="number"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{strings['trouser_length']}</label>
                          <input onChange={(e)=>this.handleInputChange(e)} value={this.state.longeurPantalonRobe} name="longeurPantalonRobe" type="number"/>
                        </div>
                      </div>
                    </div>
            </div>
        </div>
                {this.state.error && <center><p style={{color: "red"}}>{strings['subs_connection_error']}</p></center>}
        <div className="row align-center slider-btn btn-hover">
            <input style={{backgroundColor: " #FFC700", width: "300px", marginRight: "auto", marginLeft: "auto"}}
                    className=" animated" disabled={this.state.loading} type="submit" value={this.state.loading?strings['subs_sending']:strings['submit']}/>

        </div><center><Button type={"button"} className={"btn"} color={"error"} onClick={e=>{global.setModalContent(null)}} style={{marginTop:10,backgroundColor:"black",borderRadius:0,border:"none"}}>{strings['cancel_and_close']}</Button></center>
    </form>
        )
    }

 }
MeasurementForm.propTypes = {
    strings: PropTypes.object
};

const mapStateToProps = state => {
  return {
      user: state.authentication,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//       deleteAllFromCart: addToast => {
//           dispatch(deleteAllFromCart(addToast));
//       }
//   };
// };


export default connect(mapStateToProps)(multilanguage(MeasurementForm));

 