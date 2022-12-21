<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Goal;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class GoalController extends Controller
{
    //
    public  function getAllGoal(Request $request)
    {
        return $request->goal();
    }

    public function getGoalByPortfolioId(Request $request)
    {

        try {
            $goal =  Goal::where('portfolioid', $request['portfolioadminid'])->first();
            return response()->json([
                'Goal' => $goal,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Goal with Portfolioid!!'
            ], 400);
        }
    }


    public function getGoalByGoalId(Request $request)
    {

        try {
            $go =  Goal::where('goalid', $request['goalid'])->first();
            return response()->json([
                'Goal' => $go,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Goal with that Goalid!!'
            ], 400);
        }
    }


    public function createGoal(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'mygoal'         => 'required|string|max:1000',
            'portfolioid'    => 'required|string',



        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        $action =  Goal::where('mygoal', $request['mygoal'])->first();
        if ($action) {
            return response()->json([

                'msg' => 'Entry Already Exist!!',

            ], 422);
        } else {

            $goa = Goal::create([
                'mygoal'         => $request->mygoal,
                'portfolioid'    => $request->portfolioid,


            ]);

            return response()->json([
                'Goal' => $goa,
            ], 200);
        }
    }

    public function updateGoal(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'mygoal'         => 'required|string|max:1000',
            'portfolioid'    => 'required|string',



        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        try {
            Goal::where('goalid', $request['goalid'])->update([
                'mygoal'         => $request->mygoal,
                'portfolioid'    => $request->portfolioid,

            ]);

            return response()->json([
                'message' => 'Goal Updated Successfully'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while Updating Goal!!'
            ], 500);
        }
    }

    public function destroyGoal(Request $request)
    {

        try {
            $action =  Goal::where('goalid', $request['goalid'])->firstOrFail();
            if ($action) {
                $action->delete();
            }

            return response()->json([
                'message' => 'Goal Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Goal!!'
            ], 400);
        }
    }
}
