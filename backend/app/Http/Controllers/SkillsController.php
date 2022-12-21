<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Skills;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class SkillsController extends Controller
{
    //
    public  function getAllSkills(Request $request)
    {
        return $request->skills();
    }

    public function getSkillByPortfolioId(Request $request)
    {

        try {
            $skill =  Skills::where('portfolioid', $request['portfolioadminid'])->first();
            return response()->json([
                'Skills' => $skill,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Skills with Portfolioid!!'
            ], 400);
        }
    }


    public function getSkillBySkillId(Request $request)
    {

        try {
            $skill =  Skills::where('skillid', $request['skillid'])->first();
            return response()->json([
                $skill,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Skills with that Skillid!!'
            ], 400);
        }
    }


    public function createSkill(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'portfolioid'     => 'required|string',
            'skillname1'      => 'required|string',
            'skillname2'      => 'required|string',
            'skillname3'      => 'required|string',
            'skillname4'      => 'required|string',
            'skillname5'      => 'required|string',
            'skillname6'      => 'string',
            'skillname7'      => 'string',
            'skillname8'      => 'string',
            'skillname9'      => 'string',
            'skillname10'     => 'string',

        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }
        $action =  Skills::where('skillname1', $request['skillname1'])->first();
        if ($action) {
            return response()->json([
                'msg' => 'Entry Already Exist!!',

            ], 422);
        } else {

            $skill = Skills::create([
                'portfolioid'     => $request->portfolioid,
                'skillname1'      => $request->skillname1,
                'skillname2'      => $request->skillname2,
                'skillname3'      => $request->skillname3,
                'skillname4'      => $request->skillname4,
                'skillname5'      => $request->skillname5,
                'skillname6'      => $request->skillname6,
                'skillname7'      => $request->skillname7,
                'skillname8'      => $request->skillname8,
                'skillname9'      => $request->skillname9,
                'skillname10'     => $request->skillname10,



            ]);



            return response()->json([
                'Skills' => $skill,
            ], 200);
        }
    }

    public function updateSkill(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'portfolioid'     => 'required|string',
            'skillname1'      => 'required|string',
            'skillname2'      => 'required|string',
            'skillname3'      => 'required|string',
            'skillname4'      => 'required|string',
            'skillname5'      => 'required|string',
            'skillname6'      => 'string',
            'skillname7'      => 'string',
            'skillname8'      => 'string',
            'skillname9'      => 'string',
            'skillname10'     => 'string',


        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        try {
            Skills::where('skillid', $request['skillid'])->update([
                'portfolioid'     => $request->portfolioid,
                'skillname1'      => $request->skillname1,
                'skillname2'      => $request->skillname2,
                'skillname3'      => $request->skillname3,
                'skillname4'      => $request->skillname4,
                'skillname5'      => $request->skillname5,
                'skillname6'      => $request->skillname6,
                'skillname7'      => $request->skillname7,
                'skillname8'      => $request->skillname8,
                'skillname9'      => $request->skillname9,
                'skillname10'     => $request->skillname10,

            ]);

            return response()->json([
                'message' => 'Skills Updated Successfully'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while Updating Skills!!'
            ], 500);
        }
    }

    public function destroySkill(Request $request)
    {

        try {
            $action =  Skills::where('skillid', $request['skillid'])->first();
            if ($action) {
                $action->delete();
            }

            return response()->json([
                'message' => 'Skills Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Skills!!'
            ], 400);
        }
    }
}
