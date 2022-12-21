<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Biodata;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class BiodataController extends Controller
{
    //
    public  function getAllBiodata(Request $request)
    {
        return $request->biodata();
    }

    public function getBiodataByPortfolioId(Request $request)
    {

        try {
            $bd =  Biodata::where('portfolioid', $request['portfolioadminid'])->first();
            return response()->json([
                'Biodata' => $bd,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Biodata with Portfolioid!!'
            ], 400);
        }
    }

    public function getBiodataByBiodataId(Request $request)
    {

        try {
            $bid =  Biodata::where('biodataid', $request['biodataid'])->first();
            return response()->json([
                'Biodata' => $bid,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Biodata with that Biodataid!!'
            ], 400);
        }
    }


    public function createBiodata(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'sex'            => 'required|string',
            'dob'            => 'required|string|max:255',
            'marital'        => 'required|string',
            'impairment'     => 'required|string',
            'portfolioid'    => 'required|string',
            'religion'       => 'required|string',
            'soo'            => 'soo',
            'nationality'    => 'required|string',


        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }
        $action =  Biodata::where('dob', $request['dob'])->first();
        if ($action) {
            return response()->json([
                'msg' => 'An Entry Already Exist!!',

            ], 422);
        } else {

            $biod = Biodata::create([
                'sex'            => $request->sex,
                'dob'            => $request->dob,
                'marital'        => $request->marital,
                'impairment'     => $request->impairment,
                'portfolioid'    => $request->portfolioid,
                'religion'       => $request->religion,
                'soo'            => $request->soo,
                'nationality'    => $request->nationality,

            ]);



            return response()->json([
                'Biodata' => $biod,
            ], 200);
        }
    }
    public function updateBiodata(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'sex'            => 'required|string',
            'dob'            => 'required|string|max:255',
            'marital'        => 'required|string',
            'impairment'     => 'required|string',
            'portfolioid'    => 'required|string',
            'religion'       => 'required|string',
            'soo'            => 'soo',
            'nationality'    => 'required|string',


        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        try {
            Biodata::where('biodataid', $request['biodataid'])->update([
                'sex'            => $request->sex,
                'dob'            => $request->dob,
                'marital'        => $request->marital,
                'impairment'     => $request->impairment,
                'portfolioid'    => $request->portfolioid,
                'religion'       => $request->religion,
                'soo'            => $request->soo,
                'nationality'    => $request->nationality,

            ]);

            return response()->json([
                'message' => 'Biodata Updated Successfully'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while Updating Biodata!!'
            ], 500);
        }
    }

    public function destroyBiodata(Request $request)
    {

        try {
            $action =  Biodata::where('biodataid', $request['biodataid'])->firstOrFail();
            if ($action) {
                $action->delete();
            }

            return response()->json([
                'message' => 'Biodata Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Biodata!!'
            ], 400);
        }
    }
}
