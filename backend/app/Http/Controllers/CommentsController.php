<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Comments;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CommentsController extends Controller
{
    //
    public  function getAllComments(Request $request)
    {
        return $request->comments();
    }

    public function getCommentByPostId(Request $request)
    {

        try {
            $comm =  Comments::where('postid', $request['postid'])->first();
            return response()->json([
                'msg' => $comm,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Comments with Portfolioid!!'
            ], 400);
        }
    }


    public function getCommentByCommentId(Request $request)
    {

        try {
            $com =  Comments::where('commentid', $request['commentid']);
            return response()->json([
                'Comment' => $com,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Comment with that Commentid!!'
            ], 400);
        }
    }


    public function createComment(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'name'             => 'required|string|max:55',
            'email'            => 'required|email|max:255',
            'comment'          => 'required|string|max:2000',
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


        $action =  Comments::where('comment', $request['comment'])->first();
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

            $comment = Comments::create([
                'name'             => $request->name,
                'email'            => $request->email,
                'comment'          => $request->comment,
                'postid'           => $request->postid,
                'image'            => $imageName,
                'video'            => $videoName,
                'link_post'        => $request->link_post,


            ]);

            return response()->json([
                'Comment' => $comment,
            ], 200);
        }
    }

    public function updateComment(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'name'             => 'required|string|max:55',
            'email'            => 'required|email|max:255',
            'comment'          => 'required|string|max:2000',
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

        $com = Comments::where('commentid', $request['commentid'])->first();
        if ($com->image != null) {
            $exists = Storage::disk('public')->exists("product/image/{$com->image}");
            if ($exists) {
                Storage::disk('public')->delete("product/image/{$com->image}");
            }
        }

        if ($com->video != null) {
            $exists = Storage::disk('public')->exists("product/image/{$com->video}");
            if ($exists) {
                Storage::disk('public')->delete("product/image/{$com->video}");
            }
        }

        if ($com->image != null) {
            $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->image, $imageName);
        } else {
            $imageName = " ";
        }
        if ($com->video != null) {
        $videoName = Str::random() . '.' . $request->video->getClientOriginalExtension();
        Storage::disk('public')->putFileAs('product/image', $request->video, $videoName);
    } else {
        $videoName = " ";
    }
        try {
            Comments::where('commentid', $request['commentid'])->update([
                'name'             => $request->name,
                'email'            => $request->email,
                'comment'          => $request->comment,
                'postid'           => $request->postid,
                'image'            => $imageName,
                'video'            => $videoName,
                'link_post'        => $request->link_post,

            ]);

            return response()->json([
                'message' => 'Comment Updated Successfully'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while Updating Comment!!'
            ], 500);
        }
    }

    public function destroyComment(Request $request)
    {

        try {

            $com = Comments::where('commentid', $request['commentid'])->firstOrFail();

            if ($com->image != null) {
                $exists = Storage::disk('public')->exists("product/image/{$com->image}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$com->image}");
                }
            }

            if ($com->video != null) {
                $exists = Storage::disk('public')->exists("product/image/{$com->video}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$com->video}");
                }
            }

            if ($com) {
                $com->delete();
            }

            return response()->json([
                'message' => 'Comment Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Comment!!'
            ], 400);
        }
    }
}
