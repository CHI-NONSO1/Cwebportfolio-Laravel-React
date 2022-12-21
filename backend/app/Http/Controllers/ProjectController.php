<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    //
    public  function getAllProjects(Request $request)
    {
        return $request->project();
    }

    public function getProjectByPortfolioId(Request $request)
    {

        try {
            $proj =  Project::where('portfolioid', $request['portfolioadminid'])->first();
            return response()->json([
                'Project' => $proj,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Project with Portfolioid!!'
            ], 400);
        }
    }


    public function getProjectByProjectId(Request $request)
    {

        try {
            $proj =  Project::where('projectid', $request['projectid'])->first();
            return response()->json([
                'ject' => $proj,
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Could not find Project with that Projectid!!'
            ], 400);
        }
    }


    public function createProject(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'projectname'       => 'required|string',
            'description'       => 'required|string|max:1000',
            'portfolioid'       => 'required|string',
            'projecturl'        => 'string',
            'domainname'        => 'string',
            'projectimage1'     => 'projectimage1|nullable',
            'projectimage2'     => 'projectimage2|nullable',
            'projectimage3'     => 'projectimage3|nullable',
            'projectimage4'     => 'projectimage4|nullable',
            'projectimage5'     => 'projectimage5|nullable',
            'projectimage6'     => 'projectimage6|nullable',
            'projectimage7'     => 'projectimage7|nullable',
            'projectimage8'     => 'projectimage8|nullable',
            'projectimage9'     => 'projectimage9|nullable',
            'projectimage10'    => 'projectimage10|nullable',
            'languageused1'     => 'string',
            'languageused2'     => 'string',
            'languageused3'     => 'string',
            'languageused4'     => 'string',
            'languageused5'     => 'string',
            'duration'          => 'string',
        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        $action =  Project::where('projectname', $request['projectname'])->first();
        if ($action) {
            return response()->json([
                'msg' => 'Entry Already Exist!!',

            ], 422);
        } else {

            if ($request->projectimage1 != 'undefined') {

                $image1 = Str::random() . '.' . $request->projectimage1->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->projectimage1, $image1);
            } else {
                $image1 = " ";
            }

            if ($request->projectimage2 != 'undefined') {
                $image2 = Str::random() . '.' . $request->projectimage2->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->projectimage2, $image2);
            } else {
                $image2 = " ";
            }
            if ($request->projectimage3 != 'undefined') {
                $image3 = Str::random() . '.' . $request->projectimage3->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->projectimage3, $image3);
            } else {
                $image3 = " ";
            }
            if ($request->projectimage4 != 'undefined') {
                $image4 = Str::random() . '.' . $request->projectimage4->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->projectimage4, $image4);
            } else {
                $image4 = " ";
            }
            if ($request->projectimage5 != 'undefined') {
                $image5 = Str::random() . '.' . $request->projectimage5->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->projectimage5, $image5);
            } else {
                $image5 = " ";
            }
            if ($request->projectimage6 != 'undefined') {
                $image6 = Str::random() . '.' . $request->projectimage6->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->projectimage6, $image6);
            } else {
                $image6 = " ";
            }
            if ($request->projectimage7 != 'undefined') {
                $image7 = Str::random() . '.' . $request->projectimage7->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->projectimage7, $image7);
            } else {
                $image7 = " ";
            }
            if ($request->projectimage8 != 'undefined') {
                $image8 = Str::random() . '.' . $request->projectimage8->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->projectimage8, $image8);
            } else {
                $image8 = " ";
            }
            if ($request->projectimage9 != 'undefined') {
                $image9 = Str::random() . '.' . $request->projectimage9->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->projectimage9, $image9);
            } else {
                $image9 = " ";
            }
            if ($request->projectimage10 != 'undefined') {
                $image10 = Str::random() . '.' . $request->projectimage10->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->projectimage10, $image10);
            } else {
                $image10 = " ";
            }



            $proj = Project::create([
                'projectname'       => $request->projectname,
                'description'       => $request->description,
                'portfolioid'       => $request->portfolioid,
                'projecturl'        => $request->projecturl,
                'domainname'        => $request->domainname,
                'projectimage1'     => $image1,
                'projectimage2'     => $image2,
                'projectimage3'     => $image3,
                'projectimage4'     => $image4,
                'projectimage5'     => $image5,
                'projectimage6'     => $image6,
                'projectimage7'     => $image7,
                'projectimage8'     => $image8,
                'projectimage9'     => $image9,
                'projectimage10'    => $image10,
                'languageused1'     => $request->languageused1,
                'languageused2'     => $request->languageused2,
                'languageused3'     => $request->languageused3,
                'languageused4'     => $request->languageused4,
                'languageused5'     => $request->languageused5,
                'duration'          => $request->duration,




            ]);



            return response()->json([
                'Comment' => $proj,
            ], 200);
        }
    }

    public function updateProject(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'projectname'       => 'required|string',
            'description'       => 'required|string|max:1000',
            'portfolioid'       => 'required|string',
            'projecturl'        => 'string',
            'domainname'        => 'string',
            'projectimage1'     => 'projectimage1|nullable',
            'projectimage2'     => 'projectimage2|nullable',
            'projectimage3'     => 'projectimage3|nullable',
            'projectimage4'     => 'projectimage4|nullable',
            'projectimage5'     => 'projectimage5|nullable',
            'projectimage6'     => 'projectimage6|nullable',
            'projectimage7'     => 'projectimage7|nullable',
            'projectimage8'     => 'projectimage8|nullable',
            'projectimage9'     => 'projectimage9|nullable',
            'projectimage10'    => 'projectimage10|nullable',
            'languageused1'     => 'string',
            'languageused2'     => 'string',
            'languageused3'     => 'string',
            'languageused4'     => 'string',
            'languageused5'     => 'string',
            'duration'          => 'string',

        ]);
        if (!$valid) {
            return response()->json([
                'errors' => $valid->errors()
            ], 422);
        }

        $proj = Project::where('projectid', $request['projectid'])->first();
        if ($proj->projectimage1 != " ") {
            $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage1}");
            if ($exists) {
                Storage::disk('public')->delete("product/image/{$proj->projectimage1}");
            }
        }

        if ($proj->projectimage2 != " ") {
            $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage2}");
            if ($exists) {
                Storage::disk('public')->delete("product/image/{$proj->projectimage2}");
            }
        }
        if ($proj->projectimage3 != " ") {
            $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage3}");
            if ($exists) {
                Storage::disk('public')->delete("product/image/{$proj->projectimage3}");
            }
        }
        if ($proj->projectimage4 != " ") {
            $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage4}");
            if ($exists) {
                Storage::disk('public')->delete("product/image/{$proj->projectimage4}");
            }
        }
        if ($proj->projectimage5 != " ") {
            $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage5}");
            if ($exists) {
                Storage::disk('public')->delete("product/image/{$proj->projectimage5}");
            }
        }
        if ($proj->projectimage6 != " ") {
            $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage6}");
            if ($exists) {
                Storage::disk('public')->delete("product/image/{$proj->projectimage6}");
            }
        }
        if ($proj->projectimage7 != " ") {
            $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage7}");
            if ($exists) {
                Storage::disk('public')->delete("product/image/{$proj->projectimage7}");
            }
        }
        if ($proj->projectimage8 != " ") {
            $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage8}");
            if ($exists) {
                Storage::disk('public')->delete("product/image/{$proj->projectimage8}");
            }
        }
        if ($proj->projectimage9 != " ") {
            $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage9}");
            if ($exists) {
                Storage::disk('public')->delete("product/image/{$proj->projectimage9}");
            }
        }
        if ($proj->projectimage10 != " ") {
            $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage10}");
            if ($exists) {
                Storage::disk('public')->delete("product/image/{$proj->projectimage10}");
            }
        }


        if ($request->projectimage1 != 'undefined') {

            $image1 = Str::random() . '.' . $request->projectimage1->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->projectimage1, $image1);
        } else {
            $image1 = " ";
        }

        if ($request->projectimage2 != 'undefined') {
            $image2 = Str::random() . '.' . $request->projectimage2->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->projectimage2, $image2);
        } else {
            $image2 = " ";
        }
        if ($request->projectimage3 != 'undefined') {
            $image3 = Str::random() . '.' . $request->projectimage3->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->projectimage3, $image3);
        } else {
            $image3 = " ";
        }
        if ($request->projectimage4 != 'undefined') {
            $image4 = Str::random() . '.' . $request->projectimage4->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->projectimage4, $image4);
        } else {
            $image4 = " ";
        }
        if ($request->projectimage5 != 'undefined') {
            $image5 = Str::random() . '.' . $request->projectimage5->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->projectimage5, $image5);
        } else {
            $image5 = " ";
        }
        if ($request->projectimage6 != 'undefined') {
            $image6 = Str::random() . '.' . $request->projectimage6->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->projectimage6, $image6);
        } else {
            $image6 = " ";
        }
        if ($request->projectimage7 != 'undefined') {
            $image7 = Str::random() . '.' . $request->projectimage7->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->projectimage7, $image7);
        } else {
            $image7 = " ";
        }
        if ($request->projectimage8 != 'undefined') {
            $image8 = Str::random() . '.' . $request->projectimage8->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->projectimage8, $image8);
        } else {
            $image8 = " ";
        }
        if ($request->projectimage9 != 'undefined') {
            $image9 = Str::random() . '.' . $request->projectimage9->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->projectimage9, $image9);
        } else {
            $image9 = " ";
        }
        if ($request->projectimage10 != 'undefined') {
            $image10 = Str::random() . '.' . $request->projectimage10->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->projectimage10, $image10);
        } else {
            $image10 = " ";
        }


        try {
            $pj =  Project::where('projectid', $request['projectid'])->update([
                'projectname'       => $request->projectname,
                'description'       => $request->description,
                'portfolioid'       => $request->portfolioid,
                'projecturl'        => $request->projecturl,
                'domainname'        => $request->domainname,
                'projectimage1'     => $image1,
                'projectimage2'     => $image2,
                'projectimage3'     => $image3,
                'projectimage4'     => $image4,
                'projectimage5'     => $image5,
                'projectimage6'     => $image6,
                'projectimage7'     => $image7,
                'projectimage8'     => $image8,
                'projectimage9'     => $image9,
                'projectimage10'    => $image10,
                'languageused1'     => $request->languageused1,
                'languageused2'     => $request->languageused2,
                'languageused3'     => $request->languageused3,
                'languageused4'     => $request->languageused4,
                'languageused5'     => $request->languageused5,
                'duration'          => $request->duration,

            ]);

            return response()->json([

                'message' => 'Project Updated Successfully'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([

                'message' => 'Something went wrong while Updating Project!!'
            ], 500);
        }
    }

    public function destroyProject(Request $request)
    {

        try {

            $proj = Project::where('projectid', $request['projectid'])->first();
            if ($proj->projectimage1) {
                $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage1}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$proj->projectimage1}");
                }
            }

            if ($proj->projectimage2) {
                $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage2}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$proj->projectimage2}");
                }
            }
            if ($proj->projectimage3) {
                $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage3}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$proj->projectimage3}");
                }
            }
            if ($proj->projectimage4) {
                $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage4}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$proj->projectimage4}");
                }
            }
            if ($proj->projectimage5) {
                $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage5}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$proj->projectimage5}");
                }
            }
            if ($proj->projectimage6) {
                $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage6}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$proj->projectimage6}");
                }
            }
            if ($proj->projectimage7) {
                $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage7}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$proj->projectimage7}");
                }
            }
            if ($proj->projectimage8) {
                $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage8}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$proj->projectimage8}");
                }
            }
            if ($proj->projectimage9) {
                $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage9}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$proj->projectimage9}");
                }
            }
            if ($proj->projectimage10) {
                $exists = Storage::disk('public')->exists("product/image/{$proj->projectimage10}");
                if ($exists) {
                    Storage::disk('public')->delete("product/image/{$proj->projectimage10}");
                }
            }



            if ($proj) {
                $proj->delete();
            }

            return response()->json([
                'message' => 'Project Deleted Successfully!!'
            ], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting Project!!'
            ], 400);
        }
    }
}
