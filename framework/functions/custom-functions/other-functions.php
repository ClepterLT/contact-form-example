<?php

// ACF OPTIONS PAGE
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Options',
        'menu_title' => 'Options',
        'menu_slug' => 'options',
        'capability' => 'edit_posts',
        'redirect' => false
    ));
}