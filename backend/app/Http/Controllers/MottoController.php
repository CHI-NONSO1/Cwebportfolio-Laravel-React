<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Motto;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class MottoController extends Controller
{
    //
    public  function getAllMotto(Request $request)
    {
        return $request->motto();
    }

    public function getMottoByPortfolioId(Request $request)
    {

        try {
            $mot =  Motto::where('portfolioid', $request['portfolioadminid'])->first();
            return response()->json([
                'Motto' => $mot,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Motto with Portfolioid!!'
            ], 400);
        }
    }


    public function getMottoByMottoId(Request $request)
    {

        try {
            $mott =  Motto::where('mottoid', $request['mottoid'])->first();
            return response()->json([
                'Motto' => $mott,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Motto with that Mottoid!!'
            ], 400);
        }
    }


    public function createMotto(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'body'         => 'required|string|max:1000',
            'portfolioid'  => 'required|string',


        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        $action =  Motto::where('body', $request['body'])->first();
        if ($action) {
            return response()->json([
                'msg' => 'Entry Already Exist!!',

            ], 422);
        } else {

            $mot = Motto::create([
                'body'         => $request->body,
                'portfolioid'    => $request->portfolioid,

            ]);



            return response()->json([
                'Motto' => $mot,
            ], 200);
        }
    }
    public function updateMotto(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'body'         => 'required|string|max:1000',
            'portfolioid'  => 'required|string',


        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        try {
            Motto::where('mottoid', $request['mottoid'])->update([
                'body'         => $request->body,
                'portfolioid'    => $request->portfolioid,

            ]);

            return response()->json([
                'message' => 'Motto Updated Successfully'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while Updating Motto!!'
            ], 500);
        }
    }

    public function destroyMotto(Request $request)
    {

        try {
            $action =  Motto::where('mottoid', $request['mottoid'])->first();
            if ($action) {
                $action->delete();
            }

            return response()->json([
                'message' => 'Motto Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Motto!!'
            ], 400);
        }
    }
}
