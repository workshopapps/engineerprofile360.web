<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class QuestionsController extends Controller
{

    public function addManually(Request $request) :JsonResponse{

        $type = $request->query('type');
       if($type == "manual"){
                        // attempts to validate data coming for the creation of the question model

                        $validator = Validator::make($request->all(),[

                            'category_id' => "required",
                            'assessment_id' => "required",
                            'question' => 'required|string',
                            'correct_answers' => 'required|string',
                            'options' => 'required|string',
                            'timeframe' => 'required|string',
                            'is_multiple_answers' => 'required|boolean'

                        ]
                    );


                // when validation of the data from the request fails
                if ($validator->fails())
                {
                    return $this->errorResponse("Validation fails", $validator->errors());
                }
                $validatedData = $validator->validated();


                //when validation is successful, save as a new question
                $question = new Question();
                $question->question = $validatedData['question'];
                $question->options = $validatedData['options'];
                $question->timeframe = $validatedData['timeframe'];
                $question->correct_answers = $validatedData['correct_answers'];
                $question->is_multiple_answers = $validatedData['is_multiple_answers'];
                $question->category_id = $validatedData['category_id'];
                $question->assessment_id = $validatedData['assessment_id'];
                $question->save();

                return $this->successResponse(true, "Question Added Successfully", $question);
       }
       else{
        return $this->errorResponse(
            'Query type not manual',
            'Query fails',
            Response::HTTP_NOT_FOUND
        );
       }

    }


    public function updateQuestion(Request $request, $quest_id, $ass_id)
    {
        // attempts to validate data coming for the update of the question model
        $validator = Validator::make($request->all(),[

                'question_id' => "required",
                'assessment_id' => "required",
                'category_id' => "required",
                'question' => 'required|string',
                'wrong_answers' => 'required|string',
                'correct_answers' => 'required|string',
                'option' => 'required|string',
                'timeframe' => 'required|string',
                'is_multiple_answer' => 'required|boolean'

            ]
        );

        // when validation of the data from the request fails
        if ($validator->fails())
        {
            return sendResponse(true, 422, "Validation fails", $validator->errors());
        }

        $validatedData = $validator->validated();

        // fetech the Question to be updated

        $question = Question::find($quest_id);

        $question->question = $validatedData['question'];
        $question->options = $validatedData['options'];
        $question->timeframe = $validatedData['timeframe'];
        $question->correct_answers = $validatedData['correct_answers'];
        $question->is_multiple_answer = $validatedData['is_multiple_answer'];
        $question->category_id = $validatedData['category_id'];
        $question->assessment_id = $validatedData['ass_id'];
        $question->save();


        return sendResponse(true, 200, "Question Updated Successfully", $question);

    }
}
