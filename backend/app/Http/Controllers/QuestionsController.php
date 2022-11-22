<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Exception;
use App\Http\Requests\CreateQuestionRequest;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class QuestionsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function addManually(CreateQuestionRequest $request): JsonResponse
    {
        $data = $request->all();
        $query = $request->query("type");
        try {
            if($query === "manual"){
                Question::create($data);
                return $this->successResponse(true, 'Question created', Response::HTTP_CREATED);
            }else {
                return $this->errorResponse('Query failed', Response::HTTP_FAILED);
            }

        } catch (Exception $e) {
            return $this->errorResponse('Question not created', $e->getMessage());
        }
    }


    public function updateQuestion(CreateQuestionRequest $request, $question_id)
    {
        try {
            $updatedData = $request->all();

            // Get question by id
            $question = Question::find($question_id);

            if (!$question) {
                return $this->errorResponse(
                    'Question does not exist',
                    'Question not found',
                    Response::HTTP_NOT_FOUND
                );
            }
            $question->update($updatedData);

            // success response
            return $this->successResponse(true, 'Question updated successfully', Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->errorResponse('Question not fetched', $e->getMessage());
        }
    }

    public function getQuestByOrgId($org_id)
    {
        try {
            $question = Question::where('org_id', $org_id)->get();
            if (is_null($question)) {
                return $this->errorResponse('No questions exist for this company', Response::HTTP_NOT_FOUND);
            }
            return $this->successResponse(true, 'OK', $question, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->errorResponse('Questions not fetched', $e->getMessage());
        }
    }

    public function getByCategoryId(string $id): JsonResponse
    {
        $question = Question::where(["category_id" => $id]);
        if (!$question->first()) return $this->errorResponse("Question not found", true, Response::HTTP_NOT_FOUND);
        return $this->successResponse(true, "Successful", $question->get(), Response::HTTP_OK);
    }

    public function getQuestionByAssessmentId($assessmentId)
    {
        try
        {
            $questions = Question::where('assessment_id', $assessmentId)->get();

            if(is_null($questions)){
                return $this->errorResponse('No Question Exist for this Assessment ID', Response::HTTP_NOT_FOUND);
            }
            return $this->successResponse(true, "OK", $questions, Response::HTTP_OK);
        }
        catch(Exception $e)
        {
            return $this->errorResponse("Fetch Question By Assessment ID Error",$e->getMessage());
        }
    }
}
