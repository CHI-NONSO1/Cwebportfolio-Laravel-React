<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Nexicontact;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class NexicontactController extends Controller
{
    //
    public  function getAllNexicontact(Request $request)
    {
        return $request->nexicontact();
    }

    public function createBiodata(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'fullname'       => 'required|string',
            'email'          => 'required|string|email',
            'message'        => 'required|string|max:1000',


        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        $action =  Nexicontact::where('message', $request['message'])->firstOrFail();
        if ($action) {
            return response()->json([
                'msg' => 'Message Already Sent!!',

            ], 422);
        }

        Nexicontact::create([
            'fullname'            => $request->fullname,
            'email'            => $request->email,
            'message'        => $request->message,


        ]);

        return response()->json([
            'Nexicontact' => 'Message  Sent!!',
        ], 200);
    }

    public function destroyMessage(Request $request)
    {

        try {
            $action =  Nexicontact::where('nexicontactid', $request['nexicontactid'])->firstOrFail();
            if ($action) {
                $action->delete();
            }

            return response()->json([
                'message' => 'Message Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Message!!'
            ], 400);
        }
    }
}
