import React from 'react'
import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'
import './Contact.css'


const Contact = () => {
    return (
        <>
            <Menu />
            <form>
                <h1>Should you have any questions, please do not hesitate to contact me :</h1>

                <div class="contentform">
                    <div id="sendmessage"> Your message has been sent successfully. Thank you. </div>


                    <div class="leftcontact">
                        <div class="form-group">
                            <p>Nick Name<span>*</span></p>
                            <span class="icon-case"><i class="fa fa-male"></i></span>
                            <input type="text" name="nom" id="nom" data-msg="Fill in info" required />
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>Name <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-user"></i></span>
                            <input type="text" name="prenom" id="prenom" data-msg="Fill in info" required />
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>E-mail <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-envelope-o"></i></span>
                            <input type="email" name="email" id="email" data-msg="Fill in info" required />
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>Company <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-home"></i></span>
                            <input type="text" name="society" id="society" data-msg="Fill in info." required />
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>Company Address <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-location-arrow"></i></span>
                            <input type="text" name="adresse" id="adresse" data-msg="Fill in info" required />
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>Postcode <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-map-marker"></i></span>
                            <input type="text" name="postal" id="postal" data-msg="Fill in info" required />
                            <div class="validation"></div>
                        </div>



                    </div>

                    <div class="rightcontact">

                        <div class="form-group">
                            <p>City <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-building-o"></i></span>
                            <input type="text" name="ville" id="ville" data-msg="Fill in info" required />
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>Phone number <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-phone"></i></span>
                            <input type="text" name="phone" id="phone" data-rule="maxlen:10" data-msg="Fill in info" required />
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>Occupation <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-info"></i></span>
                            <input type="text" name="fonction" id="fonction" data-msg="Fill in info" required />
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>Subject <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-comment-o"></i></span>
                            <input type="text" name="sujet" id="sujet" data-msg="Fill in info" required />
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>Message <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-comments-o"></i></span>
                            <textarea name="message" rows="14" data-msg="Fill in info" required></textarea>
                            <div class="validation"></div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="bouton-contact">Send</button>

            </form>
            <Footer />
        </>
    )
}

export default Contact