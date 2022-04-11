<?php

function submit_contact_form($req) {

  // $to = get_bloginfo('admin_email');
  // $subject = 'Somebody just gave their contacts for you';
  // $body = '<p>Check you site, because somebody gave up their contacts for you. Yay!</p>';
  // $headers = array(
  //   'Content-Type: text/html; charset=UTF-8',
  //   'From: VSBL <support@vsbl.lt>',
  // );
  // wp_mail( $to, $subject, $body, $headers );

  return rest_ensure_response('Form submitted');
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'vsbl/v1', 'contact_form', array(
    'methods' => 'POST',
    'callback' =>  'submit_contact_form',
  ) );
} );

?>