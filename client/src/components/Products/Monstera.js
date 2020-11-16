import React from 'react';
import './Product.css';
import './Tabs.js';
import "semantic-ui-css/semantic.min.css";

function Monstera() {
    return (
        <div className="ui container">
            <div className="ui vertical segment">
                <div className="ui stackable grid">
                    <div className="six wide column">
                        <img className="ui image" src="https://i.ibb.co/3Cgh3JK/Screen-Shot-2020-11-08-at-2-33-27-PM-500x500.png" />
                    </div>
                    <div className="ten wide column">
                        <h2 className="ui header">MONSTERA ADANONSII</h2>
                        <strong>DESCRIPTION</strong>
                        <p>The Monstera Adansonii, aka the "Swiss Cheese" plant, gets its nickname from the large holes in its leaves called "fenestrations." These holes are a theorized evolutionary advantage that allows light to pass to the lower leaves of the plant in its natural low light environment beneath the jungle canopy, as well as allowing wind to easily pass through the leaves.</p>


                        <strong>LIGHT REQUIREMENTS</strong>
                        <br />
                        <p>Appreciates bright, indirect light. It is tolerant of medium - low light conditions, but prefers an east or west facing window.</p>
                        <strong>WATER REQUIREMENTS</strong>
                        <p>Be sure to water your plant upon delivery. Monstera prefer soil that is consistently moist with a dry out period between waterings. As epiphytes with aerial roots, they are sensitive to overwatering. Typically, you shouldn't have to water your Monstera more than once every 7-10 days.</p>

                        <p><img src="https://cdn.shopify.com/s/files/1/0013/3529/6118/files/Sun_d9bae001-a9e2-4608-951a-30d33a88b10b.png?v=1588337016" className="sunStyle" width="28" height="28" />Medium Light. This plant will do best in a bright location with mostly indirect light.</p>
                        <p><img src="https://cdn.shopify.com/s/files/1/0013/3529/6118/files/noun_Van_217023.png?v=1588260466" className="sunStyle" width="28" height="28" />Local Delivery within West Puerto Rico from $10.</p>
                        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="business" value="Bferrerortiz2984@gmail.com" />
                            <input type="hidden" name="lc" value="US" />
                            <input type="hidden" name="item_name" value="MONSTERA ADANONSII" />
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



export default Monstera;