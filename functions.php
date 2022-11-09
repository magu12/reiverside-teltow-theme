<?php

add_theme_support('title-tag');

if (!defined('_S_VERSION')) {
    // Replace the version number of the theme on each release.
    define('_S_VERSION', '1.0.0');
}


function rvr_scripts()
{
    wp_enqueue_style('bootstrap-style', get_template_directory_uri() . '/assets/css/bootstrap-reboot.min.css', array(), _S_VERSION, 'all');
    wp_enqueue_style('font-style', 'https://use.typekit.net/lzc3qpf.css', array(), _S_VERSION, 'all');
    wp_enqueue_style('rvr-swiper-style', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.css', array(), _S_VERSION, 'all');
    wp_enqueue_style('rvr-style', get_template_directory_uri() . '/assets/css/style.min.css', array(), _S_VERSION, 'all');

    wp_enqueue_script('jquery');
    wp_enqueue_script('rvr-ui', 'https://code.jquery.com/ui/1.13.2/jquery-ui.js', array(), _S_VERSION, true);
    wp_enqueue_script('rvr-swiper-script', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.min.js', array(), _S_VERSION, true);
    wp_enqueue_script('rvr-script', get_template_directory_uri() . '/assets/js/main.js', array(), _S_VERSION, true);
}
add_action('wp_enqueue_scripts', 'rvr_scripts');
