import React, { Component } from "react";
import TronWeb from "tronweb";

import Web3 from "web3";

import Inicio from "../Inicio";
import MyWallet from "../Wallet";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallet: 0,
      address: "Conectar Billetera",
      red: "",
      tronlink: {
        installed: false,
        loggedIn: false,
        tronweb: null
      },
      metamask:{
        installed: false,
        loggedIn: false,
        web3: null
      }
    };
    this.wallet = this.wallet.bind(this);
    this.conectar = this.conectar.bind(this);
  }

  async componentDidMount() {

    /* 

    wallet = 0 // tronlink
    wallet = 1 // metamask

    */

    var wallet = 0;

    if(window.localStorage) {

      if(!window.localStorage.getItem("wallet") ){
        window.localStorage.setItem("wallet", "0");

      }else{
        wallet = parseInt( window.localStorage.getItem("wallet") );

      }
    }

    this.conectar();

    setInterval(() => {
      this.conectar();
    }, 3*1000);
    
  }

  async conectar(){

    switch (parseInt( window.localStorage.getItem("wallet") )) {
      case 0:

        if (typeof window.tronLink !== 'undefined') { 

          window.tronLink.request({method: 'tron_requestAccounts'}).then(()=>{
            const tronWebState = {
              installed: !!window.tronWeb,
              loggedIn: window.tronWeb && window.tronWeb.ready,
              tronWeb: window.tronWeb
            };
      
            if (tronWebState.installed) {
              this.setState({
                red: "(TRON)",
                tronlink: tronWebState
              });
        
            }
          })
          .catch(()=>{

            this.setState({
              red: "(TRON)",
              tronlink: {
                installed: false,
                loggedIn: false,
                tronWeb: window.tronWeb
              }
            });


          })

          window.tronWeb.trx.getAccount()
          .then(result => {
            result = window.tronWeb.address.fromHex(result.address);
            this.setState({
              red: "(TRON)",
              address:result
            })
          })
          .catch(()=>{
            document.getElementById("login").innerHTML = "Cargando...";
            this.setState({
              red: "(TRON)",
              address:"Cargando..."
            })
            
          })
        }
        
        break;

      case 1:

        if (typeof window.ethereum !== 'undefined') {           
          window.ethereum.request({ method: 'eth_requestAccounts' })
          .then((accounts) => {
            //console.log(accounts)
            var web3 = new Web3(window.web3.currentProvider);
              /*var contractToken = new web3.eth.Contract(
              abiToken,
              addressToken
            );*/
            this.setState({
              address: accounts[0],
              red: "(BTTC)",
              metamask: {
                installed: true,
                loggedIn: true,
                web3: web3
              }
            })
          })
          .catch((error) => {
            console.error(error)
            this.setState({
              address:"Cargando...",
              red: "(BTTC)",
              metamask: {
                installed: false,
                loggedIn: false,
                web3: null
              }
            })   
          });
  
        } else {    
          this.setState({
            address:"Cargando...",
            red: "(BTTC)",
            metamask: {
              installed: false,
              loggedIn: false,
              web3: null
            }
          })         
             
        }

        break;
    
      default:
        alert("porfavor selecione una billetera")
        break;
    }


   

  }

  async wallet(){
    
  }

  render() {

    if(this.state.address === "Cargando..." || this.state.address === "Conectar Billetera"){
      document.getElementById("login").innerHTML = "Cargando... "+this.state.red;
    }else{
      document.getElementById("login").innerHTML = this.state.address.substr(0,3)+"..."+this.state.address.substr(-3)+" "+this.state.red;
    }

    

    var getString = "";
    var loc = document.location.href;
    //console.log(loc);
    if(loc.indexOf('?')>0){
              
      getString = loc.split('?')[1];
      getString = getString.split('#')[0];

    }

    switch (getString) {
      case "wallet": 
      case "Wallet": 
    
        return (
          <>
            <MyWallet/>
          </>
        );
      
    
      default:  

        return (<><Inicio /></>);
       
    
        
      
    }


    
  }

  
}
export default App;

// {tWeb()}
