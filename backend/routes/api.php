<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\BiodataController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\CoverletterController;
use App\Http\Controllers\EduqualiController;
use App\Http\Controllers\GoalController;
use App\Http\Controllers\HobbyController;
use App\Http\Controllers\MottoController;
use App\Http\Controllers\NexicontactController;
use App\Http\Controllers\PhilosophyController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ReferenceController;
use App\Http\Controllers\ReplyController;
use App\Http\Controllers\SkillsController;
use App\Http\Controllers\WorkexperienceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
|----------------------------------------------------
|UserAdmin Area
|----------------------------------------------------
*/


Route::post('/register', [AuthenticationController::class, 'createAccount']);
Route::post('/signin', [AuthenticationController::class, 'signin']);
Route::post('/signout', [AuthenticationController::class, 'signout']);
Route::post('/update', [AuthenticationController::class, 'update']);
Route::post('/destroy', [AuthenticationController::class, 'destroy']);
Route::post('/home', [AuthenticationController::class, 'getProfileByPortfolioId']);
/*
|----------------------------------------------------
|Biodata Area
|----------------------------------------------------
*/
Route::post('/addbiodata', [BiodataController::class, 'createBiodata']);
Route::post('/updatebiodata', [BiodataController::class, 'updateBiodata']);
Route::post('/deletebiodata', [BiodataController::class, 'destroyBiodata']);
Route::post('/biodataid', [BiodataController::class, 'getBiodataByBiodataId']);
Route::post('/biodataportfolio', [BiodataController::class, 'getBiodataByPortfolioId']);
Route::get('/biodataall', [BiodataController::class, 'getAllBiodata']);

/*
|----------------------------------------------------
|Comments Area
|----------------------------------------------------
*/
Route::post('/addcomment', [CommentsController::class, 'createComment']);
Route::post('/updatecomment', [CommentsController::class, 'updateComment']);
Route::post('/deletecomment', [CommentsController::class, 'destroyComment']);
Route::post('/commentsid', [CommentsController::class, 'getCommentByCommentId']);
Route::post('/commentpostid', [CommentsController::class, 'getCommentByPostId']);
Route::get('/comments', [CommentsController::class, 'getAllComments']);

/*
|----------------------------------------------------
|CoverLetter Area
|----------------------------------------------------
*/
Route::post('/addcoverletter', [CoverletterController::class, 'createCoverLetter']);
Route::post('/updatecoverletter', [CoverletterController::class, 'updateCoverletter']);
Route::post('/deletecoverletter', [CoverletterController::class, 'destroyCoverLetter']);
Route::post('/onecoverletter', [CoverletterController::class, 'getCoverLetterByCoverLetterId']);
Route::post('/homecoverletter', [CoverletterController::class, 'getCoverLetterByPortfolioId']);
Route::get('/allcoverletter', [CoverletterController::class, 'getAllCoverLetters']);

/*
|----------------------------------------------------
|Eduquali Area
|----------------------------------------------------
*/
Route::post('/addeduquali', [EduqualiController::class, 'createEduquali']);
Route::post('/updateeduquali', [EduqualiController::class, 'updateEduquali']);
Route::post('/deleteduquali', [EduqualiController::class, 'destroyEduquali']);
Route::post('/homeeduquali', [EduqualiController::class, 'getEduqualiByPortfolioId']);
Route::post('/oneeduquali', [EduqualiController::class, 'getEduqualiByEduqualiId']);
Route::get('/alleduquali', [EduqualiController::class, 'getAllEduquali']);

/*
|----------------------------------------------------
|Goal Area
|----------------------------------------------------
*/
Route::post('/addgoal', [GoalController::class, 'createGoal']);
Route::post('/updategoal', [GoalController::class, 'updateGoal']);
Route::post('/deletegoal', [GoalController::class, 'destroyGoal']);
Route::post('/homegoal', [GoalController::class, 'getGoalByPortfolioId']);
Route::post('/onegoal', [GoalController::class, 'getGoalByGoalId']);
Route::get('/allgoal', [GoalController::class, 'getAllGoal']);

/*
|----------------------------------------------------
|Hobby Area
|----------------------------------------------------
*/
Route::post('/addhobby', [HobbyController::class, 'createHobby']);
Route::post('/updatehobby', [HobbyController::class, 'updateHobby']);
Route::post('/deletehobby', [HobbyController::class, 'destroyHobby']);
Route::post('/homehobby', [HobbyController::class, 'getHobbyByPortfolioId']);
Route::post('/onehobby', [HobbyController::class, 'getHobbyByHobbyId']);
Route::get('/allhobby', [HobbyController::class, 'getAllHobby']);


