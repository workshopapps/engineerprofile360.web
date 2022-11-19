<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Exception;
use Illuminate\Http\Request;
use App\Http\Requests\CreateQuestionRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class QuestionsController extends Controller
{

    public function addManually(CreateQuestionRequest $request) :JsonResponse
    {
        $data = $request->all();
        try{
            Question::create($data);
            return $this->successResponse(true, 'Question created', Response::HTTP_CREATED);
        }  catch (Exception $e) {
            return $this->errorResponse('Question not created', $e->getMessage());
        }
    }


    public function updateQuestion(CreateQuestionRequest $request, $question_id)
    {
        try{
            $updatedData = $request->all();

            // Get question by id
            $question = Question::find($question_id);

            if( !$question ) {
                return $this->errorResponse(
        'Question does not exist',
        'Question not found',
            Response::HTTP_NOT_FOUND
                );
            }
            $question->update($updatedData);

            // success response
            return $this->successResponse(true, 'Question updated successfully', Response::HTTP_OK);
        }  catch (Exception $e) {
            return $this->errorResponse('Question not fetched', $e->getMessage());
        }
    }
}
