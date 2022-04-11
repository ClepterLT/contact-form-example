<?php
/*
Template Name: Contact Form Page
*/

get_header(); ?>

<main>

<section class="centered">
    <div class="row">
        <div class="green-box">
            <div class="green-box__left">
                <h1 class="txt-h1">Let's Talk.</h1>
                <div class="green-box__bottom">
                    <div class="green-box__contact-wrap">
                        <p class="txt-body-medium f-semibold">Call us</p>
                        <a href="tel: +37068244588" class="link--without-underline">+370 682 44588</a>
                    </div>
                    <div class="green-box__contact-wrap">
                        <p class="txt-body-medium f-semibold">Write us</p>
                        <a href="mailto: hello@vsbl.lt" class="link--without-underline">hello@vsbl.lt</a>
                    </div>
                </div>
            </div>
            <div class="green-box__right">
                <form action="" class="contact-form js-form">
                    <div class="input">
                        <label for="fullName" class="input__label">Full Name <span class="input__required">*</span></label>
                        <input type="text" name="fullName" id="fullName" class="input__input" placeholder="Your Full Name" data-validate="validation-required">
                        <span class="input__message"></span>
                    </div>
                    <div class="input">
                        <label for="contacts" class="input__label">Phone or Email Address <span class="input__required">*</span></label>
                        <input type="text" name="contacts" id="contacts" class="input__input" placeholder="Your Contacts" data-validate="validation-required">
                        <span class="input__message"></span>
                    </div>
                    <div class="input">
                        <label for="message" class="input__label">Your Message <span class="input__required">*</span></label>
                        <textarea type="text" name="message" id="message" class="input__input input__input--textarea" placeholder="I Have This Project..." data-validate="validation-required"></textarea>
                        <span class="input__message"></span>
                    </div>
                    <div class="contact-form__bottom">
                        <div class="checkbox">
                            <input type="checkbox" name="privacyPolicy" id="privacyPolicy" class="checkbox__box" data-validate="validation-required">
                            <label for="privacyPolicy" class="checkbox__label">I consent with the personal data processing policy as it is described in the <a href="<?= get_privacy_policy_url(); ?>" class="link" target="_blank">Privacy Policy</a>.</label>
                            <span class="input__message"></span>
                        </div>
                        <button class="button" data-validate="validate">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

</main>

<?php get_footer(); ?>