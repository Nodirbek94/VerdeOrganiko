import React from 'react';
import './Product.css';
import './Tabs.js';
import "semantic-ui-css/semantic.min.css";

function Pilea() {
    return (
        <div className="ui container">
            <div className="ui vertical segment">
                <div className="ui stackable grid">
                    <div className="six wide column">
                        <img className="ui image" src="https://i.ibb.co/pyw3brk/Pilea-peperomioides-500x500.jpg" />
                    </div>
                    <div className="ten wide column">
                        <h2 className="ui header">PILEA PEPEROMIOIDES</h2>
                        <strong>DESCRIPTION</strong>
                        <p>Pilea peperomioides, also known as Chinese Money Plant, is low-maintenance and easy to grow. Native to the Yunnan province of China, this plant has been popular in Scandinavia for decades, but has been hard to find in the U.S until recently. Its round, glossy leaves grow quickly from a central stem. </p>


                        <strong>LIGHT REQUIREMENTS</strong>
                        <br />
                        <p>Prefers bright indirect light, but will tolerate medium light conditions.</p>
                        <strong>WATER REQUIREMENTS</strong>
                        <p>Be sure to water your plant upon delivery. Pilea peromioides are actually part of the succulent family and therefore they prefer dry soil. Water when the soil has dried throughout the pot and the foliage begins to droop. Overwatering can lead to root rot.</p>

                        <p><img src="https://cdn.shopify.com/s/files/1/0013/3529/6118/files/Sun_d9bae001-a9e2-4608-951a-30d33a88b10b.png?v=1588337016" className="sunStyle" width="28" height="28" />High Light. This plant needs at least a few of hours of direct sunlight.</p>
                        <p><img src="https://cdn.shopify.com/s/files/1/0013/3529/6118/files/noun_Van_217023.png?v=1588260466" className="sunStyle" width="28" height="28" />Local Delivery within West Puerto Rico from $10.</p>
                        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="business" value="Bferrerortiz2984@gmail.com" />
                            <input type="hidden" name="lc" value="US" />
                            <input type="hidden" name="item_name" value="PILEA PEPEROMIOIDES" />
                            <input type="hidden" name="amount" value="35.00" />
                            <input type="hidden" name="currency_code" value="USD" />
                            <input type="hidden" name="button_subtype" value="products" />
                            <input type="hidden" name="no_note" value="0" />
                            <input type="hidden" name="shipping" value="10.00" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}



export default Pilea;