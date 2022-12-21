<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'projectname',
        'projecturl',
        'domainname',
        'projectimage1',
        'projectimage2',
        'projectimage3',
        'projectimage4',
        'projectimage5',
        'projectimage6',
        'projectimage7',
        'projectimage8',
        'projectimage9',
        'projectimage10',
        'languageused1',
        'languageused2',
        'languageused3',
        'languageused4',
        'languageused5',
        'duration',
        'description',
        'portfolioid',

    ];
}
