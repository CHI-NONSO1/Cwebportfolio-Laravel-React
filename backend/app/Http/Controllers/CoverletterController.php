<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Coverletter;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class CoverletterController extends Controller
{
    //
    public  function getAllCoverLetters(Request $request)
    {
        return $request->coverletter();
    }

    public function getCoverLetterByPortfolioId(Request $request)
    {

        try {
            $cl =  Coverletter::where('portfolioid', $request['portfolioid'])->first();
            return response()->json([
                'cl' => $cl,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Coverletter with Portfolioid!!'
            ], 400);
        }
    }


    public function getCoverLetterByCoverLetterId(Request $request)
    {

        try {
            $col =  Coverletter::where('coverletterid', $request['coverletterid'])->first();
            return response()->json([
                'cvl' => $col,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Cover Letter with that coverletterid!!'
            ], 400);
        }
    }


    public function createCoverLetter(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'receivers_address'  => 'required|string',
            'subject'            => 'required|string',
            'message'            => 'required|string|max: 1000',
            'portfolioid'        => 'required|string',



        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        $action =  Coverletter::where('message', $request['message'])->first();
        if ($action) {
            return response()->json([
                'msg' => 'Entry Already Exist!!',

            ], 422);
        } else {


            $coverletter = Coverletter::create([
                'receivers_address'  => $request->receivers_address,
                'subject'            => $request->subject,
                'message'            => $request->message,
                'portfolioid'        => $request->portfolioid,


            ]);

            return response()->json([
                'cl' => $coverletter,
            ], 200);
        }
    }
    public function updateCoverletter(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'receivers_address'  => 'required|string',
            'subject'            => 'required|string',
            'message'            => 'required|string|max: 1000',
            'portfolioid'        => 'required|string',


        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        try {
            $cvl =  Coverletter::where('coverletterid', $request['coverletterid'])->update([
                'receivers_address'  => $request->receivers_address,
                'subject'            => $request->subject,
                'message'            => $request->message,
                'portfolioid'        => $request->portfolioid,

            ]);

            return response()->json([
                $cvl
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while Updating Coverletter!!'
            ], 500);
        }
    }

    public function destroyCoverLetter(Request $request)
    {

        try {
            $action =  Coverletter::where('coverletterid', $request['coverletterid'])->first();
            if ($action) {
                $action->delete();
            }

            return response()->json([
                'message' => 'Coverletter Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Coverletter!!'
            ], 400);
        }
    }
}
