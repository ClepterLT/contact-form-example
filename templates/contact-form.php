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
                <h1 class="txt-h1">Let's Talk</h1>
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
                <form action="" class="contact-form">
                    <div class="input">
                        <label for="full-name" class="input__label">Full Name <span class="input__required">*</span></label>
                        <input type="text" name="full-name" id="full-name" class="input__input" placeholder="Your Full Name">
                    </div>
                    <div class="input">
                        <label for="contacts" class="input__label">Phone or Email Address <span class="input__required">*</span></label>
                        <input type="text" name="contacts" id="contacts" class="input__input" placeholder="Your Contacts">
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

</main>

<?php get_footer(); ?>