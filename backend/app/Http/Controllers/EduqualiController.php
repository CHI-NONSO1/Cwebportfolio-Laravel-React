<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Eduquali;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class EduqualiController extends Controller
{
    //
    public  function getAllEduquali(Request $request)
    {
        return $request->eduqualies();
    }

    public function getEduqualiByPortfolioId(Request $request)
    {

        try {
            $Eduq =  Eduquali::where('portfolioid', $request['portfolioadminid'])->first();
            return response()->json([
                'Eduquali' => $Eduq,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Eduquali with Portfolioid!!'
            ], 400);
        }
    }


    public function getEduqualiByEduqualiId(Request $request)
    {

        try {
            $EID =  Eduquali::where('eduqualid', $request['eduqualid'])->first();
            return response()->json([

                'Eduquali' => $EID,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Eduquali with that Eduqualiid!!'
            ], 400);
        }
    }


    public function createEduquali(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'qualiobtained'     => 'required|string',
            'institution'       => 'required|string',
            'startdate'         => 'required|string',
            'enddate'           => 'required|string',
            'country'           => 'required|string',
            'portfolioid'       => 'required|string',

        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }
        $action =  Eduquali::where('startdate', $request['startdate'])->first();
        if ($action) {
            return response()->json([
                'msg' => 'Entry Already Exist!!',

            ], 422);
        } else {

            $eduquali = Eduquali::create([
                'qualiobtained'     => $request->qualiobtained,
                'institution'       => $request->institution,
                'startdate'         => $request->startdate,
                'enddate'           => $request->enddate,
                'country'           => $request->country,
                'portfolioid'       => $request->portfolioid,

            ]);



            return response()->json([
                'Eduquali' => $eduquali,
            ], 200);
        }
    }
    public function updateEduquali(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'qualiobtained'     => 'required|string',
            'institution'       => 'required|string',
            'startdate'         => 'required|string',
            'enddate'           => 'required|string',
            'country'           => 'required|string',
            'portfolioid'       => 'required|string',


        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        try {
            Eduquali::where('eduqualid', $request['eduqualid'])->update([
                'qualiobtained'     => $request->qualiobtained,
                'institution'       => $request->institution,
                'startdate'         => $request->startdate,
                'enddate'           => $request->enddate,
                'country'           => $request->country,
                'portfolioid'       => $request->portfolioid,

            ]);

            return response()->json([
                'message' => 'Eduquali Updated Successfully'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while Updating Eduquali!!'
            ], 500);
        }
    }

    public function destroyEduquali(Request $request)
    {

        try {
            $action =  Eduquali::where('eduqualid', $request['eduqualid'])->first();
            if ($action) {
                $action->delete();
            }

            return response()->json([
                'message' => 'Eduquali Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Eduquali!!'
            ], 400);
        }
    }
}
