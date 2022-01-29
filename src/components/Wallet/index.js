import React, { Component } from "react";


export default class Wallet extends Component {
  
  render() {

      return (
        <>
            <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            
            <section id="subheader" className="text-light" data-bgimage="url(images/background/subheader-dark.jpg) top">
                    <div className="center-y relative text-center">
                        <div className="container">
                            <div className="row">
                                
                                <div className="col-md-12 text-center">
									<h1>Billeteras</h1>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
            </section>

            <section aria-label="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb30" style={{"cursor":"pointer"}} onClick={()=>{
                            alert("Seleccionando la red de Tron");
                            if(window.localStorage) {

                                window.localStorage.setItem("wallet", "0");
                        
                                if(parseInt( window.localStorage.getItem("wallet")) == 0){
                                alert( "Billetera de Tron seleccionada");
                                }else{
                                alert( "Error al seleccionar billetera");
                                }
                             
                            }else{
                                alert( "Error al seleccionar billetera");
                            }
                    }}>
                            <div className="box-url" >
                                <span className="box-url-label">TRX</span>
                                <img src="images/wallet/9.png" alt="" className="mb20" height="70px" />
                                <h4>TronLink</h4>
                                <p>Es la billetera mas utilizada del ecosistema Tron, ademas permite la visualización de miniaturas de tus NFT's.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 mb30">
                            <div className="box-url" style={{"cursor":"pointer"}} onClick={()=>{
  
                            if(window.localStorage) {

                                window.localStorage.setItem("wallet", "1");
                                  
                            }else{
                                alert( "Error al seleccionar billetera");
                            }
                    }}>
                                <span className="box-url-label">BTTC</span>
                                <img src="images/wallet/1.png" alt="" className="mb20" />
                                <h4>Metamask</h4>
                                <p>La billetera mas versatil y conociada del mercado, compatible con las principales blockchains.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 mb30">
                            <div className="box-url"  style={{"cursor":"pointer"}} onClick={()=>{
                            
                            if(window.localStorage) {

                                window.localStorage.setItem("wallet", "2");
                                    
                            }else{
                                alert( "Error al seleccionar billetera");
                            }
                            }}>
                                <span className="box-url-label">BNB</span>
                                <img src="images/wallet/1.png" alt="" className="mb20" />
                                <h4>Metamask</h4>
                                <p>La billetera mas versatil y conociada del mercado, compatible con las principales blockchains.</p>
                            </div>
                        </div>

                                                       
                    </div>
                </div>
            </section>

        </div>
      
        </>
      );
  }
}
