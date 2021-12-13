<?php

use App\Http\Controllers\OfferController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/offer', [OfferController::class, 'list']);
Route::get('/offer/detail', [OfferController::class, 'detail']);
Route::get('/offer/create', [OfferController::class, 'create']);
Route::get('/offer/delete', [OfferController::class, 'delete']);

