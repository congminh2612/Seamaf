<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'code', 'description', 'category_id', 'price', 'is_top', 'on_sale'
    ];

    const IS_TOP = [
        '' => 0,
    ];

    public function images()
    {
        return $this->hasMany(Images::class, 'product_id');
    }

    
}
