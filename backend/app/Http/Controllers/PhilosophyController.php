<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Philosophy;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class PhilosophyController extends Controller
{
    //
    public  function getAllPhilosophy(Request $request)
    {
        return $request->philosophies();
    }

    public function getPhilosophyByPortfolioId(Request $request)
    {

        try {
            $phil =  Philosophy::where('portfolioid', $request['portfolioadminid'])->first();
            return response()->json([
                'Philosophy' => $phil,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Philosophy with Portfolioid!!'
            ], 400);
        }
    }


    public function getPhilosophyByPhilosophyId(Request $request)
    {

        try {
            $philo =  Philosophy::where('philosophyid', $request['philosophyid'])->first();
            return response()->json([
                'philosophy' => $philo,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Philosophy with that Philosophyid!!'
            ], 400);
        }
    }


    public function createPhilosophy(Request $request)
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
        $action =  Philosophy::where('body', $request['body'])->first();
        if ($action) {
            return response()->json([
                'msg' => 'Entry Already Exist!!',

            ], 422);
        } else {

            $philoo = Philosophy::create([
                'body'         => $request->body,
                'portfolioid'    => $request->portfolioid,

            ]);



            return response()->json([
                'Philosophy' => $philoo,
            ], 200);
        }
    }

    public function updatePhilosophy(Request $request)
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
            Philosophy::where('philosophyid', $request['philosophyid'])->update([
                'body'         => $request->body,
                'portfolioid'    => $request->portfolioid,

            ]);

            return response()->json([
                'message' => 'Philosophy Updated Successfully'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while Updating Philosophy!!'
            ], 500);
        }
    }

    public function destroyPhilosophy(Request $request)
    {

        try {
            $action =  Philosophy::where('philosophyid', $request['philosophyid'])->first();
            if ($action) {
                $action->delete();
            }

            return response()->json([
                'message' => 'Philosophy Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Philosophy!!'
            ], 400);
        }
    }
}
