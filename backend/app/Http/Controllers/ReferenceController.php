<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Reference;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ReferenceController extends Controller
{
    //
    public  function getAllReference(Request $request)
    {
        return $request->reference();
    }

    public function getReferenceByPortfolioId(Request $request)
    {

        try {
            $ref =  Reference::where('portfolioid', $request['portfolioadminid'])->first();
            return response()->json([
                'Refer' => $ref,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Reference with Portfolioid!!'
            ], 400);
        }
    }


    public function getReferenceByReferenceId(Request $request)
    {

        try {
            $ref =  Reference::where('referenceid', $request['referenceid'])->first();
            return response()->json([
                'ref' => $ref,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Reference with that Referenceid!!'
            ], 400);
        }
    }


    public function createReference(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'fullname'       => 'required|string',
            'phoneno'        => 'required|string',
            'address'        => 'required|string',
            'relationship'   => 'required|string',
            'portfolioid'    => 'required|string',


        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }
        $action =  Reference::where('phoneno', $request['phoneno'])->first();
        if ($action) {
            return response()->json([
                'msg' => 'Entry Already Exist!!',

            ], 422);
        } else {

            $ref = Reference::create([
                'fullname'       => $request->fullname,
                'phoneno'        => $request->phoneno,
                'address'        => $request->address,
                'relationship'   => $request->relationship,
                'portfolioid'    => $request->portfolioid,


            ]);



            return response()->json([
                'Reference' => $ref,
            ], 200);
        }
    }

    public function updateReference(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'fullname'       => 'required|string',
            'phoneno'        => 'required|string',
            'address'        => 'required|string',
            'relationship'   => 'required|string',
            'portfolioid'    => 'required|string',


        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        try {
            Reference::where('referenceid', $request['referenceid'])->update([
                'fullname'       => $request->fullname,
                'phoneno'        => $request->phoneno,
                'address'        => $request->address,
                'relationship'   => $request->relationship,
                'portfolioid'    => $request->portfolioid,

            ]);

            return response()->json([
                'message' => 'Reference Updated Successfully'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while Updating Reference!!'
            ], 500);
        }
    }

    public function destroyReference(Request $request)
    {

        try {
            $action =  Reference::where('referenceid', $request['referenceid'])->first();
            if ($action) {
                $action->delete();
            }

            return response()->json([
                'message' => 'Reference Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Reference!!'
            ], 400);
        }
    }
}
