<?php

namespace App\Models\Traits;

use Illuminate\Support\Str;

trait HasUuid
{
  protected static function bootHasUuid()
  {
    static::creating(function ($model) {
      if (empty($model->portfolioadminid)) {
        $model->portfolioadminid = Str::uuid();
      }
    });
  }
}
