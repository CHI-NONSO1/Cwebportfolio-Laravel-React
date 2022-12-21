<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Reply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ReplyController extends Controller
{
    //
    public  function getAllReply(Request $request)
    {
        return $request->reply();
    }

    public function getReplyByCommentId(Request $request)
    {

        try {
            $rep =  Reply::where('commentid', $request['commentid']);
            return response()->json([
                'Reply' => $rep,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Reply with Commentid!!'
            ], 400);
        }
    }


    public function getReplyByReplyId(Request $request)
    {

        try {
            $rep =  Reply::where('replyid', $request['replyid']);
            return response()->json([
                'Reply' => $rep,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Reply with that Replyid!!'
            ], 400);
        }
    }

    public function createReply(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'name'             => 'required|string|max:55',
            'email'            => 'required|email|max:255',
            'reply'            => 'required|string|max:2000',
            'commentid'        => 'required|max:255',
            'postid'           => 'required|string',
            'image'            => 'string|max:55',
            'video'            => 'string|max:55',
            'link_post'        => 'string|max:55',

        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        $action =  Reply::where('reply', $request['reply'])->first();
        if ($action) {
            return response()->json([
                'msg' => 'Entry Already Exist!!',

            ], 422);
        } else {

            if ($action->image != null) {
                $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->image, $imageName);
            } else {
                $imageName = " ";
            }
            if ($action->video != null) {
                $videoName = Str::random() . '.' . $request->video->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->video, $videoName);
            } else {
                $videoName = " ";
            }


            $reply = Reply::create([
                'name'             => $request->name,
                'email'            => $request->email,
                'reply'            => $request->reply,
                'commentid'        => $request->commentid,
                'postid'           => $request->postid,
                'image'            => $imageName,
                'video'            => $videoName,
                'link_post'        => $request->link_post,


            ]);



            return response()->json([
                'Comment' => $reply,
            ], 200);
        }
    }
    public function updateReply(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'name'             => 'required|string|max:55',
            'email'            => 'required|email|max:255',
            'reply'            => 'required|string|max:2000',
            'commentid'        => 'required|max:255',
            'postid'           => 'required|string',
            'image'            => 'string|max:55',
            'video'            => 'string|max:55',
            'link_post'        => 'string|max:55',

        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        $rep = Reply::where('replyid', $request['replyid'])->first();

        if ($rep->image != null) {
            $exists = Storage::disk('public')->exists("product/image/{$rep->image}");
            if ($exists) {
                Storage::disk('public')->delete("product/image/{$rep->image}");
            }
        }

        if ($rep->video != null) {
            $exists = Storage::disk('public')->exists("product/image/{$rep->video}");
            if ($exists) {
                Storage::disk('public')->delete("product/image/{$rep->video}");
            }
        }

        if ($rep->image != null) {
            $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->image, $imageName);
        } else {
            $imageName = " ";
        }
        if ($rep->video != null) {
            $videoName = Str::random() . '.' . $request->video->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->video, $videoName);
        } else {
            $videoName = " ";
        }

        try {
            Reply::where('commentid', $request['commentid'])->update([
                'name'             => $request->name,
                'email'            => $request->email,
                'reply'            => $request->reply,
                'commentid'        => $request->commentid,
                'postid'           => $request->postid,
                'image'            => $imageName,
                'video'            => $videoName,
                'link_post'        => $request->link_post,

            ]);

            return response()->json([
                'message' => 'Reply Updated Successfully'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while Updating Reply!!'
            ], 500);
        }
    }

    public function destroyReply(Request $request)
    {

        try {

            $rep = Reply::where('replyid', $request['replyid'])->first();

            if ($rep->image != null) {
                $exists = Storage::disk('public')->exists("product/image/{$rep->image}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$rep->image}");
                }
            }

            if ($rep->video != null) {
                $exists = Storage::disk('public')->exists("product/image/{$rep->video}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$rep->video}");
                }
            }

            if ($rep) {
                $rep->delete();
            }

            return response()->json([
                'message' => 'Reply Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Reply!!'
            ], 400);
        }
    }
}
