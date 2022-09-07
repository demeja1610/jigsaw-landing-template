<?php

return [
    'production' => false,
    'baseUrl' => '',
    'title' => 'Jigsaw',
    'description' => 'Landing template',
    'collections' => [],
    'asset' => function ($page, string $path) {
        return $page->baseUrl . '/assets/build/' . trim($path, '/');
    },
];
