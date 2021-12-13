<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class OfferController extends Controller
{
    public function list(){
        return Offer::all();
    }

    public function detail($id){ 
        return Offer::find($id);
    }

    public function create(){
        return Offer::find();
    }

    public function delete(){
        
    }
}
