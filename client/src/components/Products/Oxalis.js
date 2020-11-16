import React from 'react';
import './Product.css';
import './Tabs.js';
import "semantic-ui-css/semantic.min.css";

function Oxalis() {
    return (
        <div className="ui container">
            <div className="ui vertical segment">
                <div className="ui stackable grid">
                    <div className="six wide column">
                        <img className="ui image" src="https://i.ibb.co/fdjb3q2/Oxalis-triangularis-500x500.jpg" />
                    </div>
                    <div className="ten wide column">
                        <h2 className="ui header">OXALIS TRIANGULARIS</h2>
                        <strong>DESCRIPTION</strong>
                        <p>Yes, you read it right - This is a Purple Shamrock plant that's unlike any other. Although its soft whitish-pink flowers are delicate and beautiful, it's the remarkable leaves that will truly capture your attention. Oxalis Triangularis boasts deep purple, heart-shaped leaves in an impressive shamrock formation.</p>


                        <strong>LIGHT REQUIREMENTS</strong>
                        <br />
                        <p>Appreciates bright, indirect light. It is tolerant of medium - low light conditions, but prefers an east or west facing window.</p>
                        <strong>WATER REQUIREMENTS</strong>
                        <p>Allow the soil to dry between watering, ensure the top 2cm of soil is dry before watering. The worst thing you can do with bulbs is overwater as it will rot the bulb. Expect to water about once every 2 weeks.</p>

                        <p><img src="https://cdn.shopify.com/s/files/1/0013/3529/6118/files/Sun_d9bae001-a9e2-4608-951a-30d33a88b10b.png?v=1588337016" className="sunStyle" width="28" height="28" />Partial Sun; Bright Direct to Bright Indirect Indoors</p>
                        <p><img src="https://cdn.shopify.com/s/files/1/0013/3529/6118/files/noun_Van_217023.png?v=1588260466" className="sunStyle" width="28" height="28" />Local Delivery within West Puerto Rico from $10.</p>
                        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="business" value="Bferrerortiz2984@gmail.com" />
                            <input type="hidden" name="lc" value="US" />
                            <input type="hidden" name="item_name" value="OXALIS TRIANGULARIS" />
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



export default Oxalis;