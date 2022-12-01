<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Exception;
use App\Http\Requests\CreateQuestionRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class QuestionsController extends Controller
{
    public function addManually(Request $request): JsonResponse
    {


        try {
            $payload = json_decode($request->getContent(), true);

            for($i = 0 ; $i < count($payload); $i++){
                if(!isset($payload[$i]["category_id"]) || !isset($payload[$i]["assessment_id"]) || !isset($payload[$i]["company_id"]) || !isset($payload[$i]["correct_answers"]) || !isset($payload[$i]["options"]) || !isset($payload[$i]["timeframe"]) || !isset($payload[$i]["is_multiple_answers"])){
                    return $this->sendResponse(true, "expected a valid payload", "invalid payload given.", $payload[$i]["correct_answers"], 400);
                }


                $category_id = $payload[$i]["category_id"];
                $company_id = $payload[$i]["company_id"];
                $assessment_id = $payload[$i]["assessment_id"];
                $correct_answers = $payload[$i]["correct_answers"];
                $options = $payload[$i]["options"];
                $timeframe = $payload[$i]["timeframe"];
                $is_multiple_answers = $payload[$i]["is_multiple_answers"];



                $data = [
                    'category_id' => $category_id,
                    'assessment_id' => $assessment_id,
                    'company_id' => $company_id,
                    'correct_answers' => $correct_answers,
                    'options' => $options,
                    'timeframe' => $timeframe,
                    'is_multiple_answers' => $is_multiple_answers
                ];

                Question::create($data);

            }

            return $this->sendResponse(false, null, 'Question created', $payload, Response::HTTP_CREATED);


        } catch (Exception $e) {
            return $this->sendResponse(true, 'Question not created', $e->getMessage());
        }
    }


    public function updateQuestion(CreateQuestionRequest $request, $question_id)
    {
        try {
            $updatedData = $request->all();

            // Get question by id
            $question = Question::find($question_id);
            $checkQuestions = Question::where('id', $question_id)->exists();
            if (!$checkQuestions) {
                return $this->sendResponse(
                    true,
                    'Fetch Question By ID failed',
                    'Question does not exist',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }
            $question->update($updatedData);

            // send response
            return $this->sendResponse(false, null, 'Question updated', $updatedData, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Question not fetched', $e->getMessage());
        }
    }

    public function getQuestById($id): JsonResponse
    {
        try
        {
            $questions = Question::find($id);
            $checkQuestions = Question::where('id', $id)->exists();
            if (!$checkQuestions) {
                return $this->sendResponse(true, 'Fetch Question By ID failed', 'No questions exist for this ID', null, Response::HTTP_NOT_FOUND);
            }
            return $this->sendResponse(false, null, 'OK', $questions, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Fetch Question By ID failed', $e->getMessage());
        }
    }

    public function getQuestByComId($id): JsonResponse
    {
        try
        {
            $questions = Question::where('company_id', $id)->get();
            $checkQuestions = Question::where('company_id', $id)->exists();
            if (!$checkQuestions) {
                return $this->sendResponse(true, 'Fetch Question By Company ID failed', 'No questions exist for this Company ID', null, Response::HTTP_NOT_FOUND);
            }
            return $this->sendResponse(false, null, 'OK', $questions, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Fetch Question By Company ID failed', $e->getMessage());
        }
    }

    public function getQuestByCatId($id)
    {
        try
        {
            $questions = Question::where('category_id', $id)->get();
            $checkQuestions = Question::where('category_id', $id)->exists();
            if(!$checkQuestions){
                return $this->sendResponse(true, "Fetch Question By Category ID failed", 'No Question Exist for this Category ID', null, Response::HTTP_NOT_FOUND);
            }
            return $this->sendResponse(false, null, "OK", $questions, Response::HTTP_OK);
        }
        catch(Exception $e)
        {
            return $this->sendResponse(true, "Fetch Question By Category ID failed", $e->getMessage());
        }
    }

    public function getQuestByAssId($id)
    {
        try
        {
            $questions = Question::where('assessment_id', $id)->get();
            $checkQuestions = Question::where('assessment_id', $id)->exists();
            if(!$checkQuestions){
                return $this->sendResponse(true, "Fetch Question By Assessment ID failed", 'No Question Exist for this Assessment ID', null, Response::HTTP_NOT_FOUND);
            }
            return $this->sendResponse(false, null, "OK", $questions, Response::HTTP_OK);
        }
        catch(Exception $e)
        {
            return $this->sendResponse(true, "Fetch Question By Assessment ID failed", $e->getMessage());
        }
    }
}
