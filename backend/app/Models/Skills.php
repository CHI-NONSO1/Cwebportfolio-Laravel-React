<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skills extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'skillname1',
        'skillname2',
        'skillname3',
        'skillname4',
        'skillname5',
        'skillname6',
        'skillname7',
        'skillname8',
        'skillname9',
        'skillname10',
        'portfolioid',


    ];
}
