<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Posts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class PostsController extends Controller
{
    //
    public  function getAllPost(Request $request)
    {
        return $request->posts();
    }

    public function getPostByPortfolioId(Request $request)
    {

        try {
            $post =  Posts::where('portfolioid', $request['portfolioadminid'])->first();
            return response()->json([
                'Posts' => $post,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Posts with Portfolioid!!'
            ], 400);
        }
    }


    public function getPostByPostId(Request $request)
    {

        try {
            $po =  Posts::where('postid', $request['postid'])->first();
            return response()->json([
                'post' => $po,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Post with that Postid!!'
            ], 400);
        }
    }


    public function createPost(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'author'           => 'required|string|max:55',
            'heading'          => 'required|string',
            'post'             => 'required|string|max:2000',
            'category'         => 'required|string',
            'portfolioid'      => 'required|string',
            'image'            => 'string|max:55',
            'video'            => 'string|max:55',
            'link_post'        => 'string|max:55',

        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        $action =  Posts::where('heading', $request['heading'])->first();
        if ($action) {
            return response()->json([
                'msg' => 'Entry Already Exist!!',

            ], 422);
        } else {
            if ($request->image != null) {
                $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->image, $imageName);
            } else {
                $imageName = " ";
            }
            if ($request->video != null) {
                $videoName = Str::random() . '.' . $request->video->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->video, $videoName);
            } else {
                $videoName = " ";
            }

            $post = Posts::create([
                'author'        => $request->author,
                'heading'       => $request->heading,
                'post'          => $request->post,
                'portfolioid'   => $request->portfolioid,
                'image'         => $imageName,
                'video'         => $videoName,
                'link_post'     => $request->link_post,
                'category'      => $request->category,

            ]);



            return response()->json([
                'post' => $post,
            ], 200);
        }
    }
    public function updatePost(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'author'           => 'required|string|max:55',
            'heading'          => 'required|string',
            'post'             => 'required|string|max:2000',
            'category'         => 'required|string',
            'portfolioid'      => 'required|string',
            'image'            => 'string|max:55',
            'video'            => 'string|max:55',
            'link_post'        => 'string|max:55',

        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        $com = Posts::where('postid', $request['postid'])->first();
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

        if ($request->image != null) {
            $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->image, $imageName);
        } else {
            $imageName = " ";
        }
        if ($request->video != null) {
            $videoName = Str::random() . '.' . $request->video->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->video, $videoName);
        } else {
            $videoName = " ";
        }

        try {
            Posts::where('postid', $request['postid'])->update([
                'author'        => $request->author,
                'heading'       => $request->heading,
                'post'          => $request->post,
                'portfolioid'   => $request->portfolioid,
                'image'         => $imageName,
                'video'         => $videoName,
                'link_post'     => $request->link_post,
                'category'      => $request->category,

            ]);

            return response()->json([
                'message' => 'Post Updated Successfully'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while Updating Post!!'
            ], 500);
        }
    }

    public function destroyPost(Request $request)
    {

        try {

            $com = Posts::where('postid', $request['postid'])->first();

            if ($com->image) {
                $exists = Storage::disk('public')->exists("product/image/{$com->image}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$com->image}");
                }
            }

            if ($com->video) {
                $exists = Storage::disk('public')->exists("product/image/{$com->video}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$com->video}");
                }
            }

            if ($com) {
                $com->delete();
            }

            return response()->json([
                'message' => 'Post Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Post!!'
            ], 400);
        }
    }
}
