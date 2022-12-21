<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Hobby;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class HobbyController extends Controller
{
    //
    public  function getAllHobby(Request $request)
    {
        return $request->hobby();
    }

    public function getHobbyByPortfolioId(Request $request)
    {

        try {
            $hob =  Hobby::where('portfolioid', $request['portfolioadminid'])->first();
            return response()->json([
                'Hobby' => $hob,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Hobby with Portfolioid!!'
            ], 400);
        }
    }


    public function getHobbyByHobbyId(Request $request)
    {

        try {
            $hobb =  Hobby::where('hobbyid', $request['hobbyid'])->first();
            return response()->json([
                'Hobby' => $hobb,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Hobby with that Hobbyid!!'
            ], 400);
        }
    }


    public function createHobby(Request $request)
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

        $action =  Hobby::where('body', $request['body'])->first();
        if ($action) {
            return response()->json([
                'msg' => 'Entry Already Exist!!',

            ], 422);
        } else {


            $hobbi = Hobby::create([
                'body'         => $request->body,
                'portfolioid'    => $request->portfolioid,

            ]);



            return response()->json([
                'Hobby' => $hobbi,
            ], 200);
        }
    }


    public function updateHobby(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'body'         => 'required|string|max:1000',
            'portfolioid'    => 'required|string',


        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        try {
            Hobby::where('hobbyid', $request['hobbyid'])->update([
                'body'         => $request->body,
                'portfolioid'    => $request->portfolioid,

            ]);

            return response()->json([
                'message' => 'Hobby Updated Successfully'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while Updating Hobby!!'
            ], 500);
        }
    }

    public function destroyHobby(Request $request)
    {

        try {
            $action =  Hobby::where('hobbyid', $request['hobbyid'])->first();
            if ($action) {
                $action->delete();
            }

            return response()->json([
                'message' => 'Hobby Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Hobby!!'
            ], 400);
        }
    }
}