/*
|----------------------------------------------------
|Motto Area
|----------------------------------------------------
*/
Route::post('/addmotto', [MottoController::class, 'createMotto']);
Route::post('/updatemotto', [MottoController::class, 'updateMotto']);
Route::post('/deletemotto', [MottoController::class, 'destroyMotto']);
Route::post('/homemotto', [MottoController::class, 'getMottoByPortfolioId']);
Route::post('/onemotto', [MottoController::class, 'getMottoByMottoId']);
Route::get('/allmotto', [MottoController::class, 'getAllMotto']);

/*
|----------------------------------------------------
|NexiContact Area
|----------------------------------------------------
*/
Route::post('/send', [NexicontactController::class, 'createBiodata']);
Route::post('/deletemessage', [NexicontactController::class, 'destroyMessage']);
Route::get('/messages', [NexicontactController::class, 'getAllNexicontact']);

/*
|----------------------------------------------------
|Philosophy Area
|----------------------------------------------------
*/
Route::post('/addphilosophy', [PhilosophyController::class, 'createPhilosophy']);
Route::post('/updatephilosophy', [PhilosophyController::class, 'updatePhilosophy']);
Route::post('/deletephilosophy', [PhilosophyController::class, 'destroyPhilosophy']);
Route::post('/onephilosophy', [PhilosophyController::class, 'getPhilosophyByPhilosophyId']);
Route::post('/homephilosophy', [PhilosophyController::class, 'getPhilosophyByPortfolioId']);
Route::get('/allphilosophy', [PhilosophyController::class, 'getAllPhilosophy']);

/*
|----------------------------------------------------
|Post Area
|----------------------------------------------------
*/
Route::post('/addpost', [PostsController::class, 'createPost']);
Route::post('/updatepost', [PostsController::class, 'updatePost']);
Route::post('/deletepost', [PostsController::class, 'destroyPost']);
Route::post('/homepost', [PostsController::class, 'getPostByPortfolioId']);
Route::post('/onepost', [PostsController::class, 'getPostByPostId']);
Route::get('/allpost', [PostsController::class, 'getAllPost']);

/*
|----------------------------------------------------
|Project Area
|----------------------------------------------------
*/
Route::post('/addproject', [ProjectController::class, 'createProject']);
Route::post('/updateproject', [ProjectController::class, 'updateProject']);
Route::post('/deleteproject', [ProjectController::class, 'destroyProject']);
Route::post('/homeproject', [ProjectController::class, 'getProjectByPortfolioId']);
Route::post('/oneproject', [ProjectController::class, 'getProjectByProjectId']);
Route::get('/allproject', [ProjectController::class, 'getAllProjects']);

/*
|----------------------------------------------------
|Reference Area
|----------------------------------------------------
*/
Route::post('/addreference', [ReferenceController::class, 'createReference']);
Route::post('/updatereference', [ReferenceController::class, 'updateReference']);
Route::post('/deletereference', [ReferenceController::class, 'destroyReference']);
Route::post('/homereference', [ReferenceController::class, 'getReferenceByPortfolioId']);
Route::post('/onereference', [ReferenceController::class, 'getReferenceByReferenceId']);
Route::get('/allreference', [ReferenceController::class, 'getAllReference']);

/*
|----------------------------------------------------
|Reply Area
|----------------------------------------------------
*/
Route::post('/addreply', [ReplyController::class, 'createReply']);
Route::post('/updatereply', [ReplyController::class, 'updateReply']);
Route::post('/deletereply', [ReplyController::class, 'destroyReply']);
Route::post('/homereply', [ReplyController::class, 'getReplyByCommentId']);
Route::post('/onereply', [ReplyController::class, 'getReplyByReplyId']);
Route::get('/allreply', [ReplyController::class, 'getAllReply']);

/*
|----------------------------------------------------
|Skill Area
|----------------------------------------------------
*/
Route::post('/addskill', [SkillsController::class, 'createSkill']);
Route::post('/updateskill', [SkillsController::class, 'updateSkill']);
Route::post('/deleteskill', [SkillsController::class, 'destroySkill']);
Route::post('/homeskill', [SkillsController::class, 'getSkillByPortfolioId']);
Route::post('/oneskill', [SkillsController::class, 'getSkillBySkillId']);
Route::get('/allskill', [SkillsController::class, 'getAllSkills']);

/*
|----------------------------------------------------
|Workexperience Area
|----------------------------------------------------
*/
Route::post('/addworkexperience', [WorkexperienceController::class, 'createWorkExperience']);
Route::post('/updateworkexperience', [WorkexperienceController::class, 'updateWorkExperience']);
Route::post('/deleteworkexperience', [WorkexperienceController::class, 'destroyWorkExperience']);
Route::post('/homeworkexperience', [WorkexperienceController::class, 'getWorkExperienceByPortfolioId']);
Route::post('/oneworkexperience', [WorkexperienceController::class, 'getWorkExperienceByWorkExperienceId']);
Route::get('/allworkexperience', [WorkexperienceController::class, 'getAllWorkExperience']);

/*
|----------------------------------------------------
|Auth Area
|----------------------------------------------------
*/
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [AuthenticationController::class, 'profile']);
});
