import React, { Component } from 'react';


class Footer extends Component {

    render() {
        return (

            <footer class="footer" >
                <div class="container">
                    <div class="col-12 col-md-5 offset-3">
                        <div class="text-center">
                            <h6>EDUNOMICS</h6>
                            <h6>contact@edunomics.in</h6>

                            <p> <span class="glyphicon glyphicon-envelope"></span></p>
                            <p> <span class="glyphicon glyphicon-search"></span></p>
                            <p><span class="glyphicon glyphicon-print"></span></p>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-auto offset-3">
                            <p>JOIN US | COOKIE POLICY | TERMS OF USE | TECH | PRIVACY POLICY</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;