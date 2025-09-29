<?php
/**
 * Plugin Name: I3 WC Blocks Translations
 * Description: Вчитува JS скрипта за превод на WooCommerce Blocks на страниците Cart и Checkout.
 * Version: 1.0
 * Author: Ilija Iliev Strumjan
 * License: GPL2+
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

add_action('wp_enqueue_scripts', 'i3_enqueue_wc_blocks_translation_script', 9999);
function i3_enqueue_wc_blocks_translation_script() {
    if (is_cart() || is_checkout()) {
        wp_enqueue_script(
            'i3-wc-blocks-translations',
            plugin_dir_url(__FILE__) . 'assets/woo-blocks-translation.js',
            array(),
            null,
            true
        );
    }
}
