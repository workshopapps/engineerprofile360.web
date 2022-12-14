<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Exception;
use App\Http\Requests\CreateQuestionRequest;
use App\Http\Requests\CSVQuestionRequest;
use App\Models\Assessment;
use App\Models\Category;
use App\Services\QuestionService;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class QuestionsController extends Controller
{
    public function addManually(CreateQuestionRequest $request): JsonResponse
    {
        try {
            $output = QuestionService::addQuestions($request->validated());
            return $this->sendResponse(false, null, 'Question created', $output, Response::HTTP_CREATED);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Question not created', $e->getMessage());
        }
    }

    public function addCSV(CSVQuestionRequest $request)
    {
        try {
            $result = QuestionService::uploadQuestions($request->validated());
            return $this->sendResponse(false, null, 'Successful!', $result, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Couldn't add questions", $e->getMessage());
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
        try {
            $questions = Question::find($id);
            $checkQuestions = Question::where('id', $id)->exists();
            if (!$checkQuestions) {
                return $this->sendResponse(true, 'Fetch Question By ID failed', 'No questions exist for this company ID', null, Response::HTTP_NOT_FOUND);
            }
            return $this->sendResponse(false, null, 'OK', $questions, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Fetch Question By ID failed', $e->getMessage());
        }
    }

    public function getQuestByAssId($id)
    {
        try {
            $questions = Question::where('assessment_id', $id)->get();
            return $this->sendResponse(false, null, "OK", $questions, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Fetch Question By Assessment ID failed", $e->getMessage());
        }
    }


    public function getQuestByComId($id): JsonResponse
    {
        try {
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


    /**
     * Get all questions created by an Organization
     *
     * @param  string  $id
     * @return Response
     */
    public function getQuestByCatId($id)
    {
        try {
            $questions = Question::where('category_id', $id);
            if (!$questions->count()) return $this->sendResponse(true, "Fetch Question By Category ID failed", 'No Question Exist for this Category ID', null, Response::HTTP_NOT_FOUND);
            foreach ($questions as $question) {
                $question->options = json_decode($question->options);
                $question->correct_answers = json_decode($question->correct_answers);
            }
            return $this->sendResponse(false, null, "OK", $questions->get(), Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Fetch Question By Category ID failed", $e->getMessage());
        }
    }

    public function deleteQuestion($question_id)
    {
        try {

            // Get question by id
            $question = Question::find($question_id);
            if (!$question) {
                return $this->sendResponse(
                    true,
                    'Fetch Question By ID failed',
                    'Question does not exist',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }
            $question->delete();

            // send response
            return $this->sendResponse(false, null, 'Question Deleted', [], Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Question not fetched', $e->getMessage());
        }
    }
}