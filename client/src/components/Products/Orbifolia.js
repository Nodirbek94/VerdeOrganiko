import React from 'react';
import './Product.css';
import './Tabs.js';
import "semantic-ui-css/semantic.min.css";

function Orbifolia() {
    return (
        <div className="ui container">
            <div className="ui vertical segment">
                <div className="ui stackable grid">
                    <div className="six wide column">
                        <img className="ui image" src="https://i.ibb.co/cb2kRy3/Calathea-orbifolia-500x500.jpg" />
                    </div>
                    <div className="ten wide column">
                        <h2 className="ui header">CALATHEA ORBIFOLIA</h2>
                        <strong>DESCRIPTION</strong>
                        <p>This exotic variety of Calathea is renowned for its broad, elegantly patterned leaves. Dramatic striping on Orbifolia's foliage adds texture and impact to your space. It prefers medium to low light conditions and consistent, moderate watering. When properly cared for, its leaves can reach upwards of 8" wide.</p>


                        <strong>LIGHT REQUIREMENTS</strong>
                        <br />
                        <p>Prefers bright indirect light, but is adaptable to bright direct light conditions.</p>
                        <strong>WATER REQUIREMENTS</strong>
                        <p>Be sure to water your plant upon delivery. Calathea like moderately moist soil but will rot when too much moisture is present. If soil is dry an inch below the top of the pot and the Calathea leaves are beginning to curl, it is time to water.</p>

                        <p><img src="https://cdn.shopify.com/s/files/1/0013/3529/6118/files/Sun_d9bae001-a9e2-4608-951a-30d33a88b10b.png?v=1588337016" className="sunStyle" width="28" height="28" />Medium Light. This plant will do best in a bright location with mostly indirect light.</p>
                        <p><img src="https://cdn.shopify.com/s/files/1/0013/3529/6118/files/noun_Van_217023.png?v=1588260466" className="sunStyle" width="28" height="28" />Local Delivery within West Puerto Rico from $10.</p>
                        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="business" value="Bferrerortiz2984@gmail.com" />
                            <input type="hidden" name="lc" value="US" />
                            <input type="hidden" name="item_name" value="CALATHEA ORBIFOLIA" />
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



export default Orbifolia;