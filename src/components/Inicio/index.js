import React, { Component } from "react";


export default class Inicio extends Component {
  
  render() {

      return (
        <>
        
        <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            <section id="section-hero" aria-label="section" className="no-top no-bottom vh-100" data-bgimage="url(images/background/bg-shape-1-dark.jpg) bottom">
                <div className="v-center">
                    <div className="container">
                        <div className="row align-items-center mt-3">
                            <div className="col-md-6">
                                <div className="spacer-single"></div>
                                <h6 className="wow fadeInUp" data-wow-delay=".5s"><span className="text-uppercase id-color-2">MINTEARTE MARKET</span></h6>
                                <div className="spacer-10"></div>
                                <h1 className="wow fadeInUp" data-wow-delay=".75s">Crea, compra y vende activos digitales.</h1>
                                <p className="wow fadeInUp lead" data-wow-delay="1s">
                                    Mintearte la revolucion en NFT`s</p>
                                <div className="spacer-10"></div>
                                <a href="explore-2.html" className="btn-main wow fadeInUp lead" data-wow-delay="1.25s">Explorar</a>
                                <div className="mb-sm-30"></div>
                            </div>
                            <div className="col-md-6 xs-hide ">
                                <img src="images/misc/nft.png" className="lazy img-fluid wow fadeIn" data-wow-delay="1.25s" alt="nft"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-intro" className="no-top no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-sm-30">
                            <div className="feature-box f-boxed style-3">
                                <i className="wow fadeInUp bg-color-2 i-boxed icon_wallet"></i>
                                <div className="text">
                                    <h4 className="wow fadeInUp">Configura tu billetera</h4>
                                    <p className="wow fadeInUp" data-wow-delay=".25s">Conecta tu billetera favorita desde la parte superior derecha, justo en el boton donde indica conectar billetera</p>
                                </div>
                                <i className="wm icon_wallet"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-sm-30">
                            <div className="feature-box f-boxed style-3">
                                <i className="wow fadeInUp bg-color-2 i-boxed icon_cloud-upload_alt"></i>
                                <div className="text">
                                    <h4 className="wow fadeInUp">Mintea o importa tus NFT's</h4>
                                    <p className="wow fadeInUp" data-wow-delay=".25s">Accede al menù pagina y mintea ò importa tus propios NFT`s</p>
                                </div>
                                <i className="wm icon_cloud-upload_alt"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-sm-30">
                            <div className="feature-box f-boxed style-3">
                                <i className="wow fadeInUp bg-color-2 i-boxed icon_tags_alt"></i>
                                <div className="text">
                                    <h4 className="wow fadeInUp">Vende tus NFT`s</h4>
                                    <p className="wow fadeInUp" data-wow-delay=".25s">Escoje tu tipo de venta, la moneda y la red en la que prefieres comercializar tus NFT`s y ponlos a la venta.</p>
                                </div>
                                <i className="wm icon_tags_alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            

            <section id="section-collections" className="no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Mejor Valoradas</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div id="collection-carousel" className="owl-carousel wow fadeIn">

                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href="collection.html"><img src="images/collections/coll-1.jpg" className="lazy img-fluid" alt=""/></a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href="collection.html"><img className="lazy" src="images/author/author-1.jpg" alt=""/></a>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href="collection.html"><h4>Abstraction</h4></a>
                                        <span>ERC-192</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href="collection.html"><img src="images/collections/coll-2.jpg" className="lazy img-fluid" alt=""/></a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href="collection.html"><img className="lazy" src="images/author/author-2.jpg" alt=""/></a>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href="collection.html"><h4>Patternlicious</h4></a>
                                        <span>ERC-61</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href="collection.html"><img src="images/collections/coll-3.jpg" className="lazy img-fluid" alt=""/></a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href="collection.html"><img className="lazy" src="images/author/author-3.jpg" alt=""/></a>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href="collection.html"><h4>Skecthify</h4></a>
                                        <span>ERC-126</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href="collection.html"><img src="images/collections/coll-4.jpg" className="lazy img-fluid" alt=""/></a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href="collection.html"><img className="lazy" src="images/author/author-4.jpg" alt=""/></a>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href="collection.html"><h4>Cartoonism</h4></a>
                                        <span>ERC-73</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href="collection.html"><img src="images/collections/coll-5.jpg" className="lazy img-fluid" alt=""/></a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href="collection.html"><img className="lazy" src="images/author/author-5.jpg" alt=""/></a>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href="collection.html"><h4>Virtuland</h4></a>
                                        <span>ERC-85</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href="collection.html"><img src="images/collections/coll-6.jpg" className="lazy img-fluid" alt=""/></a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href="collection.html"><img className="lazy" src="images/author/author-6.jpg" alt=""/></a>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href="collection.html"><h4>Papercut</h4></a>
                                        <span>ERC-42</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>

            <section id="section-items" className="no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Nuevos NFT`s</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div id="items-carousel" className="owl-carousel wow fadeIn">

      
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="de_countdown" data-year="2021" data-month="9" data-day="16" data-hour="8"></div>
                                        <div className="author_list_pp">
                                            <a href="dark-author.html">                                    
                                                <img className="lazy" src="images/author/author-1.jpg" alt=""/>
                                                <i className="fa fa-check"></i>
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <a href="item-details.html">
                                                <img src="images/items/static-1.jpg" className="lazy nft__item_preview" alt=""/>
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="dark-item-details.html">
                                                <h4>Pinky Ocean</h4>
                                            </a>
                                            <div className="nft__item_price">
                                                0.08 ETH<span>1/20</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <a href="#">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>50</span>
                                            </div>                            
                                        </div> 
                                    </div>
                                </div>                 

                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="author_list_pp">
                                            <a href="dark-author.html">                                    
                                                <img className="lazy" src="images/author/author-10.jpg" alt=""/>
                                                <i className="fa fa-check"></i>
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <a href="dark-item-details.html">
                                                <img src="images/items/static-2.jpg" className="lazy nft__item_preview" alt=""/>
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="dark-item-details.html">
                                                <h4>Deep Sea Phantasy</h4>
                                            </a>
                                            <div className="nft__item_price">
                                                0.06 ETH<span>1/22</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <a href="#">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>80</span>
                                            </div>                                 
                                        </div> 
                                    </div>
                                </div>
                                
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="de_countdown" data-year="2021" data-month="9" data-day="14" data-hour="8"></div>
                                        <div className="author_list_pp">
                                            <a href="dark-author.html">                                    
                                                <img className="lazy" src="images/author/author-11.jpg" alt=""/>
                                                <i className="fa fa-check"></i>
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <a href="dark-item-details.html">
                                                <img src="images/items/static-3.jpg" className="lazy nft__item_preview" alt=""/>
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="dark-item-details.html">
                                                <h4>Rainbow Style</h4>
                                            </a>
                                            <div className="nft__item_price">
                                                0.05 ETH<span>1/11</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <a href="#">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>97</span>
                                            </div>                                 
                                        </div> 
                                    </div>
                                </div>
                                
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="author_list_pp">
                                            <a href="dark-author.html">                                    
                                                <img className="lazy" src="images/author/author-12.jpg" alt=""/>
                                                <i className="fa fa-check"></i>
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <a href="dark-item-details.html">
                                                <img src="images/items/static-4.jpg" className="lazy nft__item_preview" alt=""/>
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="dark-item-details.html">
                                                <h4>Two Tigers</h4>
                                            </a>
                                            <div className="nft__item_price">
                                                0.02 ETH<span>1/15</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <a href="#">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>73</span>
                                            </div>                                 
                                        </div> 
                                    </div>
                                </div>
                                
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="author_list_pp">
                                            <a href="dark-author.html">                                    
                                                <img className="lazy" src="images/author/author-9.jpg" alt=""/>
                                                <i className="fa fa-check"></i>
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <a href="dark-item-details.html">
                                                <img src="images/items/anim-4.webp" className="lazy nft__item_preview" alt=""/>
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="dark-item-details.html">
                                                <h4>The Truth</h4>
                                            </a>
                                            <div className="nft__item_price">
                                                0.06 ETH<span>1/20</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <a href="#">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>26</span>
                                            </div>                                 
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="de_countdown" data-year="2021" data-month="9" data-day="20" data-hour="8"></div>
                                        <div className="author_list_pp">
                                            <a href="dark-author.html">                                    
                                                <img className="lazy" src="images/author/author-2.jpg" alt=""/>
                                                <i className="fa fa-check"></i>
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <a href="dark-item-details.html">
                                                <img src="images/items/anim-2.webp" className="lazy nft__item_preview" alt=""/>
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="dark-item-details.html">
                                                <h4>Running Puppets</h4>
                                            </a>
                                            <div className="nft__item_price">
                                                0.03 ETH<span>1/24</span>
                                            </div>    
                                            <div className="nft__item_action">
                                                <a href="#">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>45</span>
                                            </div>                                  
                                        </div> 
                                    </div>
                                </div>
                                
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="author_list_pp">
                                            <a href="dark-author.html">                                    
                                                <img className="lazy" src="images/author/author-3.jpg" alt=""/>
                                                <i className="fa fa-check"></i>
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <a href="dark-item-details.html">
                                                <img src="images/items/anim-1.webp" className="lazy nft__item_preview" alt=""/>
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="dark-item-details.html">
                                                <h4>USA Wordmation</h4>
                                            </a>
                                            <div className="nft__item_price">
                                                0.09 ETH<span>1/25</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <a href="#">Place a bid</a>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>76</span>
                                            </div>                                 
                                        </div> 
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>

            <section id="section-popular" className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Mejores Vendedores</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div className="col-md-12 wow fadeIn">
                            <ol className="author_list">
                                <li>                                    
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="images/author/author-1.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>                                    
                                    <div className="author_list_info">
                                        <a href="dark-author.html">Monica Lucas</a>
                                        <span>3.2 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">                                    
                                            <img className="lazy" src="images/author/author-2.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div className="author_list_info">
                                        <a href="dark-author.html">Mamie Barnett</a>
                                        <span>2.8 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">                                    
                                            <img className="lazy" src="images/author/author-3.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div className="author_list_info">
                                        <a href="dark-author.html">Nicholas Daniels</a>
                                        <span>2.5 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">                                    
                                            <img className="lazy" src="images/author/author-4.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div className="author_list_info">
                                        <a href="dark-author.html">Lori Hart</a>
                                        <span>2.2 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">                                    
                                            <img className="lazy" src="images/author/author-5.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div className="author_list_info">
                                        <a href="dark-author.html">Jimmy Wright</a>
                                        <span>1.9 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">                                    
                                            <img className="lazy" src="images/author/author-6.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div className="author_list_info">
                                        <a href="dark-author.html">Karla Sharp</a>
                                        <span>1.6 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">                                    
                                            <img className="lazy" src="images/author/author-7.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div className="author_list_info">
                                        <a href="dark-author.html">Gayle Hicks</a>
                                        <span>1.5 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">                                    
                                            <img className="lazy" src="images/author/author-8.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div className="author_list_info">
                                        <a href="dark-author.html">Claude Banks</a>
                                        <span>1.3 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">                                    
                                            <img className="lazy" src="images/author/author-9.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div className="author_list_info">
                                        <a href="dark-author.html">Franklin Greer</a>
                                        <span>0.9 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">                                    
                                            <img className="lazy" src="images/author/author-10.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div className="author_list_info">
                                        <a href="dark-author.html">Stacy Long</a>
                                        <span>0.8 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">                                    
                                            <img className="lazy" src="images/author/author-11.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div className="author_list_info">
                                        <a href="dark-author.html">Ida Chapman</a>
                                        <span>0.6 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">                                    
                                            <img className="lazy" src="images/author/author-12.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div className="author_list_info">
                                        <a href="dark-author.html">Fred Ryan</a>
                                        <span>0.5 eth</span>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>        
            <section id="section-category" className="no-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Buscar por categorias</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".1s">
                            <a href="explore.html" className="icon-box style-2 rounded">
                                <i className="fa fa-image"></i>
                                <span>Arte</span>
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".2s">
                            <a href="explore.html" className="icon-box style-2 rounded">
                                <i className="fa fa-music"></i>
                                <span>Musica</span>
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".3s">
                            <a href="explore.html" className="icon-box style-2 rounded">
                                <i className="fa fa-search"></i>
                                <span>Dominios</span>
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".4s">
                            <a href="dark-explore.html" className="icon-box style-2 rounded">
                                <i className="fa fa-globe"></i>
                                <span>Metaverso</span>
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".5s">
                            <a href="dark-explore.html" className="icon-box style-2 rounded">
                                <i className="fa fa-vcard"></i>
                                <span>Fotografia</span>
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".6s">
                            <a href="dark-explore.html" className="icon-box style-2 rounded">
                                <i className="fa fa-th"></i>
                                <span>Coleccionables</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>     
        </div>
        </>
      );
  }
}
