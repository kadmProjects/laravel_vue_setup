<?php

use Illuminate\Support\Facades\Route;

// Route::get('{any}', function () {
//     return view('index');
// })->where('any', '.*');

Route::get('/login', function () {
    return view('index');
});

Route::get('/', function () {
    return view('index');
});

Route::get('/dashboard', function () {
    return view('index');
});
