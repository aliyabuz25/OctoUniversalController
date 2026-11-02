<?php
ini_set('display_errors', '0');
error_reporting(0);

// Auto-redirect clean /adminer/ visits to default SQLite database
if (empty($_GET) && empty($_POST)) {
    header('Location: ?sqlite=&username=&db=octotech.sqlite');
    exit;
}

if (isset($_GET['theme'])) {
    setcookie('adminer_theme', $_GET['theme'], time() + 86400 * 365, '/');
    $_COOKIE['adminer_theme'] = $_GET['theme'];
}

function adminer_object() {
    class AdminerCustom extends Adminer {
        function name() {
            return '<span style="font-weight:600;font-size:15px;color:#0f172a;letter-spacing:-0.3px;">OCTOTECH <span style="color:#64748b;font-weight:400;font-size:13px;">DB</span></span>';
        }
        
        function login($login, $password) {
            return true;
        }

        function database() {
            return 'octotech.sqlite';
        }

        function css() {
            $theme = $_GET['theme'] ?? $_COOKIE['adminer_theme'] ?? 'smooth-sade';
            $themeMap = [
                'smooth-sade' => 'themes/smooth-sade.css',
                'pepa-linha' => 'themes/pepa-linha.css',
                'material' => 'themes/material.css',
                'hever' => 'themes/hever.css',
                'flat' => 'themes/flat.css',
                'hydra' => 'themes/hydra-dark.css',
            ];
            if (isset($themeMap[$theme]) && file_exists(__DIR__ . '/' . $themeMap[$theme])) {
                return array($themeMap[$theme] . "?v=" . filemtime(__DIR__ . '/' . $themeMap[$theme]));
            }
            if (file_exists(__DIR__ . '/adminer.css')) {
                return array("adminer.css?v=" . filemtime(__DIR__ . '/adminer.css'));
            }
            return array();
        }
    }
    return new AdminerCustom;
}

include __DIR__ . '/adminer-4.8.1.php';
