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
                        <a href="tel:+37068244588" class="link--without-underline">+370 682 44588</a>
                    </div>
                    <div class="green-box__contact-wrap">
                        <p class="txt-body-medium f-semibold">Write us</p>
                        <a href="mailto:hello@vsbl.lt" class="link--without-underline" target="_blank">hello@vsbl.lt</a>
                    </div>
                </div>
            </div>
            <div class="green-box__right">
                <form class="contact-form js-form" data-form="contact-form">
                    <div class="form-item">
                        <label for="fullName" class="form-item__label">Full Name <span class="form-item__required">*</span></label>
                        <input type="text" name="fullName" id="fullName" class="form-item__input" placeholder="Your Full Name" autocomplete="name" required>
                        <span class="form-item__error"></span>
                    </div>
                    <div class="form-item">
                        <label for="contacts" class="form-item__label">Phone or Email Address <span class="form-item__required">*</span></label>
                        <input type="text" name="contacts" id="contacts" class="form-item__input" placeholder="Your Contacts" autocomplete="email" required>
                        <span class="form-item__error"></span>
                    </div>
                    <div class="form-item">
                        <label for="message" class="form-item__label">Your Message <span class="form-item__required">*</span></label>
                        <textarea name="message" id="message" class="form-item__textarea" placeholder="I Have This Project..." required></textarea>
                        <span class="form-item__error"></span>
                    </div>
                    <div class="contact-form__bottom">
                        <div class="checkbox">
                            <input type="checkbox" name="privacyPolicy" id="privacyPolicy" class="checkbox__box" required>
                            <label for="privacyPolicy" class="checkbox__label">I consent with the personal data processing policy as it is described in the <a href="<?= get_privacy_policy_url(); ?>" class="link" target="_blank">Privacy Policy</a>.</label>
                            <span class="form-item__error"></span>
                        </div>
                        <button type="button" class="button button--black" data-submit="contact-form">Send Message</button>
                    </div>
                </form>

                <div class="success">
                    <img src="<?= get_template_directory_uri(); ?>/assets/images/icon-success.svg" alt="Success Icon" class="success__icon">
                    <h2 class="success__title">All done!</h2>
                    <p class="success__text">Thanks for applying! We will get in touch with you very very soon.</p>
                    <a href="<?= home_url() ?>" class="button button--green">Go to Homepage</a>
                </div>
            </div>
        </div>
    </div>
</section>

</main>

<?php get_footer(); ?>