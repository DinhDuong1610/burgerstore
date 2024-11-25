<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function order_items() {
        return $this->hasMany(Order_item::class);
    }

    public function carts() {
        return $this->hasMany(Cart::class);
    }
}
