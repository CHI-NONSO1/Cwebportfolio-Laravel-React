<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Workexperience;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class WorkexperienceController extends Controller
{
    //
    public  function getAllWorkExperience(Request $request)
    {
        return $request->workexperience();
    }

    public function getWorkExperienceByPortfolioId(Request $request)
    {

        try {
            $we =  Workexperience::where('portfolioid', $request['portfolioadminid'])->first();
            return response()->json([
                'wpx' => $we,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Workexperience with Portfolioid!!'
            ], 400);
        }
    }


    public function getWorkExperienceByWorkExperienceId(Request $request)
    {

        try {
            $weid = Workexperience::where('workexperienceid', $request['workexperienceid'])->first();
            return response()->json([
                'wpx' => $weid,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Workexperience with that Workexperienceid!!'
            ], 400);
        }
    }


    public function createWorkExperience(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'organisation'     => 'required|string',
            'position'         => 'required|string',
            'startdate'        => 'required|string',
            'enddate'          => 'required|string',
            'portfolioid'      => 'required|string',
            'country'          => 'required|string',
            'description'      => 'required|string|max:1000',

        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        $action =  Workexperience::where('startdate', $request['startdate'])->first();
        if ($action) {
            return response()->json([
                'msg' => 'Entry Already Exist!!',

            ], 422);
        } else {

            $we = Workexperience::create([
                'organisation'     => $request->organisation,
                'position'         => $request->position,
                'startdate'        => $request->startdate,
                'enddate'          => $request->enddate,
                'portfolioid'      => $request->portfolioid,
                'country'          => $request->country,
                'description'      => $request->description,

            ]);



            return response()->json([
                'Workexperience' => $we,
            ], 200);
        }
    }
    public function updateWorkExperience(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'organisation'     => 'required|string',
            'position'         => 'required|string',
            'startdate'        => 'required|string',
            'enddate'          => 'required|string',
            'portfolioid'      => 'required|string',
            'country'          => 'required|string',
            'description'      => 'required|string|max:1000',


        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        try {
            Workexperience::where('workexperienceid', $request['workexperienceid'])->update([
                'organisation'     => $request->organisation,
                'position'         => $request->position,
                'startdate'        => $request->startdate,
                'enddate'          => $request->enddate,
                'portfolioid'      => $request->portfolioid,
                'country'          => $request->country,
                'description'      => $request->description,

            ]);

            return response()->json([
                'message' => 'Workexperience Updated Successfully'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while Updating Workexperience!!'
            ], 500);
        }
    }

    public function destroyWorkExperience(Request $request)
    {

        try {
            $action =  Workexperience::where('workexperienceid', $request['workexperienceid'])->first();
            if ($action) {
                $action->delete();
            }

            return response()->json([
                'message' => 'Workexperience Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Workexperience!!'
            ], 400);
        }
    }
}
